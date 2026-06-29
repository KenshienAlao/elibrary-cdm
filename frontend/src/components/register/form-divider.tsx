export function FormDivider() {
  return (
    <div className="flex items-center gap-3 my-5">
      <div className="h-px flex-1 bg-border" />
      <span className="text-[11px] text-muted-foreground">or</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
