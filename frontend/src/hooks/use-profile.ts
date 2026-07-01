import { ApiReponse } from "@/model/api.model";
import { User } from "@/model/profile.model";
import { authService } from "@/service/auth.service";
import { useQuery } from "@tanstack/react-query";

const profileKey = ["profile"]

interface useAuthQueryProps {
  queryFn?: () => Promise<ApiReponse<User>>;
}

function useAuthQuery({ queryFn }: useAuthQueryProps) {
  return useQuery<ApiReponse<User>, Error, User>({
    queryKey: profileKey,
    queryFn,
    select: (res) => res.data!,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

}

export const useProfile = () => 
  useAuthQuery({
    queryFn: authService.getProfile
  })
