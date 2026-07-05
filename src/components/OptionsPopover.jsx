import { useMemo } from 'react'
import { Moon, MoreVertical, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { characterThemes } from '@/lib/character-themes'
import { useTheme } from '@/hooks/use-theme'

export default function OptionsPopover({
  episodes,
  search,
  onSearchChange,
  season,
  onSeasonChange,
  contextFilter,
  onContextFilterChange,
}) {
  const { mode, setMode, character, setCharacter } = useTheme()
  const isKenny = character === 'kenny'

  const seasons = useMemo(() => {
    const unique = [...new Set(episodes.map((episode) => episode.season))]
    return unique.sort((a, b) => b - a)
  }, [episodes])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={isKenny ? 'ghost' : 'default'}
          size="icon"
          aria-label="Options"
          style={isKenny ? { backgroundColor: '#e8b892', color: 'var(--character-secondary)' } : undefined}
        >
          <MoreVertical />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-muted-foreground">Appearance</p>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Toggle light/dark mode"
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
          >
            {mode === 'dark' ? <Sun /> : <Moon />}
          </Button>
        </div>

        <Separator />

        <Input
          placeholder="Search episode names..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <Select value={season} onValueChange={onSeasonChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All seasons" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All seasons</SelectItem>
            {seasons.map((seasonNumber) => (
              <SelectItem key={seasonNumber} value={String(seasonNumber)}>
                Season {seasonNumber}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <ToggleGroup
          type="single"
          variant="outline"
          value={contextFilter}
          onValueChange={(value) => value && onContextFilterChange(value)}
          className="w-full"
        >
          <ToggleGroupItem value="all" className="flex-1 text-xs">
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="has" className="flex-1 text-xs">
            Has story
          </ToggleGroupItem>
          <ToggleGroupItem value="missing" className="flex-1 text-xs">
            No story yet
          </ToggleGroupItem>
        </ToggleGroup>

        <Separator />

        <div>
          <p className="mb-2 text-xs font-medium text-muted-foreground">Character theme</p>
          <div className="flex items-center gap-2">
            {Object.entries(characterThemes).map(([key, { label, primary, icon }]) => (
              <button
                key={key}
                type="button"
                title={label}
                aria-label={`${label} theme`}
                onClick={() => setCharacter(key)}
                className="block shrink-0 overflow-hidden rounded-md p-0 transition-transform"
                style={{
                  outline: character === key ? `2px solid ${primary}` : 'none',
                  outlineOffset: '2px',
                }}
              >
                <img src={icon} alt={label} className="h-10 w-auto" />
              </button>
            ))}
            {character && (
              <button
                type="button"
                onClick={() => setCharacter(null)}
                className="ml-1 text-xs text-muted-foreground underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
