import { useMemo } from 'react'
import { Outlet, useLoaderData, useOutletContext } from 'react-router'
import { Table, TableBody } from '@/components/ui/table'
import EpisodeRow from '@/components/EpisodeRow'
import { getExplanation } from '@/lib/get-explanation'

export default function EpisodeListPage() {
  const episodes = useLoaderData()
  const { search, season, contextFilter } = useOutletContext()

  const filteredEpisodes = useMemo(() => {
    return episodes.filter((episode) => {
      if (search && !episode.name.toLowerCase().includes(search.toLowerCase())) {
        return false
      }
      if (season !== 'all' && episode.season !== Number(season)) {
        return false
      }
      const hasExplanation = Boolean(getExplanation(episode.id))
      if (contextFilter === 'has' && !hasExplanation) return false
      if (contextFilter === 'missing' && hasExplanation) return false
      return true
    })
  }, [episodes, search, season, contextFilter])

  return (
    <>
      <p className="mb-4 text-sm text-muted-foreground">
        {filteredEpisodes.length} of {episodes.length} episodes
      </p>

      <Table>
        <TableBody>
          {filteredEpisodes.map((episode) => (
            <EpisodeRow key={episode.id} episode={episode} />
          ))}
        </TableBody>
      </Table>
      <Outlet />
    </>
  )
}
