export function FormHeader() {
  return (
    <div className="mb-7">
      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-primary bg-accent border border-primary/15 rounded-full px-3 py-1 mb-4 tracking-wide">
        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
        Student & Faculty Portal
      </span>
      <h1 className="text-2xl font-bold text-foreground tracking-tight">
        Create your account
      </h1>
      <p className="text-sm text-muted-foreground mt-1.5">
        Sign up with your email address.
      </p>
    </div>
  );
}
