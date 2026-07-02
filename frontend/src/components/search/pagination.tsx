"use client";

import { useRouter } from "next/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { cn } from "@/lib/utils/cn";

interface PaginationProps {
  page: number;
  totalPages: number;
  query: string;
}

export default function Pagination({
  page,
  totalPages,
  query,
}: PaginationProps) {
  const router = useRouter();

  if (totalPages <= 1) return null;

  const goTo = (targetPage: number) => {
    router.push(`/search?q=${encodeURIComponent(query)}&page=${targetPage}`);
  };

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <nav
      aria-label="Search results pages"
      className="mt-8 flex items-center justify-center gap-2"
    >
      <button
        type="button"
        disabled={isFirstPage}
        onClick={() => goTo(page - 1)}
        aria-label="Previous page"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors",
          "hover:border-primary/50 hover:bg-accent hover:text-accent-foreground",
          "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:bg-transparent",
        )}
      >
        <FiChevronLeft className="text-base" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <span className="px-3 text-sm text-muted-foreground">
        Page <span className="font-medium text-foreground">{page}</span> of{" "}
        <span className="font-medium text-foreground">{totalPages}</span>
      </span>

      <button
        type="button"
        disabled={isLastPage}
        onClick={() => goTo(page + 1)}
        aria-label="Next page"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors",
          "hover:border-primary/50 hover:bg-accent hover:text-accent-foreground",
          "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:bg-transparent",
        )}
      >
        <span className="hidden sm:inline">Next</span>
        <FiChevronRight className="text-base" />
      </button>
    </nav>
  );
}
