import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
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
    const req = error.config as typeof error.config & { _retry?: boolean };

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      req &&
      !req._retry
    ) {
      req._retry = true;

      try {
        await axios.post(
          "/auth/refresh",
          {},
          {
            withCredentials: true,
          },
        );

        return api(req);
      } catch {
        window.location.href = "/login?clear_session=true";
      }
    }

    throw new Error(error.response?.data?.message ?? error.message);
  },
);
