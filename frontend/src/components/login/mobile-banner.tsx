import Image from "next/image";

export function MobileBanner() {
  return (
    <div className="absolute inset-0 lg:hidden">
      <Image
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1800"
        alt="Students collaborating"
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        unoptimized
      />
      <div className="absolute inset-0 bg-background/80 dark:bg-background/85" />
      <div className="absolute inset-0 bg-linear-to-b from-primary/20 via-transparent to-background/60" />
    </div>
  );
}
