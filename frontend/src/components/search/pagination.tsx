"use client";

import { useRouter } from "next/navigation";

export default function Pagination({
  page,
  totalPages,
  query,
}: {
  page: number;
  totalPages: number;
  query: string;
}) {
  const router = useRouter();

  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        disabled={page === 1}
        onClick={() =>
          router.push(`/search?q=${encodeURIComponent(query)}&page=${page - 1}`)
        }
      >
        Previous
      </button>

      <span>
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() =>
          router.push(`/search?q=${encodeURIComponent(query)}&page=${page + 1}`)
        }
      >
        Next
      </button>
    </div>
  );
}
