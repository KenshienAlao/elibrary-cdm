import { ROUTES } from "@/config/route.config";
import Link from "next/link";

export function Cta() {
  return (
    <section
      id="get-started"
      className="border-t border-border/60 bg-accent/30 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="max-w-xl">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Get started today
          </h2>

          <p className="mb-7 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
            Create your account with your school email and start using the
            library.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={ROUTES.SIGNUP_PAGE}
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors duration-150 hover:bg-primary-hover sm:w-auto sm:py-2.5"
            >
              Sign up
            </Link>

            <Link
              href={ROUTES.LOGIN_PAGE}
              className="inline-flex w-full items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-secondary sm:w-auto sm:py-2.5"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
