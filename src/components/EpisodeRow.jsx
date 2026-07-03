import { Link } from 'react-router'
import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

export default function EpisodeRow({ episode }) {
  return (
    <TableRow className="cursor-pointer">
      <TableCell className="w-16">
        <img
          src={episode.thumbnail_url}
          alt=""
          className="h-10 w-16 rounded object-cover"
          loading="lazy"
        />
      </TableCell>
      <TableCell>
        <Badge variant="secondary">
          S{episode.season} · E{episode.episode}
        </Badge>
      </TableCell>
      <TableCell className="whitespace-normal font-medium">
        <Link to={`/episodes/${episode.id}`} className="hover:underline">
          {episode.name}
        </Link>
      </TableCell>
      <TableCell className="text-right text-muted-foreground">{episode.air_date}</TableCell>
    </TableRow>
  )
}
