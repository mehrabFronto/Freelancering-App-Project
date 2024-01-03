import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Loading from "../../../ui/Loading";
import RHFSelect from "../../../ui/RHFSelect";
import useChangeUserStatus from "./useChangeUSerStatus";

const options = [
   {
      label: "رد شده",
      value: 0,
   },
   {
      label: "در انتظار تایید",
      value: 1,
   },
   {
      label: "تایید شده",
      value: 2,
   },
];

const ChangeUserStatus = ({ userId, onClose }) => {
   const { register, handleSubmit } = useForm();

   const queryClient = useQueryClient();
   const { changeUserStatus, isChanging } = useChangeUserStatus();

   const onSubmit = (data) => {
      changeUserStatus(
         { userId, data },
         {
            onSuccess: () => {
               onClose();
               queryClient.invalidateQueries({
                  queryKey: ["get-users"],
               });
            },
         },
      );
   };

   return (
      <div>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-10">
            <RHFSelect
               name="status"
               label="تغییر وضعیت"
               register={register}
               required
               options={options}
            />
            {isChanging ? (
               <Loading />
            ) : (
               <button
                  type="submit"
                  className="btn btn--primary w-full">
                  تایید
               </button>
            )}
         </form>
      </div>
   );
};

export default ChangeUserStatus;
