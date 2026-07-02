import SearchForm from "@/components/home/search-form";
import { WelcomeSection } from "@/components/home/welcome-section";
import Image from "next/image";
import { Structure } from "@/components/structure";

export default function Home() {
  return (
    <Structure>
      <main className="relative z-0 flex min-h-dvh flex-1 flex-col justify-center px-6 pb-24 lg:px-12 md:pb-0">
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?q=80&w=1800&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/20 to-background" />
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
            <div className="flex-1">
              <WelcomeSection />
            </div>
            <div className="w-full shrink-0 lg:max-w-md xl:max-w-lg">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/5 sm:p-8">
                <div className="mb-6 space-y-1.5">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    Library Search
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Find books, journals, theses, and digital archives across
                    every partner library instantly.
                  </p>
                </div>
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Structure>
  );
}
