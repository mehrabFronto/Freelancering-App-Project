import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeOwnerProject } from "../../services/projectsServices";

export default function useRemoveProject() {
   const queryClient = useQueryClient();

   const { mutateAsync: removeProject, isPending: isRemoving } = useMutation({
      mutationFn: removeOwnerProject,
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

   return { removeProject, isRemoving };
}
