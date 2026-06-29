import { ROUTES } from "@/config/route.config";
import { STATS } from "@/config/login.config";
import Image from "next/image";
import Link from "next/link";

export function Banner() {
  return (
    <div className="relative hidden lg:flex lg:w-[52%] flex-col">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1800"
          alt="Students collaborating"
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

      <div className="relative z-10 flex h-full flex-col justify-between p-10">
        <Link href={ROUTES.LANDING_PAGE} className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt=""
            className="object-contain"
            priority
          />
          <span className="text-sm font-semibold tracking-tight text-white">
            CDM E-Library
          </span>
        </Link>

        <div className="max-w-sm">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/50">
            Welcome
          </p>

          <h2 className="mb-4 text-3xl font-bold leading-snug text-white">
            Your digital library starts here.
          </h2>

          <p className="text-sm leading-relaxed text-white/70">
            Create your account to browse books, discover research materials,
            and access library resources anytime, anywhere.
          </p>

          <div className="mt-8 space-y-4">
            {STATS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-primary-foreground" />
                <p className="text-sm text-white/80">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-white/30" suppressHydrationWarning>
          © {new Date().getFullYear()} CDM E-Library. All rights reserved.
        </p>
      </div>
    </div>
  );
}
