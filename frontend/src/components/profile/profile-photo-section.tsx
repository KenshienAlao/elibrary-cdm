import * as Avatar from "@radix-ui/react-avatar";
import { Skeleton } from "../ui/skeleton";
import { FiCamera, FiUser } from "react-icons/fi";
import { ChangeEvent, RefObject } from "react";
import { User } from "@/model/profile.model";

interface PhotoProps {
  user?: User | null;
  avatarPreview: string | null;
  fullName: string;
  isLoading: boolean;
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleAvatarChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Photo({
  user,
  avatarPreview,
  fullName,
  isLoading,
  fileInputRef,
  handleAvatarChange,
}: PhotoProps) {
  return (
    <section>
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Photo
      </h2>
      <div className="rounded-xl border border-border bg-card shadow-xs">
        <div className="flex items-center gap-4 px-5 py-5">
          {isLoading ? (
            <Skeleton className="h-16 w-16 rounded-full" />
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef?.current?.click()}
              className="group relative shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Avatar.Root className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-border bg-muted">
                <Avatar.Image
                  src={avatarPreview ?? user?.avatar}
                  alt={fullName || "Profile photo"}
                  className="h-full w-full object-cover"
                />
                <Avatar.Fallback className="flex h-full w-full items-center justify-center text-muted-foreground">
                  <FiUser className="text-2xl" />
                </Avatar.Fallback>
              </Avatar.Root>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-xs transition-colors group-hover:text-primary">
                <FiCamera className="text-xs" />
              </span>
            </button>
          )}
          <div className="min-w-0">
            {isLoading ? (
              <Skeleton className="h-3.5 w-32" />
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => fileInputRef?.current?.click()}
                  className="text-sm font-medium text-primary hover:text-primary-hover"
                >
                  Change photo
                </button>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  JPG or PNG, up to 5MB.
                </p>
              </>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              name="avatar"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
