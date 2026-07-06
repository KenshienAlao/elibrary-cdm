import { ApiReponse } from "@/model/api.model";
import { Bookmark } from "@/model/bookmark.model";
import { bookmarkService } from "@/service/bookmark.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const bookmarkKey = ["bookmark"];

interface UseBookmarkMutationProps<TData, TVariables> {
  mutationFn: (data: TVariables) => Promise<ApiReponse<TData>>;
  mutationKey: string[];
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
  mutationKey,
}: UseBookmarkMutationProps<TData, TVariables>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookmarkKey });
    },
    onError: (err) => {
      console.error(err);
    },
  });
}

export const useAddBookmark = () =>
  useBookmarkMutation({
    mutationKey: [...bookmarkKey, "add"],
    mutationFn: bookmarkService.add,
  });

export const useDeleteBookmark = () =>
  useBookmarkMutation({
    mutationKey: [...bookmarkKey, "delete"],
    mutationFn: bookmarkService.delete,
  });
