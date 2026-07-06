import z from "zod";

export const BookmarkAddSchema = z.object({
  book_id: z.string().nullish(),
  title: z.string().nullish(),
  authors: z.string().nullish(),
  publication_year: z.number().nullish(),
  cited_by_count: z.number().nullish(),
  url: z.string().nullish(),
  pdf_url: z.string().nullish(),
});

export const BookmarkDeleteSchema = z.object({
  id: z.number(),
  book_id: z.string(),
});

export type BookmarkAdd = z.infer<typeof BookmarkAddSchema>;
export type BookmarkDelete = z.infer<typeof BookmarkDeleteSchema>;
