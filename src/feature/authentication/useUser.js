import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authServices";

const useUser = () => {
   const { data, isLoading } = useQuery({
      queryKey: ["get-user"],
      queryFn: getUser,
      retry: false,
   });

   const { user } = data || {};

   return { user, isLoading };
};

export default useUser;
