import { FEATURES } from "@/config/landing.config";

export function Featured() {
  return (
    <section
      id="featured"
      className="bg-secondary/20 py-16 sm:py-24 scroll-mt-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-10 sm:mb-12">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Made for students and teachers
          </h2>
          <p className="max-w-md text-[14px] text-muted-foreground sm:text-[15px]">
            Everything you need to find and read library resources.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-card p-5 transition-all duration-150 hover:border-primary/25 hover:shadow-sm sm:p-6"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-accent text-primary">
                <Icon className="h-4 w-4" />
              </div>

              <h3 className="mb-2 text-[15px] font-semibold text-foreground">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
