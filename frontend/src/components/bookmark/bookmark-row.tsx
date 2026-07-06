"use client";

import { ScholarPaper } from "@/model/paper.model";
import {
  FiBookmark,
  FiFileText,
  FiExternalLink,
  FiCalendar,
  FiUser,
} from "react-icons/fi";
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

interface BookmarkRowProps {
  paper: ScholarPaper;
}

export default function BookmarkRow({ paper }: BookmarkRowProps) {
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
  const isBookmarked = currentBookmark?.some((b) => b.book_id === paper.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      const bookmarkId = currentBookmark?.find((b) => b.book_id === paper.id);
      if (!bookmarkId) return console.error("Bookmark not found for", paper.id);
      const result = BookmarkDeleteSchema.safeParse({
        id: bookmarkId.id,
        book_id: bookmarkId.book_id,
      });
      if (result.success) deleteBookmark(result.data);
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
    if (result.success) addBookmark(result.data);
  };

  return (
    <div className="group relative bg-background p-5 transition-all hover:bg-accent/10 md:p-6">
      <div className="absolute inset-y-0 left-0 w-[3px] bg-primary scale-y-0 transition-transform duration-200 group-hover:scale-y-100" />

      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          {paperUrl ? (
            <a
              href={paperUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-baseline gap-1 group/link focus-visible:outline-hidden"
            >
              <h3 className="text-base font-medium leading-snug text-foreground transition-colors group-hover/link:text-primary md:text-lg">
                {paper.title}
                <FiExternalLink className="inline-block ml-1 text-xs opacity-0 transition-opacity group-hover/link:opacity-60 align-middle" />
              </h3>
            </a>
          ) : (
            <h3 className="text-base font-medium leading-snug text-foreground md:text-lg">
              {paper.title}
            </h3>
          )}

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 truncate max-w-md">
              <FiUser className="shrink-0 text-xs text-muted-foreground/70" />
              <span className="truncate">{authors || "Anonymous Author"}</span>
            </span>

            {paper.publication_year && (
              <span className="inline-flex items-center gap-1.5 border-l border-border pl-4">
                <FiCalendar className="text-xs text-muted-foreground/70" />
                <span>{paper.publication_year}</span>
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground font-mono">
              {paper.cited_by_count || 0} cit.
            </span>

            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary-light px-2.5 py-0.5 text-xs font-medium text-accent-foreground transition hover:bg-primary/10 dark:hover:bg-primary/20"
              >
                <FiFileText className="text-xs" />
                <span>PDF</span>
              </a>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center">
          <button
            type="button"
            onClick={toggleBookmark}
            aria-label={isBookmarked ? "Remove bookmark" : "Save paper"}
            aria-pressed={isBookmarked}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg border transition-all focus:outline-hidden",
              isBookmarked
                ? "border-primary/20 bg-primary-light text-accent-foreground"
                : "border-border bg-background text-muted-foreground hover:border-border/80 hover:text-foreground hover:shadow-xs",
            )}
          >
            <FiBookmark
              className={cn(
                "text-base transition-transform group-hover:scale-105",
                isBookmarked && "fill-current",
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
