import { useMutation, useQueryClient } from "react-query";
import { postData } from "../helpers/APIRequest";
import { QUERY_KEYS } from "../constants/keyQuery";
import { EXPERT_URL } from "../constants/url";

export const useMutationPostExpert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (expert) => postData(EXPERT_URL, expert),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EXPERTS] });
    },
  });
};