"use client";
import * as Label from "@radix-ui/react-label";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  HiOutlineEnvelope,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLockClosed,
} from "react-icons/hi2";

import { ROUTES } from "@/config/route.config";
import { FiLoader } from "react-icons/fi";
import { useLogin } from "@/hooks/use-auth";
import { LoginSchema } from "@/validation/auth.validation";

export function LoginForm() {
  const {
    mutate: login,
    isPending: isLoginPending,
    error: loginError,
  } = useLogin();

  const [showPassword, setShowPassword] = useState(false);

  const [errorValidation, setErrorValidation] = useState<Error | null>(null);

  const error = errorValidation || loginError;

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = LoginSchema.safeParse(data);
    if (!result.success) {
      setErrorValidation(new Error(result.error.issues[0].message));
      return;
    }
    login(result.data);
  };

  return (
    <form className="space-y-4" onSubmit={handleLoginSubmit}>
      <div className="space-y-1.5">
        <Label.Root
          htmlFor="email"
          className="block text-xs font-medium text-foreground"
        >
          Email address
        </Label.Root>

        <div className="relative">
          <HiOutlineEnvelope className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <input
            aria-label="Email"
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@gmail.com"
            className="w-full rounded-md border border-border bg-input py-2.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label.Root
            htmlFor="password"
            className="text-xs font-medium text-foreground"
          >
            Password
          </Label.Root>

          <Link
            href={ROUTES.FORGOT_PASSWORD}
            className="text-xs text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <div className="relative">
          <HiOutlineLockClosed className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <input
            aria-label="Password"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter your password"
            className="w-full rounded-md border border-border bg-input py-2.5 pl-9 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <HiOutlineEyeSlash className="h-4 w-4" />
            ) : (
              <HiOutlineEye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {error && <p className="text-[11px] text-destructive">{error.message}</p>}

      <button
        type="submit"
        disabled={isLoginPending}
        className="mt-1 w-full 2rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoginPending ? (
          <div className="flex items-center justify-center gap-2">
            <FiLoader className="w-4 h-4 animate-spin" />
            Logging in...
          </div>
        ) : (
          "Log in"
        )}
      </button>
    </form>
  );
}
