import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/authServices";

const useUser = () => {
   const { data, isPending } = useQuery({
      queryKey: ["get-user"],
      queryFn: getUser,
      retry: false,
   });

   const { user } = data || {};

   return { user, isPending };
};

export default useUser;
