import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/service/auth.service";
import { ApiReponse } from "@/model/api.model";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/route.config";

interface useAuthMutationProps {
  mutationFn: (data: any) => Promise<ApiReponse>;
  redirectRoute: string;
}

const authKeys = {
  auth: ["auth"],
  profile: ["profile"],
};

function useAuthMutation({ mutationFn, redirectRoute }: useAuthMutationProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: authKeys.auth,
    mutationFn,
    onSuccess: (res: ApiReponse) => {
      toast.success(res.message);
      queryClient.setQueryData(authKeys.auth, res.data);
      queryClient.setQueryData(authKeys.profile, res.data);
      router.push(redirectRoute);
    },
    onError: (err: Error) => console.error(err),
  });
}



export const useSignup = () =>
  useAuthMutation({
    mutationFn: authService.signup,
    redirectRoute: ROUTES.LOGIN_PAGE,
  });
export const useLogin = () =>
  useAuthMutation({
    mutationFn: authService.login,
    redirectRoute: ROUTES.HOME_PAGE,
  });
