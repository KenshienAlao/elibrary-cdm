"use client";

import * as Separator from "@radix-ui/react-separator";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useState } from "react";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Howitworks } from "@/components/landing/howitworks";
import { Featured } from "@/components/landing/featured";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip.Provider delayDuration={300}>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground font-sans">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero />
        <Howitworks />
        <Separator.Root className="h-px bg-border mx-4 sm:mx-auto sm:max-w-6xl" />
        <Featured />
        <Cta />
        <Footer />
      </div>
    </Tooltip.Provider>
  );
}
