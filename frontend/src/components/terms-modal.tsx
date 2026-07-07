import { cn } from "@/lib/utils/cn";
import {
  HiArrowLeft,
  HiScale,
  HiShieldCheck,
  HiUser,
  HiBookOpen,
} from "react-icons/hi2";

interface TermsAndConditionsPageProps {
  openTerms: boolean;
  setOpenTerms: (open: boolean) => void;
}

export default function TermsAndConditionsPage({
  openTerms,
  setOpenTerms,
}: TermsAndConditionsPageProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-all duration-200",
        openTerms
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <div className="flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-border bg-background text-foreground shadow-2xl transition-colors">
        <div className="flex items-center justify-between border-b border-border bg-card px-6 py-3.5">
          <div className="flex items-center gap-2.5">
            <HiBookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              E-Library Project
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpenTerms(false)}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-popover px-3 py-1.5 text-xs font-medium text-foreground shadow-xs transition-colors hover:bg-secondary"
          >
            <HiArrowLeft className="h-3.5 w-3.5" />
            Back to Registration
          </button>
        </div>

        <div className="border-b border-border bg-background px-8 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last Updated: June 2026
          </p>
        </div>

        <div className="modal-body-scroll flex-1 overflow-y-auto bg-background px-6 py-8 md:px-12">
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-md border border-border bg-card p-4">
              <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase text-primary">
                <HiUser className="h-4 w-4" />
                Your Profile
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your account is just for you. Please do not share your login
                details with anyone else.
              </p>
            </div>

            <div className="rounded-md border border-border bg-card p-4">
              <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase text-primary">
                <HiShieldCheck className="h-4 w-4" />
                Our Goal
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This platform is made to help you learn, read, study, and
                research easily.
              </p>
            </div>

            <div className="rounded-md border border-border bg-card p-4">
              <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase text-primary">
                <HiScale className="h-4 w-4" />
                The Deal
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                By creating an account and using this site, you agree to follow
                these simple guidelines.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                1. Using the E-Library
              </h2>
              <p className="mt-2.5">
                Welcome! This library is a tool for students and teachers to
                read and learn. Please use it nicely and respect the resources
                available here.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                2. Your Account
              </h2>
              <p className="mt-2.5">
                You are responsible for what happens on your account. Keep
                things secure by following these quick tips:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 pl-1 text-xs">
                <li>Don&apos;t let others use your account.</li>
                <li>Pick a safe password and keep it secret.</li>
                <li>
                  Let us know if you think someone else logged into your
                  account.
                </li>
                <li>Use your real information when signing up.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                3. Borrowing Books
              </h2>
              <p className="mt-2.5">
                If you borrow physical books, please bring them back on time so
                others can read them too. If you copy or download digital
                papers, use them only for your personal schoolwork.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                4. Playing Fair
              </h2>
              <p className="mt-2.5">
                Please don&apos;t try to break the website, hack other profiles,
                or upload viruses.
              </p>
              <p className="mt-2.5 text-destructive font-medium">
                If anyone tries to misuse the site, we might have to close their
                account.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                5. Your Privacy
              </h2>
              <p className="mt-2.5">
                We only save the details needed to run your account and track
                your borrowed items. We won&apos;t sell or spam your data.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                6. Rule Changes
              </h2>
              <p className="mt-2.5">
                Every now and then, we might tweak these rules. If we do, the
                updated list will show up right here on the site.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                7. Questions?
              </h2>
              <p className="mt-2.5">
                Since this is a personal project, feel free to reach out
                directly to kenshein if you find a bug or have an idea!
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                By clicking below, you acknowledge that you&apos;ve read through
                our basic project rules.
              </p>
              <button
                type="button"
                onClick={() => setOpenTerms(false)}
                className="rounded-md bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-(--primary-hover) focus:outline-hidden focus:ring-2 focus:ring-ring"
              >
                Got it, Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
