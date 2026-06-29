import { cn } from "@/lib/utils/cn";
import {
  HiArrowLeft,
  HiEye,
  HiLockClosed,
  HiServer,
  HiBookOpen,
} from "react-icons/hi2";

interface PrivacyPolicyPageProps {
  openPrivacy: boolean;
  setOpenPrivacy: (open: boolean) => void;
}

export default function PrivacyPolicy({
  openPrivacy,
  setOpenPrivacy,
}: PrivacyPolicyPageProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-all duration-200",
        openPrivacy
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
            onClick={() => setOpenPrivacy(false)}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-popover px-3 py-1.5 text-xs font-medium text-foreground shadow-xs transition-colors hover:bg-secondary"
          >
            <HiArrowLeft className="h-3.5 w-3.5" />
            Back to Registration
          </button>
        </div>

        <div className="border-b border-border bg-background px-8 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last Updated: June 2026
          </p>
        </div>

        <div className="modal-body-scroll flex-1 overflow-y-auto bg-background px-6 py-8 md:px-12">
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-md border border-border bg-card p-4">
              <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase text-primary">
                <HiEye className="h-4 w-4" />
                Be Clear
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We only collect basic info needed to make your profile work on
                this site.
              </p>
            </div>

            <div className="rounded-md border border-border bg-card p-4">
              <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase text-primary">
                <HiLockClosed className="h-4 w-4" />
                Stay Safe
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your book history, searches, and account data are locked up
                safely.
              </p>
            </div>

            <div className="rounded-md border border-border bg-card p-4">
              <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase text-primary">
                <HiServer className="h-4 w-4" />
                No Ads
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We will never sell your information or share it with annoying
                advertising companies.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                1. Information We Collect
              </h2>
              <p className="mt-2.5">
                To run this library simulation, the system handles a few simple
                types of information:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 pl-1 text-xs">
                <li>
                  <span className="font-semibold text-foreground">
                    Profile Info:
                  </span>{" "}
                  Your name, email address, school ID number, and department.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Library Actions:
                  </span>{" "}
                  The books you borrow, hold requests, and checkout histories.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Technical Details:
                  </span>{" "}
                  Your IP address, what kind of device you are using, and when
                  you log in.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                2. How We Use Data
              </h2>
              <p className="mt-2.5">
                We use your information strictly to keep the application working
                correctly:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 pl-1 text-xs">
                <li>To track which books are checked out or saved.</li>
                <li>To send alerts if a book is overdue.</li>
                <li>To look at general site statistics and fix code bugs.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                3. Information Sharing and Disclosure
              </h2>
              <p className="mt-2.5">
                We don't sell, trade, or share your data with outsiders. Only
                the system admins or library staff can see your profile to
                manage your account.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                4. Data Security & Storage
              </h2>
              <p className="mt-2.5">
                We use standard security setups to protect your info. Passwords
                are scrambled and safely hidden, and the site uses secure
                connections to prevent data leaks.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                5. Your Data Rights
              </h2>
              <p className="mt-2.5">
                Since this is your personal account profile, you can always
                check your dashboard to edit and update your information, or
                delete your mock profile whenever you want.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                6. Cookies & Tracking Technology
              </h2>
              <p className="mt-2.5">
                This site uses small digital tags called cookies to keep you
                logged in while you click around. If you block cookies in your
                browser, you might have to log in again every time you open a
                page.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-b border-border pb-1.5">
                7. Contact
              </h2>
              <p className="mt-2.5">
                If you have questions about how data is handled in this project,
                feel free to contact kenshien.
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                By closing this window, you agree to how this project handles
                basic info.
              </p>
              <button
                type="button"
                onClick={() => setOpenPrivacy(false)}
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
