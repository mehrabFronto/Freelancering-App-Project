import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProject } from "../../services/projectsServices";

const useCreateProject = () => {
   const queryClient = useQueryClient();

   const { mutateAsync: createNewProject, isPending: isCreating } = useMutation(
      {
         mutationFn: createProject,
         onSuccess: ({ message }) => {
            queryClient.invalidateQueries({
               queryKey: ["get-owner-projects"],
            });

            toast.success(message);
         },
         onError: (err) => {
            toast.error(err?.response?.data?.message);
         },
      },
   );

   return { createNewProject, isCreating };
};

export default useCreateProject;
