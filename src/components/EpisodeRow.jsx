import { Link, useNavigate } from 'react-router'
import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { formatAirDate } from '@/lib/format-date'

export default function EpisodeRow({ episode }) {
  const navigate = useNavigate()

  return (
    <TableRow className="cursor-pointer" onClick={() => navigate(`/episodes/${episode.id}`)}>
      <TableCell className="w-48">
        <img
          src={episode.thumbnail_url}
          alt=""
          className="h-28 w-48 rounded object-cover"
          loading="lazy"
        />
      </TableCell>
      <TableCell className="whitespace-normal">
        <Link
          to={`/episodes/${episode.id}`}
          className="font-medium"
          onClick={(e) => e.stopPropagation()}
        >
          {episode.name}
        </Link>
        <div className="mt-1 flex items-center gap-2">
          <Badge variant="secondary" className="h-4 px-1.5 text-[10px]">
            S{episode.season} · E{episode.episode}
          </Badge>
          <Badge variant="secondary" className="h-4 px-1.5 text-[10px]">
            {formatAirDate(episode.air_date)}
          </Badge>
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{episode.description}</p>
      </TableCell>
    </TableRow>
  )
}
