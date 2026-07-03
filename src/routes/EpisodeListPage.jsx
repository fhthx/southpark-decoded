import { useLoaderData } from 'react-router'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import EpisodeRow from '@/components/EpisodeRow'

export default function EpisodeListPage() {
  const episodes = useLoaderData()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Episode</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="text-right">Air date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {episodes.map((episode) => (
          <EpisodeRow key={episode.id} episode={episode} />
        ))}
      </TableBody>
    </Table>
  )
}
