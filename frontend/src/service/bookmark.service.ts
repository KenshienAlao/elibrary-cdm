import { ENDPOINTS } from "@/config/endpoints.config";
import api from "@/lib/utils/api";
import { ApiReponse } from "@/model/api.model";
import { Bookmark } from "@/validation/bookmark.validation";

export const bookmarkService = {
  get: (): Promise<ApiReponse<Bookmark[]>> =>
    api.get<any, ApiReponse<Bookmark[]>>(ENDPOINTS.BOOKMARK.GET),
  add: (data: Bookmark): Promise<ApiReponse<Bookmark>> =>
    api.post<any, ApiReponse<Bookmark>>(ENDPOINTS.BOOKMARK.ADD, data),
};
