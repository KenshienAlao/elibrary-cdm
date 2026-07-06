"use client";
import { useBookmark } from "@/hooks/use-bookmark";
import { Skeleton } from "../ui/skeleton";
import { FiBookmark } from "react-icons/fi";
import BookmarkRow from "./bookmark-row";

export function Body() {
  const { data: bookmark, isLoading } = useBookmark();
  const totalCount = bookmark?.length || 0;

  return (
    <>
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton className="h-28 w-full rounded-xl" key={i} />
          ))}
        </div>
      ) : totalCount === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card/50 px-6 py-20 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background shadow-xs">
            <FiBookmark className="text-xl text-primary/70" />
          </div>
          <h3 className="text-base font-medium text-foreground">
            Your shelf is empty
          </h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Add papers across the library to save it here.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-border/40 overflow-hidden rounded-xl border border-border bg-card shadow-xs">
          {bookmark?.map((bookmark) => (
            <BookmarkRow
              key={bookmark.id}
              paper={{
                id: bookmark.book_id,
                title: bookmark.title,
                publication_year: bookmark.publication_year,
                cited_by_count: bookmark.cited_by_count,
                authorships: [
                  {
                    author: {
                      id: "",
                      display_name: bookmark.authors,
                    },
                  },
                ],
                primary_location: {
                  landing_page_url: bookmark.url,
                  pdf_url: bookmark.pdf_url,
                  source: null,
                },
                best_oa_location: null,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
