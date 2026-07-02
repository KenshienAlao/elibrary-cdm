import { FiAlertCircle } from "react-icons/fi";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="mb-8 flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4"
    >
      <FiAlertCircle className="mt-0.5 shrink-0 text-lg text-destructive" />
      <div>
        <p className="text-sm font-semibold text-destructive">
          Something went wrong
        </p>
        <p className="mt-1 text-sm text-destructive/80">
          {message || "We couldn't complete your search. Please try again."}
        </p>
      </div>
    </div>
  );
}
