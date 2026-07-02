import { ReactNode } from "react";
import { Navigation } from "./navigation";

export function Structure({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Navigation />
      {children}
    </div>
  );
}
