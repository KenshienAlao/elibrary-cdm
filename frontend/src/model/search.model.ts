import { ScholarPaper } from "./paper.model";

export type searchProps = {
  q: string;
  page: number;
};

export interface SearchResponse {
  meta: {
    count: number;
    page: number;
    per_page: number;
  };
  results: ScholarPaper[];
}
