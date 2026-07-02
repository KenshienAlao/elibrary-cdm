import { ApiReponse } from "@/model/api.model";
import { User } from "@/model/profile.model";
import { authService } from "@/service/auth.service";
import { profileService } from "@/service/profile.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const profileKey = ["profile"];

interface useAuthQueryProps {
  queryFn?: () => Promise<ApiReponse<User>>;
}

interface useProfileMutationProps {
  mutationFn: (data: any) => Promise<ApiReponse<User>>;
}

function useProfileMutation({ mutationFn }: useProfileMutationProps) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: profileKey,
    mutationFn,
    onSuccess: (res: ApiReponse<User>) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: profileKey });
    },
    onError: (err: Error) => console.error(err.message),
  });
}

function useProfileQuery({ queryFn }: useAuthQueryProps) {
  return useQuery<ApiReponse<User>, Error, User>({
    queryKey: profileKey,
    queryFn,
    select: (res) => res.data!,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export const useGetProfile = () =>
  useProfileQuery({
    queryFn: profileService.getProfile,
  });

export const useUpdateProfile = () =>
  useProfileMutation({
    mutationFn: profileService.updateProfile,
  });
