import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import { FiChevronDown } from "react-icons/fi";
import { Skeleton } from "../ui/skeleton";
import { User } from "@/model/profile.model";
import { GENDER, ROLE } from "@/config/signup.config";

interface Props {
  isLoading: boolean;
  user?: User | null;
}

export function Info({ isLoading, user }: Props) {
  return (
    <section>
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Personal info
      </h2>
      {isLoading ? (
        <div className="space-y-4 rounded-xl border border-border bg-card p-5 shadow-xs">
          <Skeleton className="h-10 w-full rounded-lg" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      ) : (
        <div className="divide-y divide-border rounded-xl border border-border bg-card shadow-xs">
          <div className="grid grid-cols-2 divide-x divide-border">
            <div className="px-5 py-4">
              <Label.Root
                htmlFor="firstName"
                className="text-sm font-medium text-foreground"
              >
                First name
              </Label.Root>
              <input
                aria-label="First name"
                id="firstName"
                name="firstName"
                defaultValue={user?.firstName}
                className="mt-2 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm transition-shadow focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="px-5 py-4">
              <Label.Root
                htmlFor="lastName"
                className="text-sm font-medium text-foreground"
              >
                Last name
              </Label.Root>
              <input
                aria-label="Last name"
                id="lastName"
                name="lastName"
                defaultValue={user?.lastName}
                className="mt-2 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm transition-shadow focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="px-5 py-4">
            <Label.Root
              htmlFor="gender"
              className="text-sm font-medium text-foreground"
            >
              Gender
            </Label.Root>
            <Select.Root defaultValue={user?.gender} name="gender">
              <Select.Trigger
                id="gender"
                className="mt-2 flex w-full items-center justify-between rounded-lg border border-border bg-input px-3 py-2 text-sm data-placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Select.Value placeholder="Select gender" />
                <Select.Icon>
                  <FiChevronDown className="text-muted-foreground" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg">
                  <Select.Viewport>
                    {GENDER.map((option) => (
                      <Select.Item
                        key={option.value}
                        value={option.value}
                        className="cursor-pointer px-3 py-2 text-sm outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                      >
                        <Select.ItemText>{option.label}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className="px-5 py-4">
            <Label.Root
              htmlFor="role"
              className="text-sm font-medium text-foreground"
            >
              Role
            </Label.Root>
            <Select.Root defaultValue={user?.role} name="role">
              <Select.Trigger
                id="role"
                className="mt-2 flex w-full items-center justify-between rounded-lg border border-border bg-input px-3 py-2 text-sm data-placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Select.Value placeholder="Select role" />
                <Select.Icon>
                  <FiChevronDown className="text-muted-foreground" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg">
                  <Select.Viewport>
                    {ROLE.map((option) => (
                      <Select.Item
                        key={option.value}
                        value={option.value}
                        className="cursor-pointer px-3 py-2 text-sm outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                      >
                        <Select.ItemText>{option.label}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>
      )}
    </section>
  );
}
