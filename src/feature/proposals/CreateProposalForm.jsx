import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";
import useCreateProposal from "../freelancer/projects/useCraeteProposal";

const CreateProposalForm = ({ onClose, projectId }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const { createNewProposal, isCreating } = useCreateProposal();

   const submitHandler = (data) => {
      createNewProposal(
         { ...data, projectId },
         {
            onSuccess: () => {
               onClose();
               reset();
            },
         },
      );
   };

   return (
      <div>
         <form
            className="space-y-8"
            onSubmit={handleSubmit(submitHandler)}>
            <TextField
               label="توضیحات"
               name="description"
               register={register}
               required={true}
               validationSchema={{
                  required: "توضیحات ضروری است",
                  minLength: {
                     value: 6,
                     message: "توضیحات باید بیشتر از 6 حرف باشد",
                  },
                  maxLength: {
                     value: 60,
                     message: "توضیحات باید کمتر از 60 حرف باشد",
                  },
               }}
               errors={errors}
            />

            <TextField
               label="قیمت"
               name="price"
               register={register}
               required={true}
               validationSchema={{
                  required: "قیمت ضروری است",
                  min: {
                     value: 10000,
                     message: "بودجه باید بیشتر از 10,000 تومان باشد",
                  },
               }}
               errors={errors}
            />

            <TextField
               label="مدت زمان (روز)"
               name="duration"
               register={register}
               required={true}
               validationSchema={{
                  required: "مدت زمان ضروری است",
               }}
               errors={errors}
            />

            {isCreating ? (
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

export default CreateProposalForm;
