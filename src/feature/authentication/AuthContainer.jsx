import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getOtp } from "../../services/authServices";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import useAuthorize from "./useAuthorize";

const AuthContainer = () => {
   const [step, setStep] = useState(1);
   // const [phoneNumber, setPhoneNumber] = useState("");
   const { register, getValues, handleSubmit } = useForm();

   const { isPending: isSendingOtp, mutateAsync } = useMutation({
      mutationFn: getOtp,
   });

   const sendOtpHandler = async (data) => {
      try {
         const { message } = await mutateAsync(data);
         toast.success(message);
      } catch (err) {
         toast.error(err?.response?.data?.message);
         setStep(2);
      }
   };

   const navigate = useNavigate();

   const { isAuthenticated } = useAuthorize();

   useEffect(() => {
      if (isAuthenticated) navigate("/", { replace: true });
   }, [isAuthenticated, navigate]);

   return step === 1 ? (
      <SendOTPForm
         register={register}
         submitHandler={handleSubmit(sendOtpHandler)}
         isPending={isSendingOtp}
      />
   ) : (
      <CheckOTPForm
         phoneNumber={getValues("phoneNumber")}
         onBack={() => setStep(1)}
         onReSendOtp={sendOtpHandler}
         isSendingOtp={isSendingOtp}
      />
   );
};

export default AuthContainer;

//* steps:
// 1. Send OTP
// 2. Check OTP
