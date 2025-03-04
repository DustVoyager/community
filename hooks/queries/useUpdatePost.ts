import { updatePost } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKyes } from "@/constants";
import { useMutation } from "@tanstack/react-query";

function useUpdatePost() {
  return useMutation({
    mutationFn: updatePost,
    onSuccess: (postId) => {
      queryClient.invalidateQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POST, postId],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POSTS],
      });
    },
  });
}

export default useUpdatePost;
