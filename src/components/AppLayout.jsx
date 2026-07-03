import { useState } from 'react'
import { Link, Outlet, useRouteLoaderData } from 'react-router'
import OptionsPopover from '@/components/OptionsPopover'

export default function AppLayout() {
  const episodes = useRouteLoaderData('episodeList')
  const [search, setSearch] = useState('')
  const [season, setSeason] = useState('all')
  const [contextFilter, setContextFilter] = useState('all')

  return (
    <div className="mx-auto min-h-svh max-w-4xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between gap-4">
        <div className="flex-1 text-center sm:text-left">
          <Link to="/" className="text-2xl font-semibold tracking-tight text-foreground">
            South Park Decoded
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">
            Every episode, and the real-world story behind it.
          </p>
        </div>
        {episodes && (
          <OptionsPopover
            episodes={episodes}
            search={search}
            onSearchChange={setSearch}
            season={season}
            onSeasonChange={setSeason}
            contextFilter={contextFilter}
            onContextFilterChange={setContextFilter}
          />
        )}
      </header>

      <Outlet context={{ search, season, contextFilter }} />
    </div>
  )
}
