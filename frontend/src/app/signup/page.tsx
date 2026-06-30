"use client";

import { FormEvent, useState } from "react";
import { Banner } from "@/components/register/banner";
import { MobileBanner } from "@/components/register/mobile-banner";
import { FormHeader } from "@/components/register/form-header";
import { SignupForm } from "@/components/register/signup-form";
import { FormDivider } from "@/components/register/form-divider";
import { FormFooter } from "@/components/register/form-footer";
import { SignupSchema } from "../../validation/auth.validation";
import TermsAndConditionsPage from "@/components/terms-modal";
import PrivacyPolicyPage from "@/components/privacy-policy.modal";
import { useSignup } from "../hooks/use-auth";

export default function Signup() {
  const {
    mutate: signup,
    isPending: isPendingSignup,
    error: errorSignup,
  } = useSignup();
  const [error, setError] = useState<Error | null>(null);
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    const result = SignupSchema.safeParse({
      ...data,
      terms: data.terms === "on",
    });

    if (!result.success) {
      setError(new Error(result.error.issues[0].message));
      return;
    }

    signup(result.data);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex">
      <Banner />
      <div className="flex-1 flex flex-col relative">
        <MobileBanner />
        <div className="relative z-10 flex flex-col justify-center flex-1 px-6 py-12 sm:px-10 lg:px-16 xl:px-24 overflow-y-auto">
          <div className="max-w-[400px] w-full mx-auto lg:mx-0">
            <FormHeader />
            <SignupForm
              handleSubmit={handleSubmit}
              error={error || errorSignup}
              setOpenTerms={setOpenTerms}
              setOpenPrivacy={setOpenPrivacy}
              isPendingSignup={isPendingSignup}
            />
            <FormDivider />
            <FormFooter />
          </div>
        </div>
      </div>
      <TermsAndConditionsPage
        openTerms={openTerms}
        setOpenTerms={setOpenTerms}
      />

      <PrivacyPolicyPage
        openPrivacy={openPrivacy}
        setOpenPrivacy={setOpenPrivacy}
      />
    </div>
  );
}
