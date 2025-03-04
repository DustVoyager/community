import { deletePost } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKyes } from "@/constants";
import { useMutation } from "@tanstack/react-query";

function useDeletePost() {
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POSTS],
      });
    },
  });
}

export default useDeletePost;
