import { getExplanation } from "@/lib/get-explanation";

export default function EpisodeExplanation({ episodeId }) {
  const explanation = getExplanation(episodeId);

  if (!explanation) {
    return (
      <div className="space-y-2">
        <p className="font-medium text-foreground">
          Real-world explanation coming soon
        </p>
        <p className="text-sm leading-relaxed">
          We haven't written up the real-world story behind this one yet.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-2">
        <p className="font-medium text-foreground">Decoded</p>
        <p className="text-sm leading-relaxed">{explanation.summary}</p>
      </div>

      <div className="space-y-2">
        <p className="font-medium text-foreground">Sources</p>
        <ul className="space-y-1">
          {(explanation.sources ?? []).map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-600 underline dark:text-blue-400"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
