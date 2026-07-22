import { ExternalLink } from "lucide-react";
import { getExplanation } from "@/lib/get-explanation";

const CITATION_PATTERN = /\[(\d+)\]/g;

// Summaries mark citations inline as "...claim[1]..."; this splits that
// string into text/number pairs and renders each number as a link straight
// to the matching source, with the source label available on hover.
function renderSummary(summary, sources) {
  const parts = summary.split(CITATION_PATTERN);

  return parts.map((part, i) => {
    if (i % 2 === 0) return part;

    const source = sources[Number(part) - 1];
    if (!source) return <sup key={i}>[{part}]</sup>;

    return (
      <sup key={i}>
        <a
          href={source.url}
          target="_blank"
          rel="noreferrer"
          title={source.label}
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
    return null;
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
              {renderSummary(paragraph, sources)}
            </p>
          ))}
        </div>
      )}

      {parodyOf.length > 0 && (
        <div className="space-y-1">
          <p className="font-medium text-foreground">Parodies</p>
          <ul className="list-disc space-y-0.5 pl-4 text-sm leading-relaxed text-muted-foreground">
            {parodyOf.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400"
                >
                  {item.name}
                  <ExternalLink className="size-3 shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
