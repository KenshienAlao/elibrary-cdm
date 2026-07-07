import * as Label from "@radix-ui/react-label";
import { useState } from "react";
import {
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLockClosed,
} from "react-icons/hi2";

interface ConfirmProps {
  error?: Error | null;
}

export function Confirm({ error }: ConfirmProps) {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
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
      {error && <p className="text-[11px] text-destructive">{error.message}</p>}
    </div>
  );
}
