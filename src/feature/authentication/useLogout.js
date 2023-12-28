import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logoutUserApi } from "../../services/authServices";

export default function useLogout() {
   const navigate = useNavigate();
   const queryClient = useQueryClient();

   const { mutateAsync: logoutUser, isPending } = useMutation({
      mutationFn: logoutUserApi,
      onSuccess: () => {
         queryClient.removeQueries();
         navigate("/", { replace: true });
      },
   });

   return { logoutUser, isPending };
}
