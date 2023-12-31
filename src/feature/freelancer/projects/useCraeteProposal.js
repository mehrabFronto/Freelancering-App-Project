import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createNewProposalApi } from "../../../services/proposalsServices";

const useCreateProposal = () => {
   const queryClient = useQueryClient();

   const { mutateAsync: createNewProposal, isPending: isCreating } =
      useMutation({
         mutationFn: createNewProposalApi,
         onSuccess: ({ message }) => {
            queryClient.invalidateQueries({
               queryKey: ["get-proposals"],
            });

            toast.success(message);
         },
         onError: (err) => {
            toast.error(err?.response?.data?.message);
         },
      });

   return { createNewProposal, isCreating };
};

export default useCreateProposal;
