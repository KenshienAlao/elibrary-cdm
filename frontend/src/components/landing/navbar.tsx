import { NAVBAR } from "@/config/landing.config";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-8">
        <a href="/" className="flex items-center gap-2 shrink-0">
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
        </a>

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
          <button className="hidden sm:block px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors duration-150">
            Log in
          </button>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="hidden sm:block px-4 py-1.5 text-[13px] font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors duration-150 shadow-sm">
                Sign up
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
              <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-32px)] max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 shadow-xl focus:outline-none">
                <div className="mb-5">
                  <Dialog.Title className="text-lg font-semibold text-foreground">
                    Create your account
                  </Dialog.Title>
                  <Dialog.Description className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
                    Use your school email to get started.
                  </Dialog.Description>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">
                      School email
                    </label>
                    <input
                      type="email"
                      placeholder="studentid@cdm.edu.ph"
                      className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Create a password"
                      className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>
                  <button className="w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors shadow-sm mt-1">
                    Create account
                  </button>
                  <p className="text-center text-[11px] text-muted-foreground">
                    By signing up, you agree to our{" "}
                    <a
                      href="#"
                      className="underline underline-offset-2 hover:text-foreground"
                    >
                      terms
                    </a>
                    .
                  </p>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <button
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
            <button className="w-full py-2.5 text-sm font-medium text-muted-foreground border border-border rounded-md hover:bg-secondary transition-colors">
              Log in
            </button>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="w-full py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors shadow-sm">
                  Sign up
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-32px)] max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 shadow-xl focus:outline-none">
                  <Dialog.Title className="text-lg font-semibold text-foreground mb-1">
                    Create your account
                  </Dialog.Title>
                  <Dialog.Description className="text-[13px] text-muted-foreground mb-5">
                    Use your school email to get started.
                  </Dialog.Description>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        School email
                      </label>
                      <input
                        type="email"
                        placeholder="studentid@cdm.edu.ph"
                        className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Create a password"
                        className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <button className="w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors">
                      Create account
                    </button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      )}
    </header>
  );
}
