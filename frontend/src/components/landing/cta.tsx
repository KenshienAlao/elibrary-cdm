import * as Dialog from "@radix-ui/react-dialog";

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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors duration-150 hover:bg-primary-hover sm:w-auto sm:py-2.5">
                  Sign up
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />

                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-32px)] max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 shadow-xl focus:outline-none">
                  <Dialog.Title className="mb-1 text-lg font-semibold text-foreground">
                    Sign up
                  </Dialog.Title>

                  <Dialog.Description className="mb-5 text-[13px] text-muted-foreground">
                    Use your school email.
                  </Dialog.Description>

                  <div className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="studentid@cdm.edu.ph"
                        className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground">
                        Password
                      </label>

                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <button className="w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover">
                      Sign up
                    </button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            <button className="inline-flex w-full items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-secondary sm:w-auto sm:py-2.5">
              Log in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
