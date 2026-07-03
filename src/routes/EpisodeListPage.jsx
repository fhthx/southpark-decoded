import { Outlet, useLoaderData } from 'react-router'
import { Table, TableBody } from '@/components/ui/table'
import EpisodeRow from '@/components/EpisodeRow'

export default function EpisodeListPage() {
  const episodes = useLoaderData()

  return (
    <>
      <Table>
        <TableBody>
          {episodes.map((episode) => (
            <EpisodeRow key={episode.id} episode={episode} />
          ))}
        </TableBody>
      </Table>
      <Outlet />
    </>
  )
}
