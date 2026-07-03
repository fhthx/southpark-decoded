import { getExplanation } from '@/lib/get-explanation'

export default function EpisodeExplanation({ episodeId }) {
  const explanation = getExplanation(episodeId)

  if (!explanation) {
    return (
      <div>
        <p className="font-medium text-foreground">Real-world explanation coming soon</p>
        <p className="mt-1 text-sm leading-relaxed">
          We haven't written up the real-world story behind this one yet.
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="font-medium text-foreground">The real story</p>
      <p className="mt-1 text-sm leading-relaxed">{explanation.summary}</p>
    </div>
  )
}
