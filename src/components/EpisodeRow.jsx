import { Link, useNavigate } from 'react-router'
import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { formatAirDate } from '@/lib/format-date'
import { getExplanation } from '@/lib/get-explanation'
import { cn } from '@/lib/utils'

export default function EpisodeRow({ episode }) {
  const navigate = useNavigate()
  const hasExplanation = Boolean(getExplanation(episode.id))

  return (
    <TableRow
      className={cn('cursor-pointer', !hasExplanation && 'opacity-60')}
      onClick={() => navigate(`/episodes/${episode.id}`)}
    >
      <TableCell className="w-48 py-4">
        <img
          src={episode.thumbnail_url}
          alt=""
          className="h-28 w-48 rounded object-cover"
          loading="lazy"
        />
      </TableCell>
      <TableCell className="whitespace-normal py-4">
        <Link
          to={`/episodes/${episode.id}`}
          className="font-medium"
          onClick={(e) => e.stopPropagation()}
        >
          {episode.name}
        </Link>
        <div className="mt-1 flex items-center gap-2">
          <Badge className="h-4 bg-character-secondary px-1.5 text-[10px] text-character-secondary-foreground">
            S{episode.season} · E{episode.episode}
          </Badge>
          <Badge className="h-4 bg-character-secondary px-1.5 text-[10px] text-character-secondary-foreground">
            {formatAirDate(episode.air_date)}
          </Badge>
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{episode.description}</p>
      </TableCell>
    </TableRow>
  )
}
