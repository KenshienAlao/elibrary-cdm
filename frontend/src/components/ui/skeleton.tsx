import { cn } from "@/lib/utils/cn";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return (
    <span className={cn("inline-block animate-pulse bg-muted", className)} />
  );
}
