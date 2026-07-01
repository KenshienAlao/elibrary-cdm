import api from "@/lib/utils/api";
import { ENDPOINTS } from "@/config/endpoints.config";
import { searchProps, SearchResponse } from "@/model/search.model";

export const searchService = {
  search: (e: searchProps): Promise<SearchResponse> =>
    api.get(`${ENDPOINTS.SEARCH}?q=${encodeURIComponent(e.q)}&page=${e.page}`),
};
