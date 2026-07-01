export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="mb-8 rounded border border-destructive/20 bg-destructive/10 p-4 text-destructive">
      <p className="font-semibold">Search failed</p>
      <p className="mt-1 text-sm">{message}</p>
    </div>
  );
}
