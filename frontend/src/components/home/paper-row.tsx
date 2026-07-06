"use client";

import { ScholarPaper } from "@/model/paper.model";
import { FiBookmark, FiFileText } from "react-icons/fi";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import {
  BookmarkAddSchema,
  BookmarkDeleteSchema,
} from "@/validation/bookmark.validation";
import {
  useAddBookmark,
  useBookmark,
  useDeleteBookmark,
} from "@/hooks/use-bookmark";

interface PaperRowProps {
  paper: ScholarPaper;
}

export default function PaperRow({ paper }: PaperRowProps) {
  const { mutate: addBookmark } = useAddBookmark();
  const { data: currentBookmark } = useBookmark();
  const { mutate: deleteBookmark } = useDeleteBookmark();

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

  const toggleBookmark = () => {
    if (isBookmarked) {
      const bookmarkId = currentBookmark?.find((b) => b.book_id === paper.id);

      const result = BookmarkDeleteSchema.safeParse({
        id: bookmarkId?.id,
        book_id: bookmarkId?.book_id,
      });

      if (!result.success) {
        console.error("Invalid bookmark delete", result.error);
        return;
      }

      deleteBookmark(result.data);
      return;
    }

    const result = BookmarkAddSchema.safeParse({
      book_id: paper.id,
      title: paper.title,
      authors,
      publication_year: paper.publication_year,
      cited_by_count: paper.cited_by_count,
      url: paperUrl,
      pdf_url: pdfUrl,
    });
    if (!result.success) {
      console.error("Invalid bookmark:", result.error);
      return;
    }
    addBookmark(result.data);
  };

  const isBookmarked = currentBookmark?.some(
    (bookmark) => bookmark.book_id === paper.id,
  );

  console.log("DATA: ", currentBookmark);
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
            <Link
              href={pdfUrl}
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-xs font-medium text-primary transition hover:bg-primary/10"
            >
              <FiFileText className="text-sm" />
              PDF
            </Link>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={toggleBookmark}
        aria-label={isBookmarked ? "Remove bookmark" : "Save paper"}
        aria-pressed={isBookmarked}
        className={cn(
          "shrink-0 rounded-md p-2 transition-colors",
          isBookmarked
            ? "text-yellow-400"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <FiBookmark className={cn("text-lg", isBookmarked && "fill-current")} />
      </button>
    </div>
  );
}
