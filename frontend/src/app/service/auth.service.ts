import api from "@/lib/utils/api";
import { Signup } from "../../validation/auth.validation";
import { ApiReponse } from "@/model/api.model";
import { ENDPOINTS } from "@/config/endpoints.config";

export const authService = {
  signup: (data: Signup): Promise<ApiReponse> =>
    api.post<any, ApiReponse>(ENDPOINTS.AUTH.SIGNUP, data),
  login: (data: Signup) =>
    api.post<any, ApiReponse>(ENDPOINTS.AUTH.LOGIN, data),
};
