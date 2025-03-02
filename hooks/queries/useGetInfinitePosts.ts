import { getPosts } from "@/api/post";
import { queryKyes } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";

function useGetInfinitePosts() {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getPosts(pageParam),
    queryKey: [queryKyes.POST, queryKyes.GET_POSTS],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const lastPost = lastPage[lastPage.length - 1];
      return lastPage ? allPages.length + 1 : undefined;
    },
  });
}

export default useGetInfinitePosts;
