import { ArrowLeft } from 'lucide-react'
import { Link, useLoaderData } from 'react-router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import EpisodeExplanation from '@/components/EpisodeExplanation'

export default function EpisodeDetailPage() {
  const episode = useLoaderData()

  return (
    <article className="space-y-6">
      <Button variant="ghost" size="sm" asChild className="-ml-2">
        <Link to="/">
          <ArrowLeft />
          Back to all episodes
        </Link>
      </Button>

      <div className="space-y-2">
        <Badge variant="secondary">
          S{episode.season} · E{episode.episode}
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{episode.name}</h1>
        <p className="text-sm text-muted-foreground">
          Aired {episode.air_date} ·{' '}
          <a href={episode.wiki_url} target="_blank" rel="noreferrer" className="underline">
            wiki
          </a>
        </p>
      </div>

      <img
        src={episode.thumbnail_url}
        alt=""
        className="w-full max-w-md rounded-lg object-cover"
      />

      <Card>
        <CardHeader>
          <CardTitle>What happens</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">{episode.description}</p>
        </CardContent>
      </Card>

      <Separator />

      <EpisodeExplanation episodeId={episode.id} />
    </article>
  )
}
