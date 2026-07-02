"use client";
import { NAVBAR } from "@/config/landing.config";
import { ROUTES } from "@/config/route.config";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-8">
        <Link
          href={ROUTES.LANDING_PAGE}
          className="flex items-center gap-2 shrink-0"
        >
          <div className="h-8 w-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-foreground tracking-tight">
              CDM E-Library
            </span>
            <span className="text-[10px] text-muted-foreground hidden sm:block">
              Colegio de Montalban
            </span>
          </div>
        </Link>

        <NavigationMenu.Root className="hidden md:flex">
          <NavigationMenu.List className="flex items-center gap-1">
            {NAVBAR.map(({ href, label }) => (
              <NavigationMenu.Item key={label}>
                <a
                  href={href}
                  className="px-3 py-1.5 text-[13px] text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary transition-colors duration-150"
                >
                  {label}
                </a>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex items-center gap-2">
          <Link
            href={ROUTES.LOGIN_PAGE}
            className="hidden sm:block px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors duration-150"
          >
            Log in
          </Link>

          <Link
            href={ROUTES.SIGNUP_PAGE}
            className="hidden sm:block px-4 py-1.5 text-[13px] font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors duration-150 shadow-sm"
          >
            Sign up
          </Link>

          <button
            type="button"
            className="sm:hidden flex items-center justify-center h-9 w-9 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-5 h-5 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          {NAVBAR.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <Link
              href={ROUTES.LOGIN_PAGE}
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 text-sm font-medium text-muted-foreground border border-border rounded-md hover:bg-secondary transition-colors"
            >
              Log in
            </Link>
            <Link
              href={ROUTES.SIGNUP_PAGE}
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors shadow-sm"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
