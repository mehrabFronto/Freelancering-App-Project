import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

const AuthContainer = () => {
   const [step, setStep] = useState(1);
   const [phoneNumber, setPhoneNumber] = useState("");

   return step === 1 ? (
      <SendOTPForm
         setStep={setStep}
         phoneNumber={phoneNumber}
         onChange={(e) => setPhoneNumber(e.target.value)}
      />
   ) : (
      <CheckOTPForm />
   );
};

export default AuthContainer;

//* steps:
// 1. Send OTP
// 2. Check OTP
