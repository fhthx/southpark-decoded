import { explanations } from '@/data/explanations'

// Aggregates every `parodyOf` entry across explanations.js into a single
// leaderboard, keyed by URL (so the same target named slightly differently
// across episodes still collapses into one row). Sorted by how many
// episodes reference it, then alphabetically.
export function getParodyLeaderboard() {
  const byUrl = new Map()

  for (const [episodeId, entry] of Object.entries(explanations)) {
    if (!entry.parodyOf?.length) continue

    for (const target of entry.parodyOf) {
      const existing = byUrl.get(target.url)
      if (existing) {
        existing.episodeIds.push(Number(episodeId))
      } else {
        byUrl.set(target.url, {
          name: target.name,
          url: target.url,
          episodeIds: [Number(episodeId)],
        })
      }
    }
  }

  return [...byUrl.values()].sort((a, b) => {
    if (b.episodeIds.length !== a.episodeIds.length) {
      return b.episodeIds.length - a.episodeIds.length
    }
    return a.name.localeCompare(b.name)
  })
}
