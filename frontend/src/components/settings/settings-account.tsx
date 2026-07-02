"use client";
import { useGetProfile } from "@/hooks/use-profile";
import { FiMail } from "react-icons/fi";
import { Skeleton } from "../ui/skeleton";

export function Account() {
  const { data: user, isLoading } = useGetProfile();
  return (
    <section>
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Account
      </h2>
      <div className="border border-border">
        <div className="flex items-center gap-3 px-4 py-4">
          <FiMail className="shrink-0 text-base text-muted-foreground" />
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">Email</p>
            {isLoading ? (
              <Skeleton className="h-2.5 w-32" />
            ) : (
              <p className="truncate text-sm text-muted-foreground">
                {user?.email}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
