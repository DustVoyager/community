import AuthRoute from "@/components/AuthRoute";
import useGetPost from "@/hooks/queries/useGetPost";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const { data: post, isPending, isError } = useGetPost(Number(id));

  if (isPending || isError) {
    return <></>;
  }
  return <AuthRoute></AuthRoute>;
}
