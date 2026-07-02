import { cn } from "@/lib/utils/cn";

type TextSkeletonProps = {
  className?: string;
};

export function TextSkeleton({ className }: TextSkeletonProps) {
  return (
    <span className={cn("inline-block animate-pulse bg-muted", className)} />
  );
}
