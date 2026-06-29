import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import Link from "next/link";
import {
  HiCheck,
  HiChevronDown,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLockClosed,
  HiOutlineUser,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { ROUTES } from "@/config/route.config";
import { ROLE, GENDER } from "@/config/signup.config";
import { FormEvent, useState } from "react";

interface SignUpFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  error: Error | null;
}

export function SignupForm({ handleSubmit, error }: SignUpFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label.Root
            aria-label="First name"
            htmlFor="firstName"
            className="block text-xs font-medium text-foreground"
          >
            First name
          </Label.Root>
          <div className="relative">
            <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              aria-label="First Name"
              required
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              className="w-full rounded-md border border-border bg-input pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label.Root
            aria-label="Last name"
            htmlFor="lastName"
            className="block text-xs font-medium text-foreground"
          >
            Last name
          </Label.Root>
          <input
            aria-label="Last Name"
            required
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label.Root
          htmlFor="gender"
          className="block text-xs font-medium text-foreground"
        >
          Gender
        </Label.Root>
        <div className="relative">
          <HiOutlineUserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
          <Select.Root name="gender">
            <Select.Trigger
              aria-required
              id="gender"
              className="w-full flex items-center justify-between rounded-md border border-border bg-input pl-9 pr-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow data-placeholder:text-muted-foreground"
            >
              <Select.Value placeholder="Select your gender" />
              <Select.Icon>
                <HiChevronDown className="w-4 h-4 text-muted-foreground" />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="z-50 rounded-md border border-border bg-popover shadow-lg overflow-hidden">
                <Select.Viewport className="p-1">
                  {GENDER.map(({ value, label }) => (
                    <Select.Item
                      key={value}
                      value={value}
                      className="flex items-center px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-accent select-none"
                    >
                      <Select.ItemText>{label}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label.Root
          htmlFor="email"
          className="block text-xs font-medium text-foreground"
        >
          Email address
        </Label.Root>
        <div className="relative">
          <HiOutlineEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            aria-label="Email"
            required
            id="email"
            name="email"
            type="email"
            placeholder="name@gmail.com"
            className="w-full rounded-md border border-border bg-input pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label.Root
          htmlFor="role"
          className="block text-xs font-medium text-foreground"
        >
          Account type
        </Label.Root>
        <div className="relative">
          <HiOutlineAcademicCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
          <Select.Root name="role">
            <Select.Trigger
              aria-required
              id="role"
              className="w-full flex items-center justify-between rounded-md border border-border bg-input pl-9 pr-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow data-placeholder:text-muted-foreground"
            >
              <Select.Value placeholder="Select your institutional role" />
              <Select.Icon>
                <HiChevronDown className="w-4 h-4 text-muted-foreground" />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="z-50 rounded-md border border-border bg-popover shadow-lg overflow-hidden">
                <Select.Viewport className="p-1">
                  {ROLE.map(({ value, label }) => (
                    <Select.Item
                      key={value}
                      value={value}
                      className="flex items-center px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-accent select-none"
                    >
                      <Select.ItemText>{label}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label.Root
          aria-label="Password"
          htmlFor="password"
          className="block text-xs font-medium text-foreground"
        >
          Password
        </Label.Root>
        <div className="relative">
          <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            aria-label="Password"
            required
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="w-full rounded-md border border-border bg-input pl-9 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <HiOutlineEyeSlash className="w-4 h-4" />
            ) : (
              <HiOutlineEye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label.Root
          aria-label="Confirm Password"
          htmlFor="confirmPassword"
          className="block text-xs font-medium text-foreground"
        >
          Confirm password
        </Label.Root>
        <div className="relative">
          <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            aria-label="Confirm Password"
            required
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            className="w-full rounded-md border border-border bg-input pl-9 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? (
              <HiOutlineEyeSlash className="w-4 h-4" />
            ) : (
              <HiOutlineEye className="w-4 h-4" />
            )}
          </button>
        </div>
        {error && (
          <p className="text-[11px] text-destructive">{error.message}</p>
        )}
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <Checkbox.Root
          required
          id="terms"
          name="terms"
          checked={agreed}
          onCheckedChange={(v) => setAgreed(v === true)}
          className="h-4 w-4 shrink-0 mt-0.5 rounded border border-border bg-input focus:outline-none focus:ring-2 focus:ring-ring data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-colors"
        >
          <Checkbox.Indicator className="flex items-center justify-center">
            <HiCheck className="w-2.5 h-2.5 text-primary-foreground" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <Label.Root
          htmlFor="terms"
          className="text-[12px] text-muted-foreground leading-relaxed cursor-pointer"
        >
          I agree to the{" "}
          <Link
            href={ROUTES.TERMS_AND_CONDITIONS}
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href={ROUTES.PRIVACY_POLICY}
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Privacy Policy
          </Link>
          .
        </Label.Root>
      </div>

      <button
        type="submit"
        disabled={!agreed}
        suppressHydrationWarning
        className={`w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors shadow-sm mt-1 ${!agreed ? "opacity-40 cursor-not-allowed" : ""}`}
      >
        Create account
      </button>
    </form>
  );
}
