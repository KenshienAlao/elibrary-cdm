// paper-row.tsx
"use client";

import { useState } from "react";
import { ScholarPaper } from "@/model/paper.model";
import { FiBookmark, FiFileText } from "react-icons/fi";
import { cn } from "@/lib/utils/cn";

interface PaperRowProps {
  paper: ScholarPaper;
}

export default function PaperRow({ paper }: PaperRowProps) {
  const [isSaved, setIsSaved] = useState(false);

  const paperUrl =
    paper.best_oa_location?.landing_page_url ||
    paper.primary_location?.landing_page_url ||
    paper.best_oa_location?.pdf_url ||
    paper.primary_location?.pdf_url;

  const pdfUrl =
    paper.best_oa_location?.pdf_url || paper.primary_location?.pdf_url;

  const authors = paper.authorships
    ?.map((a) => a.author.display_name)
    .filter(Boolean)
    .join(", ");

  return (
    <div className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-primary/30 hover:shadow-sm">
      <div className="min-w-0 flex-1">
        {paperUrl ? (
          <a href={paperUrl} target="_blank" rel="noreferrer">
            <h3 className="text-base font-semibold leading-snug text-primary hover:underline">
              {paper.title}
            </h3>
          </a>
        ) : (
          <h3 className="text-base font-semibold leading-snug text-foreground">
            {paper.title}
          </h3>
        )}

        <p className="mt-1.5 text-sm text-muted-foreground">
          {authors || "Unknown author"}
          {paper.publication_year ? ` · ${paper.publication_year}` : ""}
        </p>

        <div className="mt-3 flex items-center gap-4">
          <span className="text-xs text-muted-foreground">
            {paper.cited_by_count || 0} citation
            {paper.cited_by_count === 1 ? "" : "s"}
          </span>

          {pdfUrl && (
            <p className="inline-flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-xs font-medium text-primary transition hover:bg-primary/10">
              <FiFileText className="text-sm" />
              PDF
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsSaved((prev) => !prev)}
        aria-label={isSaved ? "Remove bookmark" : "Save paper"}
        aria-pressed={isSaved}
        className={cn(
          "shrink-0 rounded-md p-2 transition-colors",
          isSaved
            ? "text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <FiBookmark className={cn("text-lg", isSaved && "fill-current")} />
      </button>
    </div>
  );
}
