import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { getExplanation } from '@/lib/get-explanation'

export default function EpisodeExplanation({ episodeId }) {
  const explanation = getExplanation(episodeId)

  if (!explanation) {
    return (
      <Alert>
        <AlertTitle>Real-world explanation coming soon</AlertTitle>
        <AlertDescription>
          We haven't written up the real-world story behind this one yet.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>The real story</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">{explanation.summary}</p>
      </CardContent>
    </Card>
  )
}
