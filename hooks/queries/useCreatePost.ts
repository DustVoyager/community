import { createPost } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKyes } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

function useCreatePost() {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      router.push("/");
      queryClient.invalidateQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POSTS],
      });
    },
  });
}

export default useCreatePost;
