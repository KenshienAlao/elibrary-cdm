import { ROUTES } from "@/config/route.config";
import Link from "next/link";

export function FormFooter() {
  return (
    <p className="text-center text-[13px] text-muted-foreground">
      Already have an account?{" "}
      <Link
        href={ROUTES.LOGIN_PAGE}
        className="text-primary font-medium hover:underline underline-offset-2"
      >
        Sign in
      </Link>
    </p>
  );
}
