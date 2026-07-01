import Link from "next/link";
import { ScholarPaper } from "@/model/paper.model";

interface PaperRowProps {
  paper: ScholarPaper;
}

export default function PaperRow({ paper }: PaperRowProps) {
  const pdfUrl =
    paper.best_oa_location?.pdf_url || paper.primary_location?.pdf_url;

  return (
    <div className="group flex items-start justify-between gap-4 rounded border-b border-border p-2 transition hover:bg-card/50">
      <div className="flex-1">
        <Link href={`/paper/${encodeURIComponent(paper.id)}`}>
          <h3 className="cursor-pointer text-lg font-semibold text-primary group-hover:underline">
            {paper.title}
          </h3>
        </Link>

        <p className="mt-1 text-sm text-muted-foreground">
          {paper.authorships?.map((a) => a.author.display_name).join(", ")}
          {paper.publication_year ? ` — (${paper.publication_year})` : ""}
        </p>

        <p className="mt-1 text-xs text-muted-foreground/80">
          Citations: {paper.cited_by_count || 0}
        </p>
      </div>

      {pdfUrl && (
        <a
          href={pdfUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded border border-destructive/20 bg-destructive/10 px-2 py-1 text-xs font-bold text-destructive transition hover:bg-destructive hover:text-destructive-foreground"
        >
          [PDF] Download
        </a>
      )}
    </div>
  );
}
