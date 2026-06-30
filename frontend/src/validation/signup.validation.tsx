import { z } from "zod";

export const SignupSchema = z
  .object({
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
    email: z
      .email("Email is invalid")
      .min(1, "Email is required")
      .max(255, "Email must be at most 255 characters")
      .trim(),
    role: z.enum(["student", "faculty", "staff"], {
      error: "Please select your role",
    }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(255, "Password must be at Dmost 255 characters")
      .trim(),
    confirmPassword: z.string().min(1, "Confirm password is required").trim(),
    terms: z.boolean().refine((val) => val === true, "Terms must be accepted"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type Signup = z.infer<typeof SignupSchema>;
