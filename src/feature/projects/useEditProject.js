import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editProjectApi } from "../../services/projectsServices";

const useEditProject = () => {
   const queryClient = useQueryClient();

   const { mutateAsync: editProject, isPending: isEditing } = useMutation({
      mutationFn: editProjectApi,
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

   return { editProject, isEditing };
};

export default useEditProject;
