import { useMemo, useState } from 'react'
import { Outlet, useLoaderData } from 'react-router'
import { Table, TableBody } from '@/components/ui/table'
import EpisodeRow from '@/components/EpisodeRow'
import OptionsPopover from '@/components/OptionsPopover'
import { getExplanation } from '@/lib/get-explanation'

export default function EpisodeListPage() {
  const episodes = useLoaderData()
  const [search, setSearch] = useState('')
  const [season, setSeason] = useState('all')
  const [contextFilter, setContextFilter] = useState('all')

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
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {filteredEpisodes.length} of {episodes.length} episodes
        </p>
        <OptionsPopover
          episodes={episodes}
          search={search}
          onSearchChange={setSearch}
          season={season}
          onSeasonChange={setSeason}
          contextFilter={contextFilter}
          onContextFilterChange={setContextFilter}
        />
      </div>

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
