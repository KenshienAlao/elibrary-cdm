export interface ScholarAuthor {
  id: string;
  display_name: string;
}

export interface ScholarAuthorship {
  author: ScholarAuthor;
}

export interface ScholarLocation {
  landing_page_url: string | null;
  pdf_url: string | null;
  source: {
    display_name: string;
  } | null;
}

export interface ScholarPaper {
  id: string;
  title: string;
  publication_year: number;
  authorships: ScholarAuthorship[];
  primary_location: ScholarLocation | null;
  best_oa_location: ScholarLocation | null;
  cited_by_count: number;
  abstract_inverted_index?: Record<string, number[]>;
}

export interface ScholarSearchResponse {
  meta: {
    count: number;
    page: number;
    per_page: number;
  };
  results: ScholarPaper[];
}
