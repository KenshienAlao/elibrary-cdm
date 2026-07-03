import z from "zod";

export const BookmarkSchema = z.object({
  book_id: z.string().nullish(),
  title: z.string().nullish(),
  authors: z.string().nullish(),
  publication_year: z.number().nullish(),
  cited_by_count: z.number().nullish(),
  url: z.string().nullish(),
  pdf_url: z.string().nullish(),
});

export type Bookmark = z.infer<typeof BookmarkSchema>;
