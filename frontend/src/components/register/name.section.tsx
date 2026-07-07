import * as Label from "@radix-ui/react-label";
import { HiOutlineUser } from "react-icons/hi2";

export function Name() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-1.5">
        <Label.Root
          aria-label="First name"
          htmlFor="firstName"
          className="block text-xs font-medium text-foreground"
        >
          First name
        </Label.Root>
        <div className="relative">
          <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            aria-label="First Name"
            required
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            className="w-full rounded-md border border-border bg-input pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label.Root
          aria-label="Last name"
          htmlFor="lastName"
          className="block text-xs font-medium text-foreground"
        >
          Last name
        </Label.Root>
        <input
          aria-label="Last Name"
          required
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Enter your last name"
          className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />
      </div>
    </div>
  );
}
