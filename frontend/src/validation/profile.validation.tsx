import z from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const ProfileSchema = z.object({
  avatar: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "Image must be 5MB or smaller",
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .png, and .webp files are supported",
    )
    .optional(),
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(255, "First name must be at most 255 characters")
    .trim(),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(255, "Last name must be at most 255 characters")
    .trim(),
  gender: z.enum(["male", "female", "other", "prefer not to say"], {
    error: "Please select your gender",
  }),
  role: z.enum(["student", "faculty", "staff"], {
    error: "Please select your role",
  }),
});

export type Profile = z.infer<typeof ProfileSchema>;
