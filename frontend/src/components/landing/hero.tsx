import Image from "next/image";

export function Hero() {
  return (
    <section className="relative py-16 sm:py-28 lg:py-36 border-b border-border/40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1800"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/30 to-background" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <div className="max-w-2xl">
          <h1 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-foreground tracking-tight leading-[1.1] mb-4 sm:mb-5">
            Research starts <span className="text-primary">here</span>
            <br className="hidden sm:block" />
            for everyone at CDM.
          </h1>
          <p className="text-[15px] sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-7 sm:mb-8">
            Find research journals, school theses, course guides, and digital
            books in one place. Open to all students and teachers.
          </p>
          <div className="flex flex-col gap-3 w-full sm:flex-row sm:w-auto">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-6 py-3 sm:py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary-hover transition-colors duration-150 w-full sm:w-auto"
            >
              Get your digital ID
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-6 py-3 sm:py-2.5 bg-white rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors duration-150 w-full sm:w-auto"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
