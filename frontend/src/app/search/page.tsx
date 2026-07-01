import SearchForm from "@/components/home/search-form";
import ErrorMessage from "@/components/home/error-message";
import Pagination from "@/components/search/pagination";
import Results from "@/components/search/results";
import { searchService } from "@/service/search.service";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const { q = "", page = "1" } = await searchParams;

  const currentPage = Math.max(1, Number(page) || 1);
  const query = q.trim();

  if (!query) {
    return (
      <div className="mx-auto max-w-4xl p-6">
        <SearchForm defaultValue={q} />
      </div>
    );
  }

  const data = await searchService
    .search({
      q: query,
      page: currentPage,
    })
    .catch((error: Error) => error);

  if (data instanceof Error) {
    return (
      <div className="mx-auto max-w-4xl p-6">
        <SearchForm defaultValue={q} />
        <ErrorMessage message={data.message} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <SearchForm defaultValue={query} />

      <Results papers={data.results} />

      <Pagination
        page={currentPage}
        totalPages={Math.ceil(data.meta.count / data.meta.per_page)}
        query={q}
      />
    </div>
  );
}
