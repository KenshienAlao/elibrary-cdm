import axios, { AxiosError } from "axios";

export class SessionExpiredError extends Error {
  constructor() {
    super("Session expired");
    this.name = "SessionExpiredError";
  }
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export default api;

api.interceptors.response.use(
  (res) => {
    if (res.data?.success === false) throw new Error(res.data.message);
    return res.data;
  },
  async (error: AxiosError<{ message?: string }>) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (typeof window !== "undefined") {
        window.location.href = "/login?clear_session=true";
        return;
      }
      throw new SessionExpiredError();
    }

    throw new Error(error.response?.data?.message ?? error.message);
  },
);
