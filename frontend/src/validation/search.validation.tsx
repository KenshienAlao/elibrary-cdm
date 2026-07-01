import z from "zod";

export const SearchSchema = z.object({
  search: z.string().min(1, "Query is required").trim(),
});

export type Search = z.infer<typeof SearchSchema>;
