import SearchForm from "../search/search-form";

export function Search() {
  return (
    <div className="w-full shrink-0 lg:max-w-md xl:max-w-lg">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/5 sm:p-8">
        <div className="mb-6 space-y-1.5">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Library Search
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Find books, journals, theses, and digital archives across every
            partner library instantly.
          </p>
        </div>
        <SearchForm />
      </div>
    </div>
  );
}
