import { getPost } from "@/api/post";
import { queryKyes } from "@/constants";
import { useQuery } from "@tanstack/react-query";

function useGetPost(id: number) {
  return useQuery({
    queryFn: () => getPost(Number(id)),
    queryKey: [queryKyes.POST, queryKyes.GET_POST, id],
    enabled: Boolean(id),
  });
}

export default useGetPost;
