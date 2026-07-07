import { FiCheck, FiLoader } from "react-icons/fi";

interface SubmitButtonProps {
  pendingUpdateUser: boolean;
  justSaved: boolean;
}
export function SubmitButton({
  pendingUpdateUser,
  justSaved,
}: SubmitButtonProps) {
  return (
    <div className="sticky bottom-0 -mx-6 flex justify-end gap-3 border-t border-border bg-background/80 px-6 py-4 backdrop-blur-sm lg:-mx-8 lg:px-8">
      <button
        type="submit"
        disabled={pendingUpdateUser}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover disabled:opacity-60"
      >
        {pendingUpdateUser && <FiLoader className="animate-spin" />}
        {justSaved && !pendingUpdateUser && <FiCheck />}
        {pendingUpdateUser ? "Saving..." : justSaved ? "Saved" : "Save changes"}
      </button>
    </div>
  );
}
