"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchSchema } from "@/validation/search.validation";
import { FiSearch, FiX } from "react-icons/fi";

interface Props {
  defaultValue?: string;
}

export default function SearchForm({ defaultValue = "" }: Props) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(!!defaultValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = SearchSchema.safeParse(
      Object.fromEntries(new FormData(e.currentTarget).entries()),
    );
    if (!result.success) return;
    router.push(`/search?q=${encodeURIComponent(result.data.search)}&page=1`);
  };

  const clearInput = () => {
    if (!inputRef.current) return;
    inputRef.current.value = "";
    setHasValue(false);
    inputRef.current.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
    >
      <div className="group relative flex-1">
        <FiSearch className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-muted-foreground transition-colors duration-200 group-focus-within:text-primary" />

        <input
          ref={inputRef}
          name="search"
          defaultValue={defaultValue}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          placeholder="Search books, articles, or topics..."
          aria-label="Search the library catalog"
          className="w-full rounded-xl border border-input bg-background py-3.5 pl-11 pr-12 text-sm text-foreground shadow-sm transition-all duration-200 placeholder:text-muted-foreground hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
        />

        {hasValue && (
          <button
            type="button"
            onClick={clearInput}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <FiX className="text-sm" />
          </button>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary-hover active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:w-auto"
      >
        Search
      </button>
    </form>
  );
}
