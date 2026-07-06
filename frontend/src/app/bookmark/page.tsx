"use client";

import { useState } from "react";
import { Structure } from "@/components/structure";
import PaperRow from "@/components/search/paper-row";
import { ScholarPaper } from "@/model/paper.model";
import { FiBookmark } from "react-icons/fi";
import { useBookmark } from "@/hooks/use-bookmark";
import { Skeleton } from "@/components/ui/skeleton";

export default function BookmarkPage() {
  const { data: bookmark, isLoading } = useBookmark();

  return (
    <Structure>
      <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-6 md:pb-8 md:pt-8 lg:px-12">
        <h1 className="mb-6 text-2xl font-bold">Bookmarks</h1>

        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton className="h-32 w-full" key={i} />
            ))}
          </div>
        ) : bookmark?.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 text-center">
            <div className="rounded-full bg-muted p-3">
              <FiBookmark className="text-xl text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              No saved papers yet. Bookmark a paper to see it here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {bookmark?.map((bookmark) => (
              <PaperRow
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
      </div>
    </Structure>
  );
}
