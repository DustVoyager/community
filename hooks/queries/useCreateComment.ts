import { createComment } from "@/api/comment";
import queryClient from "@/api/queryClient";
import { queryKyes } from "@/constants";
import { useMutation } from "@tanstack/react-query";

function useCreateComment() {
  return useMutation({
    mutationFn: createComment,
    onSuccess: (postId: number) => {
      queryClient.invalidateQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POST, postId],
      });
    },
  });
}

export default useCreateComment;
