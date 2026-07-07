import api from "@/lib/utils/api";
import { Login, Signup } from "../validation/auth.validation";
import { ApiReponse } from "@/model/api.model";
import { ENDPOINTS } from "@/config/endpoints.config";

export const authService = {
  signup: (data: Signup): Promise<ApiReponse> =>
    api.post<void, ApiReponse>(ENDPOINTS.AUTH.SIGNUP, data),
  login: (data: Login) =>
    api.post<void, ApiReponse>(ENDPOINTS.AUTH.LOGIN, data),
};
