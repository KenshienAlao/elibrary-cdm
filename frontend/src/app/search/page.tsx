"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import SearchForm from "@/components/home/search-form";
import ErrorMessage from "@/components/home/error-message";
import Pagination from "@/components/search/pagination";
import Results from "@/components/search/results";
import { searchService } from "@/service/search.service";

export default function Search() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const page = searchParams.get("page") ?? "1";
  const currentPage = Math.max(1, Number(page) || 1);
  const query = q.trim();

  const { data, error } = useQuery({
    queryKey: ["search", query, currentPage],
    queryFn: () => searchService.search({ q: query, page: currentPage }),
    enabled: !!query,
  });

  return (
    <div className="mx-auto max-w-4xl p-6">
      <SearchForm defaultValue={q} />
      {error && <ErrorMessage message={error.message} />}
      {data && (
        <>
          <Results papers={data.results} />
          <Pagination
            page={currentPage}
            totalPages={Math.ceil(data.meta.count / data.meta.per_page)}
            query={q}
          />
        </>
      )}
    </div>
  );
}
