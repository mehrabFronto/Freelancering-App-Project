import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "../../../services/authServices";

const useChangeUserStatus = () => {
   const { mutateAsync: changeUserStatus, isPending: isChanging } = useMutation(
      {
         mutationFn: changeUserStatusApi,
         onSuccess: ({ message }) => toast.success(message),
         onError: (err) => toast.error(err?.response?.data?.message),
      },
   );

   return { changeUserStatus, isChanging };
};

export default useChangeUserStatus;
