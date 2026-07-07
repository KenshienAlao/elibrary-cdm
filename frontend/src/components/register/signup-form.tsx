"use client";
import { FormEvent, useState } from "react";
import { SignupSchema } from "@/validation/auth.validation";
import { useSignup } from "@/hooks/use-auth";
import TermsAndConditionsPage from "@/components/terms-modal";
import PrivacyPolicyPage from "@/components/privacy-policy.modal";
import { Name } from "./name.section";
import { Gender } from "./gender.section";
import { Email } from "./email.section";
import { Type } from "./type.section";
import { Password } from "./password.section";
import { Confirm } from "./confirm.section";
import { Agreement } from "./agreement.section";
import { Submit } from "./submit.button";

export function SignupForm() {
  const {
    mutate: signup,
    isPending: isPendingSignup,
    error: errorSignup,
  } = useSignup();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    const result = SignupSchema.safeParse({
      ...data,
      terms: data.terms === "on",
    });

    if (!result.success) {
      setErrorValidation(new Error(result.error.issues[0].message));
      return;
    }

    signup(result.data);
  };

  const [errorValidation, setErrorValidation] = useState<Error | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const error = errorSignup || errorValidation;

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Name />
      <Gender />
      <Email />
      <Type />
      <Password />
      <Confirm error={error} />
      <Agreement
        agreed={agreed}
        setAgreed={setAgreed}
        setOpenTerms={setOpenTerms}
        setOpenPrivacy={setOpenPrivacy}
      />
      <Submit isPendingSignup={isPendingSignup} agreed={agreed} />
      <TermsAndConditionsPage
        openTerms={openTerms}
        setOpenTerms={setOpenTerms}
      />
      <PrivacyPolicyPage
        openPrivacy={openPrivacy}
        setOpenPrivacy={setOpenPrivacy}
      />
    </form>
  );
}
