"use client";
import { useProfile } from "@/hooks/use-profile";
import { useMemo } from "react";

export function WelcomeSection() {
  const { data: user } = useProfile();
  const time = useMemo(
    () =>
      new Date().getHours() > 18 || new Date().getHours() < 6
        ? "Evening"
        : new Date().getHours() >= 6 && new Date().getHours() < 12
          ? "Morning"
          : "Afternoon",
    [],
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Good {time} , {user?.firstName} {user?.lastName}!
        </h1>
      </div>
    </div>
  );
}
