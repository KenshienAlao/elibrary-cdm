"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { NAV } from "@/config/navigation.config";

export function Navigation() {
  const pathname = usePathname();

  const isActiveRoute = (href: string) =>
    href === "/home" ? pathname === href : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "z-50 bg-background/80 backdrop-blur-xl transition-all duration-200",
        "fixed bottom-0 left-0 right-0 border-t border-border pb-safe-bottom",
        "md:fixed md:top-0 md:h-16 md:border-t-0 md:border-b md:pb-0",
      )}
    >
      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/home"
          className="hidden items-center gap-3 text-lg font-bold text-primary transition-opacity hover:opacity-80 md:flex"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          ELibrary: CDM
        </Link>
        <nav className="flex h-full w-full items-center justify-around py-2 md:w-auto md:justify-end md:gap-4 md:py-0">
          {NAV.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                  "hover:bg-accent hover:text-accent-foreground md:flex-row md:gap-2",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Icon
                  className={cn(
                    "text-xl transition-transform md:text-lg",
                    isActive && "scale-110 md:scale-100",
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] md:text-sm",
                    isActive ? "font-semibold" : "font-normal",
                  )}
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute inset-x-4 bottom-[-9px] hidden h-[2px] rounded-t-full bg-primary md:block" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
