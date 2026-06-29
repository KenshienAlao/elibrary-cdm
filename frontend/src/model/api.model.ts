export type ApiReponse<T = void> = {
  data?: T;
  success: boolean;
  message: string;
};
