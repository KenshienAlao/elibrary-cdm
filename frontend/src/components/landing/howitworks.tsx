import { HOWITWORKS } from "@/config/landing.config";

export function Howitworks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 scroll-mt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-2">
            Get started in 3 steps
          </h2>
          <p className="text-[14px] sm:text-[15px] text-muted-foreground max-w-md">
            Use your school email to access the library.
          </p>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-px sm:bg-border sm:rounded-xl sm:overflow-hidden sm:border sm:border-border">
          {HOWITWORKS.map(({ step, title, desc }) => (
            <div
              key={step}
              className="bg-card p-5 sm:p-7 flex flex-col gap-3 rounded-lg border border-border sm:rounded-none sm:border-0"
            >
              <span className="text-xs font-medium text-primary bg-accent border border-primary/15 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                {step}
              </span>
              <h3 className="text-[15px] font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
