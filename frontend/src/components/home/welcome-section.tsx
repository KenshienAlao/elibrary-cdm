"use client";

import { useProfile } from "@/hooks/use-profile";
import { FiBookOpen } from "react-icons/fi";
import * as Separator from "@radix-ui/react-separator";
import * as Tooltip from "@radix-ui/react-tooltip";

const OPEN_HOUR = 7;
const CLOSE_HOUR = 20;

export function WelcomeSection() {
  const { data: user, isLoading } = useProfile();

  const now = new Date();
  const hours = now.getHours();
  const greeting =
    hours >= 5 && hours < 12
      ? "Good morning"
      : hours >= 12 && hours < 18
        ? "Good afternoon"
        : "Good evening";
  const dateLabel = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const isOpen = hours >= OPEN_HOUR && hours < CLOSE_HOUR;

  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide text-primary">
        <FiBookOpen className="text-sm" />
        <span>ELibrary · CDM</span>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {greeting},{" "}
          {isLoading ? (
            <span className="inline-block h-8 w-40 animate-pulse rounded-md bg-muted align-middle" />
          ) : (
            <span>{user?.firstName ?? "Explorer"}</span>
          )}
        </h1>

        <Tooltip.Provider delayDuration={200}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="inline-flex cursor-default items-center gap-2 text-sm text-muted-foreground">
                <span>{dateLabel}</span>
                <Separator.Root
                  orientation="vertical"
                  className="h-3 w-px bg-border"
                />
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isOpen ? "bg-primary" : "bg-muted-foreground/50"
                    }`}
                  />
                  {isOpen ? "Library open" : "Library closed"}
                </span>
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="bottom"
                sideOffset={6}
                className="rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background shadow-md"
              >
                Open {OPEN_HOUR}:00 AM – {CLOSE_HOUR - 12}:00 PM daily
                <Tooltip.Arrow className="fill-foreground" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      <p className="max-w-md text-base leading-relaxed text-muted-foreground">
        Search books, research papers, and study materials across every partner
        library.
      </p>
    </div>
  );
}
