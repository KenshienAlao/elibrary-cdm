"use client";

import { useProfile, useUpdateProfile } from "@/hooks/use-profile";
import { ProfileSchema } from "@/validation/profile.validation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ProfileError } from "./profile-error";
import { Photo } from "./profile-photo-section";
import { Info } from "./profile-info";
import { SubmitButton } from "./profile-submit.button";

export function Form() {
  const { data: user, isLoading, error: userError } = useProfile();
  const { mutate: updateUser, isPending: pendingUpdateUser } =
    useUpdateProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [errorValidation, setErrorValidation] = useState<Error | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    };
  }, [avatarPreview]);

  const handleFormChange = (e: FormEvent<HTMLFormElement>) => {
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
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(file);
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
  };

  const error = errorValidation || userError;
  const showSaveBar = isDirty || pendingUpdateUser || justSaved;
  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(" ");

  return (
    <>
      {error && <ProfileError error={error} />}
      <form
        key={isLoading ? "loading" : "loaded"}
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        className="space-y-8"
      >
        <Photo
          user={user}
          avatarPreview={avatarPreview}
          isLoading={isLoading}
          fileInputRef={fileInputRef}
          handleAvatarChange={handleAvatarChange}
          fullName={fullName}
        />

        <Info user={user} isLoading={isLoading} />
        {showSaveBar && (
          <SubmitButton
            pendingUpdateUser={pendingUpdateUser}
            justSaved={justSaved}
          />
        )}
      </form>
    </>
  );
}
