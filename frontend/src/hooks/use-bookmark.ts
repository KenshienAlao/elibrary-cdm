import { ApiReponse } from "@/model/api.model";
import { bookmarkService } from "@/service/bookmark.service";
import { Bookmark } from "@/validation/bookmark.validation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const bookmarkKey = ["bookmark"];

interface useBookmarkMutationProps {
  mutationFn: (data: any) => Promise<ApiReponse<Bookmark>>;
}

export function useBookmark() {
  return useQuery<ApiReponse<Bookmark[]>, Error, Bookmark[]>({
    queryKey: bookmarkKey,
    queryFn: bookmarkService.get,
    select: (res) => res.data!,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
}

function useBookmarkMutation({ mutationFn }: useBookmarkMutationProps) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: bookmarkKey,
    mutationFn,
    onSuccess: (res: ApiReponse<Bookmark>) => {
      queryClient.invalidateQueries({ queryKey: bookmarkKey });
    },
    onError: (err: Error) => console.error(err.message),
  });
}

export const useAddBookmark = () =>
  useBookmarkMutation({
    mutationFn: bookmarkService.add,
  });
