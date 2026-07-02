import api from "@/lib/utils/api";
import { Signup } from "../validation/auth.validation";
import { ApiReponse } from "@/model/api.model";
import { ENDPOINTS } from "@/config/endpoints.config";
import { User } from "@/model/profile.model";

export const authService = {
  signup: (data: Signup): Promise<ApiReponse> =>
    api.post<any, ApiReponse>(ENDPOINTS.AUTH.SIGNUP, data),
  login: (data: Signup) =>
    api.post<any, ApiReponse>(ENDPOINTS.AUTH.LOGIN, data),
  getProfile: (): Promise<ApiReponse<User>> =>
    api.get<any, ApiReponse<User>>(ENDPOINTS.PROFILE.GET),
};
