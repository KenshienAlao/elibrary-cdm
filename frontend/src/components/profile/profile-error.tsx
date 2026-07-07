interface ErrorProps {
  error: Error;
}

export function ProfileError({ error }: ErrorProps) {
  return (
    <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
      {error.message}
    </div>
  );
}
