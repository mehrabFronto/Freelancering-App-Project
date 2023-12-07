import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { completeProfile } from "../../services/authServices";
import Loading from "../../ui/Loading";
import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";

const CompleteProfileForm = () => {
   const navigate = useNavigate();

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [role, setRole] = useState("FREELANCER");

   const { isPending, mutateAsync } = useMutation({
      mutationFn: completeProfile,
   });

   const submitHandler = async (e) => {
      e.preventDefault();

      try {
         const { message, user } = await mutateAsync({ name, email, role });
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

      console.log({ name, email, role });
   };

   return (
      <div>
         <form
            className="space-y-8"
            onSubmit={submitHandler}>
            <TextField
               value={name}
               onChange={(e) => setName(e.target.value)}
               name="name"
               label="نام و نام خانوادگی"
            />
            <TextField
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               name="email"
               label="ایمیل"
               type="email"
            />

            <div className="flex items-center justify-center gap-x-8">
               <RadioInput
                  name="role"
                  id="FREELANCER"
                  label="فریلنسر"
                  value="FREELANCER"
                  checked={role === "FREELANCER"}
                  onChange={(e) => setRole(e.target.value)}
               />
               <RadioInput
                  name="role"
                  id="OWNER"
                  label="کارفرما"
                  value="OWNER"
                  checked={role === "OWNER"}
                  onChange={(e) => setRole(e.target.value)}
               />
            </div>

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
