import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalsServices";

const useChangeProposalStatus = () => {
   const { mutateAsync: changeProposalStatus, isPending: isChanging } =
      useMutation({
         mutationFn: changeProposalStatusApi,
         onSuccess: ({ message }) => toast.success(message),
         onError: (err) => toast.error(err?.response?.data?.message),
      });

   return { changeProposalStatus, isChanging };
};

export default useChangeProposalStatus;
