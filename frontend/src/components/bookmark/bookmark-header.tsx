"use client";
import { useBookmark } from "@/hooks/use-bookmark";
import { FiLayers } from "react-icons/fi";

export function Header() {
  const { data: bookmark, isLoading } = useBookmark();
  const totalCount = bookmark?.length || 0;

  return (
    <header className="mb-8 flex flex-col justify-between gap-4 border-b border-border/60 pb-6 sm:flex-row sm:items-center">
      <div>
        <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Bookmark
        </h1>
      </div>
      {!isLoading && totalCount > 0 && (
        <div className="inline-flex items-center gap-2 self-start rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-xs sm:self-center">
          <FiLayers className="text-primary" />
          <span>{totalCount} Saved</span>
        </div>
      )}
    </header>
  );
}
