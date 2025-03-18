import { createVote } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKyes } from "@/constants";
import { useMutation } from "@tanstack/react-query";

function useCreateVote() {
  return useMutation({
    mutationFn: createVote,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POST, data.postId],
      });
    },
  });
}

export default useCreateVote;
