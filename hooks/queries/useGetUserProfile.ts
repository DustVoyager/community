import { getUserProfile } from "@/api/auth";
import { queryKyes } from "@/constants";
import { useQuery } from "@tanstack/react-query";

function useGetUserProfile(id: number) {
  return useQuery({
    queryFn: () => getUserProfile(id),
    queryKey: [queryKyes.AUTH, queryKyes.GET_USER_PROFILE, id],
  });
}

export default useGetUserProfile;
