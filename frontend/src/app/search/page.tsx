"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import SearchForm from "@/components/search-form";
import ErrorMessage from "@/components/home/error-message";
import Pagination from "@/components/search/pagination";
import PaperRow from "@/components/home/paper-row";
import { searchService } from "@/service/search.service";
import { Structure } from "@/components/structure";
import { FiSearch } from "react-icons/fi";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function SearchContext() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const page = searchParams.get("page") ?? "1";
  const currentPage = Math.max(1, Number(page) || 1);
  const query = q.trim();

  const { data, error, isLoading } = useQuery({
    queryKey: ["search", query, currentPage],
    queryFn: () => searchService.search({ q: query, page: currentPage }),
    enabled: !!query,
  });

  const totalPages = data ? Math.ceil(data.meta.count / data.meta.per_page) : 0;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 pb-24 pt-4 md:pb-8 md:pt-24 lg:px-12">
      <SearchForm defaultValue={q} />

      <div className="mt-8">
        {!query && (
          <div className="flex flex-col items-center gap-3 py-16 text-center">
            <div className="rounded-full bg-muted p-3">
              <FiSearch className="text-xl text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Search by title, author, or keyword to get started.
``            </p>
          </div>
        )}

        {error && <ErrorMessage message={error.message} />}

        {isLoading && query && (
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-15 w-full rounded-xl border border-border"
              />
            ))}
          </div>
        )}

        {data && !isLoading && (
          <>
            <p className="mb-4 text-sm text-muted-foreground">
              {data.meta.count.toLocaleString()} result
              {data.meta.count !== 1 && "s"} for{" "}
              <span className="font-medium text-foreground">
                &ldquo;{query}&rdquo;
              </span>
            </p>

            {data.meta.count === 0 ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center">
                <div className="rounded-full bg-muted p-3">
                  <FiSearch className="text-xl text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  No results for &ldquo;{query}&rdquo;. Try a different keyword
                  or check your spelling.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {data.results.map((paper) => (
                    <PaperRow key={paper.id} paper={paper} />
                  ))}
                </div>
                <div className="mt-8">
                  <Pagination
                    page={currentPage}
                    totalPages={totalPages}
                    query={q}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default function Search() {
  return (
    <Structure>
      <Suspense fallback={null}>
        <SearchContext />
      </Suspense>
    </Structure>
  );
}
