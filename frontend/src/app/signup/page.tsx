"use client";

import { FormEvent, useState } from "react";
import { Banner } from "@/components/register/banner";
import { MobileBanner } from "@/components/register/mobile-banner";
import { FormHeader } from "@/components/register/form-header";
import { SignupForm } from "@/components/register/signup-form";
import { FormDivider } from "@/components/register/form-divider";
import { FormFooter } from "@/components/register/form-footer";

export default function Signup() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex">
      <Banner />
      <div className="flex-1 flex flex-col relative">
        <MobileBanner />
        <div className="relative z-10 flex flex-col justify-center flex-1 px-6 py-12 sm:px-10 lg:px-16 xl:px-24 overflow-y-auto">
          <div className="max-w-[400px] w-full mx-auto lg:mx-0">
            <FormHeader />
            <SignupForm />
            <FormDivider />
            <FormFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
