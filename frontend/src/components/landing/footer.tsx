import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 py-8 sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-10">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="CDM"
            width={28}
            height={28}
            className="object-contain"
          />

          <div>
            <p className="text-sm font-medium text-foreground">
              Colegio de Montalban
            </p>
            <p className="text-xs text-muted-foreground">
              E-Library · © {new Date().getFullYear()}
            </p>
          </div>
        </div>

        <p className="max-w-sm text-[11px] leading-relaxed text-muted-foreground">
          For students and teachers. Please use library resources responsibly.
        </p>
      </div>
    </footer>
  );
}
