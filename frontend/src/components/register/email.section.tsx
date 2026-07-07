import * as Label from "@radix-ui/react-label";
import { HiOutlineEnvelope } from "react-icons/hi2";

export function Email() {
  return (
    <div className="space-y-1.5">
      <Label.Root
        htmlFor="email"
        className="block text-xs font-medium text-foreground"
      >
        Email address
      </Label.Root>
      <div className="relative">
        <HiOutlineEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          aria-label="Email"
          required
          id="email"
          name="email"
          type="email"
          placeholder="name@gmail.com"
          className="w-full rounded-md border border-border bg-input pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />
      </div>
    </div>
  );
}
