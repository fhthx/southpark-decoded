import { CornerUpLeft, ExternalLink } from "lucide-react";
import { getExplanation } from "@/lib/get-explanation";

const CITATION_PATTERN = /\[(\d+)\]/g;

// Summaries mark citations inline as "...claim[1]..."; this splits that
// string into text/number pairs so citation numbers can render as links
// down to the matching numbered source.
function renderSummary(summary, episodeId) {
  const parts = summary.split(CITATION_PATTERN);

  return parts.map((part, i) => {
    if (i % 2 === 0) return part;

    return (
      <sup key={i}>
        <a
          href={`#source-${episodeId}-${part}`}
          id={`citation-${episodeId}-${part}`}
          className="text-blue-600 dark:text-blue-400"
        >
          [{part}]
        </a>
      </sup>
    );
  });
}

export default function EpisodeExplanation({ episodeId }) {
  const explanation = getExplanation(episodeId);
  const parodyOf = explanation?.parodyOf ?? [];

  if (!explanation?.summary && parodyOf.length === 0) {
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

  const sources = explanation?.sources ?? [];
  // Long summaries can use a blank line to break into paragraphs.
  const paragraphs = explanation?.summary ? explanation.summary.split(/\n\n+/) : [];

  return (
    <>
      {paragraphs.length > 0 && (
        <div className="space-y-2">
          <p className="font-medium text-foreground">Decoded</p>
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed">
              {renderSummary(paragraph, episodeId)}
            </p>
          ))}
        </div>
      )}

      {parodyOf.length > 0 && (
        <div className="space-y-1">
          <p className="font-medium text-foreground">Parodies</p>
          <ul className="list-disc space-y-0.5 pl-4 text-sm leading-relaxed text-muted-foreground">
            {parodyOf.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {sources.length > 0 && (
        <div className="space-y-2">
          <p className="font-medium text-foreground">Sources</p>
          <ol className="list-decimal space-y-1 pl-4">
            {sources.map((source, i) => {
              const n = i + 1;
              return (
                <li key={source.url} id={`source-${episodeId}-${n}`}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400"
                  >
                    {source.label}
                    <ExternalLink className="size-3 shrink-0" />
                  </a>
                  <a
                    href={`#citation-${episodeId}-${n}`}
                    aria-label="Back to reference in text"
                    className="ml-1 inline-block align-middle text-muted-foreground"
                  >
                    <CornerUpLeft className="size-3" />
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
}
