"use client";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils/cn";

export function Preference() {
  const { theme, setTheme } = useTheme();
  return (
    <section>
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Preferences
      </h2>
      <div className="rounded-xl border border-border bg-card shadow-xs">
        <div className="flex items-center justify-between gap-4 px-4 py-4">
          <div>
            <p className="text-sm font-medium text-foreground">Appearance</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Choose how ELibrary looks on this device.
            </p>
          </div>

          <ToggleGroup.Root
            type="single"
            value={theme}
            onValueChange={(value) => value && setTheme(value)}
            aria-label="Theme"
            className="inline-flex shrink-0 items-center overflow-hidden rounded-lg border border-border"
            suppressHydrationWarning
          >
            <ToggleGroup.Item
              value="light"
              aria-label="Light mode"
              suppressHydrationWarning
              className={cn(
                "inline-flex h-8 w-9 items-center justify-center border-r border-border text-muted-foreground transition-colors",
                "data-[state=on]:bg-primary/10 data-[state=on]:text-primary",
                "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
              )}
            >
              <FiSun className="text-base" />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="dark"
              aria-label="Dark mode"
              suppressHydrationWarning
              className={cn(
                "inline-flex h-8 w-9 items-center justify-center text-muted-foreground transition-colors",
                "data-[state=on]:bg-primary/10 data-[state=on]:text-primary",
                "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
              )}
            >
              <FiMoon className="text-base" />
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
      </div>
    </section>
  );
}
