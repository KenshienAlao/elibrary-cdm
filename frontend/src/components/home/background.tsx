import Image from "next/image";

export function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-20 md:-top-16">
      <Image
        src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?q=80&w=1800&auto=format&fit=crop"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/20 to-background" />
    </div>
  );
}
