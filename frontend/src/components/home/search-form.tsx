"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SearchSchema } from "@/validation/search.validation";

interface Props {
  defaultValue?: string;
}

export default function SearchForm({ defaultValue = "" }: Props) {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = SearchSchema.safeParse(
      Object.fromEntries(new FormData(e.currentTarget).entries()),
    );

    if (!result.success) return;

    router.push(`/search?q=${encodeURIComponent(result.data.search)}&page=1`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex gap-2">
      <input
        name="search"
        defaultValue={defaultValue}
        placeholder="Search papers..."
        className="flex-1 rounded border p-2"
      />

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Search
      </button>
    </form>
  );
}
