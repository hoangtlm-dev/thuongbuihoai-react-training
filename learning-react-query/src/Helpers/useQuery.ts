import { useQuery } from "react-query";
import { fetchUsers } from "../Components/MutateSideEffect";

export const fetchData = () => {
  return useQuery({
    queryKey: 'experts',
    queryFn: () => fetchUsers(),
  });
};