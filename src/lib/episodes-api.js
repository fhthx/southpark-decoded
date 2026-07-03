const API_BASE = 'https://spapi.dev/api/episodes'
const CACHE_KEY = 'sp-episodes-v1'
const PAGE_BATCH_SIZE = 5

let episodesPromise = null

function sortEpisodesDescending(episodes) {
  return [...episodes].sort((a, b) => {
    if (a.air_date !== b.air_date) return a.air_date < b.air_date ? 1 : -1
    return b.id - a.id
  })
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed) || parsed.length === 0) return null
    return parsed
  } catch {
    return null
  }
}

function writeCache(episodes) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(episodes))
  } catch {
    // sessionStorage unavailable (private mode, quota, etc.) - fine to skip caching
  }
}

async function fetchPage(page) {
  const res = await fetch(`${API_BASE}?page=${page}`)
  if (!res.ok) {
    throw new Error(`spapi.dev request failed: ${res.status} ${res.statusText}`)
  }
  const remaining = res.headers.get('x-ratelimit-remaining')
  return { body: await res.json(), remaining: remaining === null ? null : Number(remaining) }
}

async function fetchAllEpisodesFromApi() {
  const first = await fetchPage(1)
  const episodes = [...first.body.data]
  const lastPage = first.body.meta.last_page

  const remainingPages = []
  for (let page = 2; page <= lastPage; page += 1) remainingPages.push(page)

  for (let i = 0; i < remainingPages.length; i += PAGE_BATCH_SIZE) {
    const batch = remainingPages.slice(i, i + PAGE_BATCH_SIZE)
    const results = await Promise.all(batch.map(fetchPage))
    results.forEach((result) => episodes.push(...result.body.data))

    const lowestRemaining = results.reduce((min, result) => {
      if (result.remaining === null) return min
      return min === null ? result.remaining : Math.min(min, result.remaining)
    }, null)
    if (lowestRemaining !== null && lowestRemaining < 5) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  return episodes
}

async function fetchFallbackEpisodes() {
  const module = await import('@/data/episodes-fallback.json')
  return module.default
}

export function getAllEpisodes() {
  if (episodesPromise) return episodesPromise

  episodesPromise = (async () => {
    const cached = readCache()
    if (cached) return cached

    try {
      const episodes = sortEpisodesDescending(await fetchAllEpisodesFromApi())
      writeCache(episodes)
      return episodes
    } catch (err) {
      console.error('Failed to fetch episodes from spapi.dev, using bundled fallback data', err)
      return sortEpisodesDescending(await fetchFallbackEpisodes())
    }
  })().catch((err) => {
    episodesPromise = null
    throw err
  })

  return episodesPromise
}

export async function getEpisodeById(id) {
  const episodes = await getAllEpisodes()
  return episodes.find((episode) => String(episode.id) === String(id)) ?? null
}
