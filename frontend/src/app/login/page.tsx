"use client";

import { FormEvent, useState } from "react";
import { Banner } from "@/components/login/banner";
import { MobileBanner } from "@/components/login/mobile-banner";
import { FormHeader } from "@/components/login/form-header";
import { FormDivider } from "@/components/login/form-divider";
import { LoginForm } from "@/components/login/login-form";
import { FormFooter } from "@/components/login/form-footer";
import { useLogin } from "../hooks/use-auth";
import { LoginSchema } from "@/validation/auth.validation";

export default function LoginPage() {
  const [error, setError] = useState<Error | null>(null);
  const {
    mutate: login,
    isPending: isLoginPending,
    error: loginError,
  } = useLogin();

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = LoginSchema.safeParse(data);
    if (!result.success) {
      setError(new Error(result.error.issues[0].message));
      return;
    }
    login(result.data);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex">
      <Banner />
      <div className="flex-1 flex flex-col relative">
        <MobileBanner />
        <div className="relative z-10 flex flex-col justify-center flex-1 px-6 py-12 sm:px-10 lg:px-16 xl:px-24 overflow-y-auto">
          <div className="max-w-[400px] w-full mx-auto lg:mx-0">
            <FormHeader />
            <LoginForm
              isPendingLogin={isLoginPending}
              handleSubmit={handleLoginSubmit}
              error={error || loginError}
            />
            <FormDivider />
            <FormFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
