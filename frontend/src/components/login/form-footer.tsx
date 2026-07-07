import { ROUTES } from "@/config/route.config";
import Link from "next/link";

export function FormFooter() {
  return (
    <p className="text-center text-[13px] text-muted-foreground">
      Don&apos;t have an account?{" "}
      <Link
        href={ROUTES.SIGNUP_PAGE}
        className="text-primary font-medium hover:underline underline-offset-2"
      >
        Sign up
      </Link>
    </p>
  );
}
