import { ApiReponse } from "@/model/api.model";
import { User } from "@/model/profile.model";
import { profileService } from "@/service/profile.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const profileKey = ["profile"];

interface useProfileMutationProps<TData, TVariables> {
  mutationFn: (data: TVariables) => Promise<ApiReponse<TData>>;
  mutationKey: string[];
}

export function useProfile() {
  return useQuery<ApiReponse<User>, Error, User>({
    queryKey: profileKey,
    queryFn: profileService.getProfile,
    select: (res) => res.data!,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
}

function useProfileMutation<TData, TVariables>({
  mutationFn,
  mutationKey,
}: useProfileMutationProps<TData, TVariables>) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (res) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: profileKey });
    },
    onError: (err) => console.error(err),
  });
}

export const useUpdateProfile = () =>
  useProfileMutation({
    mutationFn: profileService.updateProfile,
    mutationKey: [...profileKey, "update"],
  });
