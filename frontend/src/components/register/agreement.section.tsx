import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";
import { HiCheck } from "react-icons/hi2";

interface AgreementProps {
  agreed: boolean;
  setAgreed: (agree: boolean) => void;
  setOpenTerms: (openTerms: boolean) => void;
  setOpenPrivacy: (openPrivacy: boolean) => void;
}

export function Agreement({
  agreed,
  setAgreed,
  setOpenTerms,
  setOpenPrivacy,
}: AgreementProps) {
  return (
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
        className="text-[12px] text-muted-foreground leading-relaxed"
      >
        I agree to the{" "}
        <button
          type="button"
          onClick={() => setOpenTerms(true)}
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Terms of Service
        </button>{" "}
        and{" "}
        <button
          type="button"
          onClick={() => setOpenPrivacy(true)}
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          Privacy Policy
        </button>
        .
      </Label.Root>
    </div>
  );
}
