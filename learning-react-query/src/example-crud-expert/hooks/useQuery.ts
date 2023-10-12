import { useQuery } from "react-query";
import { useExpertStore } from "../stores/expert";
import { useNotificationStores } from "../stores/notification";
import { Expert } from "../interfaces/expert";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../constants/keyQuery";
import { getData } from "../helpers/APIRequest";
import { EXPERT_URL } from "../constants/url";

export const useExperts = () => {
  const { setExperts } = useExpertStore();
  const { setMessageError } = useNotificationStores();

  return useQuery<Expert[], AxiosError>({
    queryKey: [QUERY_KEYS.EXPERTS],
    queryFn: () => getData(EXPERT_URL),
    onSuccess: (data) => setExperts(data),
    onError: (error) => setMessageError(error.message),
  });
};
