import { createBrowserRouter } from 'react-router'
import AppLayout from '@/components/AppLayout'
import EpisodeListPage from '@/routes/EpisodeListPage'
import EpisodeDetailPage from '@/routes/EpisodeDetailPage'
import NotFoundPage from '@/routes/NotFoundPage'
import { getAllEpisodes, getEpisodeById } from '@/lib/episodes-api'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <EpisodeListPage />,
        loader: () => getAllEpisodes(),
      },
      {
        path: 'episodes/:id',
        element: <EpisodeDetailPage />,
        loader: async ({ params }) => {
          const episode = await getEpisodeById(params.id)
          if (!episode) {
            throw new Response('Episode not found', { status: 404 })
          }
          return episode
        },
        errorElement: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
