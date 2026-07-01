import { ScholarPaper } from "@/model/paper.model";

interface PaperDetailsProps {
  paper: ScholarPaper;
  onBack: () => void;
}

// Optional helper if your API returns abstract_inverted_index
function reconstructAbstract(index?: Record<string, number[]>): string {
  if (!index) return "No abstract available.";
  const words: string[] = [];
  Object.entries(index).forEach(([word, positions]) => {
    positions.forEach((pos) => {
      words[pos] = word;
    });
  });
  return words.join(" ");
}

export default function PaperDetails({ paper, onBack }: PaperDetailsProps) {
  const pdfUrl =
    paper.best_oa_location?.pdf_url || paper.primary_location?.pdf_url;
  const sourceName = paper.primary_location?.source?.display_name;

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <button
        onClick={onBack}
        className="mb-4 text-sm text-primary font-medium hover:underline flex items-center gap-1"
      >
        ← Back to list
      </button>

      <h2 className="text-2xl font-bold text-foreground mb-2">{paper.title}</h2>

      <p className="text-md text-muted-foreground mb-4">
        <span className="font-medium text-foreground">Authors:</span>{" "}
        {paper.authorships?.map((a) => a.author.display_name).join(", ")}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm border-y border-border py-3">
        <div>
          <span className="block text-muted-foreground text-xs">Year</span>
          <span className="font-semibold">
            {paper.publication_year || "N/A"}
          </span>
        </div>
        <div>
          <span className="block text-muted-foreground text-xs">Citations</span>
          <span className="font-semibold">{paper.cited_by_count || 0}</span>
        </div>
        <div>
          <span className="block text-muted-foreground text-xs">Source</span>
          <span className="font-semibold truncate block max-w-xs">
            {sourceName || "Unknown"}
          </span>
        </div>
        <div>
          <span className="block text-muted-foreground text-xs">Full Text</span>
          {pdfUrl ? (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="text-destructive font-bold hover:underline"
            >
              [PDF] Link
            </a>
          ) : (
            <span className="text-muted-foreground">Unavailable</span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">Abstract</h3>
        <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
          {reconstructAbstract(paper.abstract_inverted_index)}
        </p>
      </div>
    </div>
  );
}
