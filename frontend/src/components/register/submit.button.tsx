import { FiLoader } from "react-icons/fi";

interface SubmitProps {
  isPendingSignup: boolean;
  agreed: boolean;
}

export function Submit({ isPendingSignup, agreed }: SubmitProps) {
  return (
    <button
      type="submit"
      disabled={!agreed || isPendingSignup}
      suppressHydrationWarning
      className={`w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors shadow-sm mt-1 ${!agreed || isPendingSignup ? "opacity-40 cursor-not-allowed" : ""}`}
    >
      {isPendingSignup ? (
        <div className="flex items-center justify-center gap-2">
          <FiLoader className="w-4 h-4 animate-spin" />
          Creating account...
        </div>
      ) : (
        "Create account"
      )}
    </button>
  );
}
