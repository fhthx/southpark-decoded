import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useWindowVirtualizer } from '@tanstack/react-virtual'
import { Outlet, useLoaderData, useOutletContext } from 'react-router'
import { Table, TableBody } from '@/components/ui/table'
import EpisodeRow from '@/components/EpisodeRow'
import { getExplanation } from '@/lib/get-explanation'

export default function EpisodeListPage() {
  const episodes = useLoaderData()
  const { search, season, contextFilter } = useOutletContext()
  const containerRef = useRef(null)
  const [scrollMargin, setScrollMargin] = useState(0)

  useLayoutEffect(() => {
    setScrollMargin(containerRef.current?.offsetTop ?? 0)
  }, [])

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

  const rowVirtualizer = useWindowVirtualizer({
    count: filteredEpisodes.length,
    estimateSize: () => 144,
    overscan: 8,
    scrollMargin,
  })

  const virtualItems = rowVirtualizer.getVirtualItems()
  const paddingTop = virtualItems.length > 0 ? virtualItems[0].start - rowVirtualizer.options.scrollMargin : 0
  const paddingBottom =
    virtualItems.length > 0 ? rowVirtualizer.getTotalSize() - virtualItems[virtualItems.length - 1].end : 0

  return (
    <>
      <p className="mb-4 text-sm text-muted-foreground">
        {filteredEpisodes.length} of {episodes.length} episodes
      </p>

      <div ref={containerRef}>
        <Table>
          <TableBody>
            {paddingTop > 0 && (
              <tr>
                <td style={{ height: paddingTop }} />
              </tr>
            )}
            {virtualItems.map((virtualRow) => (
              <EpisodeRow
                key={filteredEpisodes[virtualRow.index].id}
                episode={filteredEpisodes[virtualRow.index]}
                data-index={virtualRow.index}
                ref={rowVirtualizer.measureElement}
              />
            ))}
            {paddingBottom > 0 && (
              <tr>
                <td style={{ height: paddingBottom }} />
              </tr>
            )}
          </TableBody>
        </Table>
      </div>
      <Outlet />
    </>
  )
}
