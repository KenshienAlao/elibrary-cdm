import Image from "next/image";

export function MobileBanner() {
  return (
    <div className="absolute inset-0 lg:hidden">
      <Image
        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1800"
        alt=""
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
