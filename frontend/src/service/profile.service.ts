import { ENDPOINTS } from "@/config/endpoints.config";
import api from "@/lib/utils/api";
import { ApiReponse } from "@/model/api.model";
import { User } from "@/model/profile.model";

export const profileService = {
  getProfile: (): Promise<ApiReponse<User>> =>
    api.get<void, ApiReponse<User>>(ENDPOINTS.PROFILE.GET),
  updateProfile: (data: FormData): Promise<ApiReponse<User>> =>
    api.patch<void, ApiReponse<User>>(ENDPOINTS.PROFILE.UPDATE, data),
};
