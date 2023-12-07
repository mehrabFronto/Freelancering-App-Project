import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authServices";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

const AuthContainer = () => {
   const [step, setStep] = useState(1);
   const [phoneNumber, setPhoneNumber] = useState("");

   const { isPending: isSendingOtp, mutateAsync } = useMutation({
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

   return step === 1 ? (
      <SendOTPForm
         phoneNumber={phoneNumber}
         onChange={(e) => setPhoneNumber(e.target.value)}
         submitHandler={sendOtpHandler}
         isPending={isSendingOtp}
      />
   ) : (
      <CheckOTPForm
         phoneNumber={phoneNumber}
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
