import { getLikedPosts } from "@/api/post";
import { queryKyes } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";

function useGetInfiniteLikedPosts() {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getLikedPosts(pageParam),
    queryKey: [queryKyes.POST, queryKyes.GET_POSTS, queryKyes.GET_LIKED_POST],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const lastPost = lastPage[lastPage.length - 1];
      return lastPage ? allPages.length + 1 : undefined;
    },
  });
}

export default useGetInfiniteLikedPosts;
