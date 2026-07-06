import { ApiReponse } from "@/model/api.model";
import { Bookmark } from "@/model/bookmark.model";
import { bookmarkService } from "@/service/bookmark.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const bookmarkKey = ["bookmark"];

interface useBookmarkMutationProps<TData, TVariables> {
  mutationFn: (data: TVariables) => Promise<ApiReponse<TData>>;
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

function useBookmarkMutation<TData, TVariables>({
  mutationFn,
}: useBookmarkMutationProps<TData, TVariables>) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: bookmarkKey,
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookmarkKey });
    },
    onError: (err: Error) => console.error(err.message),
  });
}

export const useAddBookmark = () =>
  useBookmarkMutation({
    mutationFn: bookmarkService.add,
  });

export const useDeleteBookmark = () =>
  useBookmarkMutation({
    mutationFn: bookmarkService.delete,
  });
