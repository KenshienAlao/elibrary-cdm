"use client";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { FiLogOut } from "react-icons/fi";
import { ROUTES } from "@/config/route.config";
import { useRouter } from "next/navigation";

export function Session() {
  const router = useRouter();
  return (
    <section>
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Session
      </h2>
      <div className="border border-destructive/40">
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-destructive/5"
            >
              <div>
                <p className="text-sm font-medium text-foreground">Log out</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Sign out of your account on this device.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 border border-destructive/40 px-3 py-1.5 text-xs font-medium text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground">
                <FiLogOut className="text-sm" />
                Log out
              </span>
            </button>
          </AlertDialog.Trigger>

          <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
            <AlertDialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 border border-border bg-card p-6 shadow-lg">
              <AlertDialog.Title className="text-base font-semibold text-foreground">
                Log out of ELibrary?
              </AlertDialog.Title>
              <AlertDialog.Description className="mt-2 text-sm text-muted-foreground">
                You'll need to sign in again to access your bookmarks and search
                history.
              </AlertDialog.Description>

              <div className="mt-6 flex justify-end gap-3">
                <AlertDialog.Cancel asChild>
                  <button
                    type="button"
                    className="border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Cancel
                  </button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <button
                    type="button"
                    onClick={() => router.push(ROUTES.LOGOUT)}
                    className="border border-destructive bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground transition-colors hover:bg-destructive/90 disabled:opacity-60"
                  >
                    Log out
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </section>
  );
}
