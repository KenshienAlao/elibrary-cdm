import { ENDPOINTS } from "@/config/endpoints.config";
import api from "@/lib/utils/api";
import { ApiReponse } from "@/model/api.model";
import { Bookmark } from "@/model/bookmark.model";
import { BookmarkAdd, BookmarkDelete } from "@/validation/bookmark.validation";

export const bookmarkService = {
  get: (): Promise<ApiReponse<Bookmark[]>> =>
    api.get<void, ApiReponse<Bookmark[]>>(ENDPOINTS.BOOKMARK.GET),
  add: (data: BookmarkAdd): Promise<ApiReponse<Bookmark>> =>
    api.post<void, ApiReponse<Bookmark>>(ENDPOINTS.BOOKMARK.ADD, data),
  delete: (data: BookmarkDelete): Promise<ApiReponse<void>> =>
    api.delete(ENDPOINTS.BOOKMARK.DELETE, { data }),
};
