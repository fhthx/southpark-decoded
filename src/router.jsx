import { createBrowserRouter } from 'react-router'
import AppLayout from '@/components/AppLayout'
import EpisodeListPage from '@/routes/EpisodeListPage'
import EpisodeDrawer from '@/routes/EpisodeDrawer'
import EpisodeNotFoundDrawer from '@/routes/EpisodeNotFoundDrawer'
import NotFoundPage from '@/routes/NotFoundPage'
import { getAllEpisodes, getEpisodeById } from '@/lib/episodes-api'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        id: 'episodeList',
        element: <EpisodeListPage />,
        loader: () => getAllEpisodes(),
        children: [
          { index: true, element: null },
          {
            path: 'episodes/:id',
            element: <EpisodeDrawer />,
            loader: async ({ params }) => {
              const episode = await getEpisodeById(params.id)
              if (!episode) {
                throw new Response('Episode not found', { status: 404 })
              }
              return episode
            },
            errorElement: <EpisodeNotFoundDrawer />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
