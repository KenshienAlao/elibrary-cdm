"use client";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center space-y-6 text-center">
        <h1 className="text-8xl font-bold tracking-tighter text-primary">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Page not found
          </h2>
          <p className="text-muted-foreground max-w-[400px]">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or deleted.
          </p>
        </div>
        <button
          aria-label="Back"
          type="button"
          onClick={() => router.back()}
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          <FiArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>
      </div>
    </div>
  );
}
