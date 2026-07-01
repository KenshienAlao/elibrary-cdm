export type ApiReponse<T = void> = {
  data?: T; // for mutation
  success: boolean;
  message: string;
  results?: T; // for query
  meta?: any; // for pagination
};
