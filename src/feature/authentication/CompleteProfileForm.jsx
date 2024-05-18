import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { completeProfile } from "../../services/authServices";
import Loading from "../../ui/Loading";
import RadioInputGroup from "../../ui/RadioInputGroup";
import TextField from "../../ui/TextField";
import useAuthorize from "./useAuthorize";

const CompleteProfileForm = () => {
   const navigate = useNavigate();

   const {
      handleSubmit,
      register,
      watch,
      formState: { errors },
   } = useForm();

   const { isPending, mutateAsync } = useMutation({
      mutationFn: completeProfile,
   });

   const submitHandler = async (data) => {
      try {
         const { message, user } = await mutateAsync(data);
         toast.success(message);
         if (user.status !== 2) {
            navigate("/");
            toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
            return;
         }
         if (user.role === "FREELANCER") return navigate("/freelancer");
         if (user.role === "OWNER") return navigate("/owner");
         if (user.role === "ADMIN") return navigate("/admin");
      } catch (err) {
         toast.error(err?.response?.data?.message);
      }
   };

   const { user } = useAuthorize();

   useEffect(() => {
      if(user){
         if (user.isActive) navigate("/", { replace: true });
      }
   }, [user, navigate]);

   return (
      <div className="flex flex-col items-center gap-y-8">
         <h1 className="text-3xl font-bold text-secondary-700">
            تکمیل اطلاعات
         </h1>
         <form
            className="space-y-8 w-full"
            onSubmit={handleSubmit(submitHandler)}>
            <TextField
               register={register}
               name="name"
               label="نام و نام خانوادگی"
               required={true}
               validationSchema={{
                  required: "نام و نام خانوادگی ضروری است",
                  minLength: {
                     value: 6,
                     message: "نام و نام خانوادگی باید بیشتر از 6 حرف باشد",
                  },
                  maxLength: {
                     value: 30,
                     message: "نام و نام خانوادگی باید کمتر از 30 حرف باشد",
                  },
               }}
               errors={errors}
            />
            <TextField
               register={register}
               name="email"
               label="ایمیل"
               required={true}
               validationSchema={{
                  required: "ایمیل ضروری است",
                  pattern: {
                     message: "ایمیل نامعتبر است",
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
               }}
               errors={errors}
            />

            <RadioInputGroup
               errors={errors}
               register={register}
               watch={watch}
               configs={{
                  name: "role",
                  validationSchema: {
                     required: "انتخاب نقش ضروری است",
                  },
                  options: [
                     { value: "FREELANCER", label: "فریلنسر" },
                     { value: "OWNER", label: "کارفرما" },
                  ],
               }}
            />

            {isPending ? (
               <Loading />
            ) : (
               <button className="btn btn--primary w-full">تایید</button>
            )}
         </form>
      </div>
   );
};

export default CompleteProfileForm;
