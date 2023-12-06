import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authServices";
import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const SendOTPForm = ({ setStep, phoneNumber, onChange }) => {
   const { data, error, isPending, mutateAsync } = useMutation({
      mutationFn: getOtp,
   });

   const sendOtpHandler = async (e) => {
      e.preventDefault();

      try {
         const { message } = await mutateAsync({ phoneNumber });
         toast.success(message);
      } catch (err) {
         toast.error(err?.response?.data?.message);
         setStep(2);
      }
   };

   return (
      <div>
         <form
            className="space-y-4"
            onSubmit={sendOtpHandler}>
            <TextField
               value={phoneNumber}
               onChange={onChange}
               name="phoneNumber"
               label="شماره موبایل"
            />
            {isPending ? (
               <Loading />
            ) : (
               <button className="btn btn--primary w-full">
                  ارسال کد تایید
               </button>
            )}
         </form>
      </div>
   );
};

export default SendOTPForm;
