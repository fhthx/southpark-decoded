import { useState } from 'react'
import { Link, Outlet, useRouteLoaderData } from 'react-router'
import OptionsPopover from '@/components/OptionsPopover'
import CharacterHatDecoration from '@/components/CharacterHatDecoration'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/utils'

export default function AppLayout() {
  const episodes = useRouteLoaderData('episodeList')
  const { character } = useTheme()
  const [search, setSearch] = useState('')
  const [season, setSeason] = useState('all')
  const [contextFilter, setContextFilter] = useState('all')

  const isKenny = character === 'kenny'

  return (
    <div className="mx-auto min-h-svh max-w-4xl px-4 py-8">
      <header
        className={cn('relative mb-8 rounded-xl bg-primary', isKenny ? 'p-2' : 'p-5')}
      >
        <CharacterHatDecoration />
        <div
          className={cn(
            'relative flex items-center justify-between gap-4 rounded-lg',
            isKenny ? 'border-4 p-2' : 'text-primary-foreground',
          )}
          style={
            isKenny
              ? {
                  backgroundColor: '#e8b892',
                  borderColor: 'var(--character-secondary)',
                  color: '#3f2415',
                }
              : undefined
          }
        >
          <div className="flex-1 text-center sm:text-left">
            <Link
              to="/"
              className={cn(
                'text-2xl font-semibold tracking-tight',
                !isKenny && 'text-primary-foreground',
              )}
            >
              South Park Decoded
            </Link>
            <p className={cn('mt-1 text-sm', isKenny ? 'opacity-80' : 'text-primary-foreground/80')}>
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
        </div>
      </header>

      <Outlet context={{ search, season, contextFilter }} />
    </div>
  )
}
