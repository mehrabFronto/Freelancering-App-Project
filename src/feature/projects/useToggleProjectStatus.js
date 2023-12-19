import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { toggleProjectStatusApi } from "../../services/projectsServices";

const useToggleProjectStatus = () => {
   const queryClient = useQueryClient();

   const { mutateAsync: toggleProjectStatus, isPending: isToggling } =
      useMutation({
         mutationFn: toggleProjectStatusApi,
         onSuccess: ({ message }) => {
            queryClient.invalidateQueries({
               queryKey: ["get-owner-projects"],
            });

            toast.success(message);
         },
         onError: (err) => {
            toast.error(err?.response?.data?.message);
         },
      });

   return { toggleProjectStatus, isToggling };
};

export default useToggleProjectStatus;
