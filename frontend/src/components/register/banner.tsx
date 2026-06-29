import { ROUTES } from "@/config/route.config";
import { STATS } from "@/config/signup.config";
import Image from "next/image";
import Link from "next/link";

export function Banner() {
  return (
    <div className="hidden lg:flex lg:w-[52%] relative flex-col">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1800"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="52vw"
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-foreground/60 dark:bg-background/70" />
        <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full p-10">
        <Link href={ROUTES.LANDING_PAGE} className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt=""
            className="object-contain"
            priority
          />
          <span className="text-white font-semibold text-sm tracking-tight">
            CDM E-Library
          </span>
        </Link>

        <div className="max-w-sm">
          <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-3">
            Colegio de Montalban
          </p>
          <h2 className="text-white text-3xl font-bold leading-snug mb-4">
            Access all library resources in one place.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Find journals, research papers, course materials, and digital books
            instantly. Free for all students and teachers.
          </p>
          <div className="mt-8 flex gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="text-white text-xl font-bold">{value}</p>
                <p className="text-white/50 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/30 text-xs" suppressHydrationWarning>
          © {new Date().getFullYear()} CDM E-Library. All rights reserved.
        </p>
      </div>
    </div>
  );
}
