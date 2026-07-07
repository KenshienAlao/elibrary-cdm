import { GENDER } from "@/config/signup.config";
import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import { HiChevronDown, HiOutlineUserCircle } from "react-icons/hi2";

export function Gender() {
  return (
    <div className="space-y-1.5">
      <Label.Root
        htmlFor="gender"
        className="block text-xs font-medium text-foreground"
      >
        Gender
      </Label.Root>
      <div className="relative">
        <HiOutlineUserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
        <Select.Root name="gender">
          <Select.Trigger
            aria-required
            id="gender"
            className="w-full flex items-center justify-between rounded-md border border-border bg-input pl-9 pr-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow data-placeholder:text-muted-foreground"
          >
            <Select.Value placeholder="Select your gender" />
            <Select.Icon>
              <HiChevronDown className="w-4 h-4 text-muted-foreground" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="z-50 rounded-md border border-border bg-popover shadow-lg overflow-hidden">
              <Select.Viewport className="p-1">
                {GENDER.map(({ value, label }) => (
                  <Select.Item
                    key={value}
                    value={value}
                    className="flex items-center px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-accent select-none"
                  >
                    <Select.ItemText>{label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  );
}
