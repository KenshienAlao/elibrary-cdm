"use client";

import { FormEvent, useRef, useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import {
  FiCamera,
  FiCheck,
  FiChevronDown,
  FiLoader,
  FiUser,
} from "react-icons/fi";
import { useGetProfile, useUpdateProfile } from "@/hooks/use-profile";
import { Structure } from "@/components/structure";
import { ProfileSchema } from "@/validation/profile.validation";
import { GENDER, ROLE } from "@/config/signup.config";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfilePage() {
  const { data: user, isLoading, error: userError } = useGetProfile();
  const { mutate: updateUser, isPending: pendingUpdateUser } =
    useUpdateProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [errorValidation, setErrorValidation] = useState<Error | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  function handleFormChange(e: FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const fieldsChanged =
      (formData.get("firstName") ?? "") !== user?.firstName ||
      (formData.get("lastName") ?? "") !== user?.lastName ||
      (formData.get("gender") ?? "") !== user?.gender ||
      (formData.get("role") ?? "") !== user?.role;

    const avatarFile = formData.get("avatar");
    const avatarChanged = avatarFile instanceof File && avatarFile.size > 0;

    setIsDirty(fieldsChanged || avatarChanged);
    if (justSaved) setJustSaved(false);
  }

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(file);
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const avatarFile = formData.get("avatar");
    if (avatarFile instanceof File && avatarFile.size === 0) {
      formData.delete("avatar");
    }

    const result = ProfileSchema.safeParse(
      Object.fromEntries(formData.entries()),
    );

    if (!result.success) {
      setErrorValidation(new Error(result.error.issues[0].message));
      return;
    }

    setErrorValidation(null);
    updateUser(formData, {
      onSuccess: () => {
        setIsDirty(false);
        setJustSaved(true);
        setTimeout(() => setJustSaved(false), 1500);
      },
    });
  }

  const error = errorValidation || userError;
  const showSaveBar = isDirty || pendingUpdateUser || justSaved;

  return (
    <Structure>
      <div className="mx-auto w-full max-w-2xl px-6 py-10 lg:px-12">
        <div className="mb-8 border-b border-border pb-4">
          <h1 className="text-xl font-semibold text-foreground">Profile</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Update your personal information.
          </p>
        </div>

        {error && (
          <div className="mb-6 border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            {error.message}
          </div>
        )}

        <form
          key={isLoading ? "loading" : "loaded"}
          onSubmit={handleSubmit}
          onChange={handleFormChange}
          className="space-y-10"
        >
          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Photo
            </h2>
            <div className="border border-border">
              <div className="flex items-center gap-4 px-4 py-4">
                {isLoading ? (
                  <Skeleton className="h-15 w-15 rounded-sm" />
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="group relative shrink-0"
                  >
                    <Avatar.Root className="flex h-16 w-16 items-center justify-center overflow-hidden border border-border bg-muted rounded-sm">
                      <Avatar.Image
                        src={avatarPreview ?? user?.avatar}
                        alt={user?.lastName}
                        className="h-full w-full object-cover rounded-sm"
                      />
                      <Avatar.Fallback className="flex h-full w-full items-center justify-center text-muted-foreground rounded-sm">
                        <FiUser className="text-2xl" />
                      </Avatar.Fallback>
                    </Avatar.Root>
                    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground group-hover:text-foreground">
                      <FiCamera className="text-xs" />
                    </span>
                  </button>
                )}
                <div className="min-w-0">
                  {isLoading ? (
                    <Skeleton className="h-3.5 w-32" />
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-sm text-primary hover:text-primary-hover"
                    >
                      Change photo
                    </button>
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
          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Personal Info
            </h2>
            {isLoading ? (
              <div className="space-y-4 border border-border p-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : (
              <div className="divide-y divide-border border border-border">
                <div className="grid grid-cols-2 divide-x divide-border">
                  <div className="px-4 py-4">
                    <Label.Root
                      htmlFor="firstName"
                      className="text-sm font-medium"
                    >
                      First name
                    </Label.Root>
                    <input
                      id="firstName"
                      name="firstName"
                      defaultValue={user?.firstName}
                      className="mt-2 w-full border border-border bg-input px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="px-4 py-4">
                    <Label.Root
                      htmlFor="lastName"
                      className="text-sm font-medium"
                    >
                      Last name
                    </Label.Root>
                    <input
                      id="lastName"
                      name="lastName"
                      defaultValue={user?.lastName}
                      className="mt-2 w-full border border-border bg-input px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="px-4 py-4">
                  <Label.Root htmlFor="gender" className="text-sm font-medium">
                    Gender
                  </Label.Root>
                  <Select.Root
                    defaultValue={user?.gender}
                    name="gender"
                    onValueChange={(value) => {
                      setIsDirty(value !== user?.gender || isDirty);
                      if (justSaved) setJustSaved(false);
                    }}
                  >
                    <Select.Trigger
                      id="gender"
                      className="mt-2 flex w-full items-center justify-between border border-border bg-input px-3 py-2 text-sm"
                    >
                      <Select.Value placeholder="Select gender" />
                      <Select.Icon>
                        <FiChevronDown />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="overflow-hidden border border-border bg-popover text-popover-foreground shadow-lg">
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

                <div className="px-4 py-4">
                  <Label.Root htmlFor="role" className="text-sm font-medium">
                    Role
                  </Label.Root>
                  <Select.Root
                    defaultValue={user?.role}
                    name="role"
                    onValueChange={(value) => {
                      setIsDirty(value !== user?.role || isDirty);
                      if (justSaved) setJustSaved(false);
                    }}
                  >
                    <Select.Trigger
                      id="role"
                      className="mt-2 flex w-full items-center justify-between border border-border bg-input px-3 py-2 text-sm"
                    >
                      <Select.Value placeholder="Select role" />
                      <Select.Icon>
                        <FiChevronDown />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="overflow-hidden border border-border bg-popover text-popover-foreground shadow-lg">
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
          {showSaveBar && (
            <div className="flex justify-end gap-3 border-t border-border pt-6">
              <button
                type="submit"
                disabled={pendingUpdateUser}
                className="inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
              >
                {pendingUpdateUser && <FiLoader className="animate-spin" />}
                {justSaved && !pendingUpdateUser && <FiCheck />}
                {pendingUpdateUser
                  ? "Saving..."
                  : justSaved
                    ? "Saved"
                    : "Save changes"}
              </button>
            </div>
          )}
        </form>
      </div>
    </Structure>
  );
}
