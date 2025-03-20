import { likePost } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKyes } from "@/constants";
import { Post, Profile } from "@/types";
import { useMutation } from "@tanstack/react-query";

function useLikePost() {
  return useMutation({
    mutationFn: likePost,
    onMutate: async (postId) => {
      await queryClient.cancelQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POST, postId],
      });

      const user = queryClient.getQueryData<Profile>([
        queryKyes.AUTH,
        queryKyes.GET_ME,
      ]);
      const userId = Number(user?.id);
      const previousPost = queryClient.getQueryData<Post>([
        queryKyes.POST,
        queryKyes.GET_POST,
        postId,
      ]);
      const newPost = { ...previousPost };
      const likedIndex =
        previousPost?.likes.findIndex((like) => like.userId === userId) ?? -1;

      likedIndex >= 0
        ? newPost.likes?.splice(likedIndex, 1)
        : newPost.likes?.push({ userId });

      queryClient.setQueryData(
        [queryKyes.POST, queryKyes.GET_POST, postId],
        newPost
      );
      return { previousPost, newPost };
    },
    onError: (err, newPost, context) => {
      queryClient.setQueryData(
        [queryKyes.POST, queryKyes.GET_POST, context?.previousPost.id],
        context?.previousPost
      );
    },
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POST, variables],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKyes.POST, queryKyes.GET_POSTS],
      });
    },
  });
}

export default useLikePost;
