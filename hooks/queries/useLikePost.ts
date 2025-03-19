import { likePost } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKyes } from "@/constants";
import { useMutation } from "@tanstack/react-query";

function useLikePost() {
  return useMutation({
    mutationFn: likePost,
    onSuccess: (postId) => {
      queryClient.invalidateQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POSTS],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POST, postId],
      });
    },
  });
}

export default useLikePost;
