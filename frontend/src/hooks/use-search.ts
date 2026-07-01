import { useMutation } from "@tanstack/react-query";
import { searchService } from "@/service/search.service";
import { searchProps, SearchResponse } from "@/model/search.model";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/route.config";

interface useSearchMutationProps {
  mutationFn: (e: searchProps) => Promise<SearchResponse>;
}

function useSearchMutation({ mutationFn }: useSearchMutationProps) {
  const router = useRouter();
  return useMutation({
    mutationFn,
    onSuccess: (_, variables) => {
      router.push(
        `${ROUTES.SEARCH}?q=${encodeURIComponent(variables.q)}&${ROUTES.PAGE}=${variables.page}`,
      );
    },
  });
}

export const useSearch = () =>
  useSearchMutation({
    mutationFn: searchService.search,
  });
