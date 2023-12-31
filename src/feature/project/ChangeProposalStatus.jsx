import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";

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

const ChangeProposalStatus = ({ proposalId, onClose }) => {
   const queryClient = useQueryClient();

   const { id: projectId } = useParams();

   const { register, handleSubmit } = useForm();

   const { changeProposalStatus, isChanging } = useChangeProposalStatus();

   const onSubmit = (data) => {
      changeProposalStatus(
         { proposalId, projectId, ...data },
         {
            onSuccess: () => {
               onClose();
               queryClient.invalidateQueries({
                  queryKey: ["get-project", projectId],
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

export default ChangeProposalStatus;
