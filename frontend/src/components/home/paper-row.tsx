import { ScholarPaper } from "@/model/paper.model";
import { FiBookmark } from "react-icons/fi";

interface PaperRowProps {
  paper: ScholarPaper;
}

export default function PaperRow({ paper }: PaperRowProps) {
  const paperUrl =
    paper.best_oa_location?.landing_page_url ||
    paper.primary_location?.landing_page_url ||
    paper.best_oa_location?.pdf_url ||
    paper.primary_location?.pdf_url;

  const pdfUrl =
    paper.best_oa_location?.pdf_url || paper.primary_location?.pdf_url;

  return (
    <div className="group flex items-start justify-between gap-4 rounded border-b border-border p-2 transition hover:bg-card/50">
      <div className="flex-1">
        {paperUrl ? (
          <a href={paperUrl} target="_blank" rel="noreferrer">
            <h3 className="cursor-pointer text-lg font-semibold text-primary hover:underline">
              {paper.title}
            </h3>
          </a>
        ) : (
          <h3 className="text-lg font-semibold text-primary">{paper.title}</h3>
        )}

        <p className="mt-1 text-sm text-muted-foreground">
          {paper.authorships?.map((a) => a.author.display_name).join(", ")}
          {paper.publication_year ? ` — (${paper.publication_year})` : ""}
        </p>

        <p className="mt-1 text-xs text-muted-foreground/80">
          Citations: {paper.cited_by_count || 0}
        </p>
      </div>

      {pdfUrl && (
        <a className="shrink-0 rounded border border-destructive/20 bg-destructive/10 px-2 py-1 text-xs font-bold text-destructive transition hover:bg-destructive hover:text-destructive-foreground">
          PDF
        </a>
      )}
      <FiBookmark />
    </div>
  );
}
