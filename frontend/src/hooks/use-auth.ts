import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/service/auth.service";
import { ApiReponse } from "@/model/api.model";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/route.config";
import { profileKey } from "./use-profile";
import { profileService } from "@/service/profile.service";

const authKeys = ["auth"];

interface useAuthMutationProps<TData, TVariables> {
  mutationFn: (data: TVariables) => Promise<ApiReponse<TData>>;
  mutationKey: string[];
  redirectRoute: string;
}

function useAuthMutation({
  mutationFn,
  mutationKey,
  redirectRoute,
}: useAuthMutationProps<any, any>) {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: async (res: ApiReponse) => {
      queryClient.setQueryData(mutationKey, res.data);
      await queryClient.fetchQuery({
        queryKey: profileKey,
        queryFn: profileService.getProfile,
      });
      router.push(redirectRoute);
    },
    onError: (err) => console.error(err),
  });
}

export const useSignup = () =>
  useAuthMutation({
    mutationFn: authService.signup,
    mutationKey: [...authKeys, "signup"],
    redirectRoute: ROUTES.LOGIN_PAGE,
  });
export const useLogin = () =>
  useAuthMutation({
    mutationFn: authService.login,
    mutationKey: [...authKeys, "login"],
    redirectRoute: ROUTES.HOME_PAGE,
  });
