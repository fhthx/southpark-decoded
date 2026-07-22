import { Info } from 'lucide-react'
import { Link, useLoaderData } from 'react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function ParodyLeaderboardPage() {
  const { episodes, leaderboard } = useLoaderData()
  const episodesById = new Map(episodes.map((episode) => [episode.id, episode]))

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-1.5">
          <h1 className="text-xl font-semibold">Most Parodied</h1>
          <span className="group relative inline-flex">
            <Info className="size-4 cursor-help text-muted-foreground" />
            <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-md bg-popover px-3 py-2 text-xs leading-relaxed text-popover-foreground opacity-0 shadow-md ring-1 ring-border transition-opacity group-hover:opacity-100">
              To count as a parody, the person or work has to be a main focus of the episode - not just a background
              character or passing cameo.
            </span>
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {leaderboard.length} real people, shows, and films South Park has directly parodied, ranked by how many
          episodes reference them.
        </p>
      </div>

      <div className="space-y-1">
        {leaderboard.map((target, i) => (
          <div key={target.url}>
            {i > 0 && <Separator />}
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 py-3">
              <div className="min-w-0 flex-1">
                <a
                  href={target.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-400"
                >
                  {target.name}
                </a>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {target.episodeIds.map((episodeId) => {
                    const episode = episodesById.get(episodeId)
                    return (
                      <Link key={episodeId} to={`/episodes/${episodeId}`}>
                        <Badge
                          variant="outline"
                          className="h-5 cursor-pointer px-1.5 text-[10px] hover:bg-muted"
                        >
                          {episode ? `S${episode.season}E${episode.episode}` : `#${episodeId}`}
                        </Badge>
                      </Link>
                    )
                  })}
                </div>
              </div>
              <Badge className="h-5 shrink-0 bg-amber-600 px-2 text-[11px] text-white dark:bg-amber-500">
                {target.episodeIds.length} {target.episodeIds.length === 1 ? 'episode' : 'episodes'}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
