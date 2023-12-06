import { useState } from "react";
import OTPInput from "react-otp-input";

const CheckOTPForm = () => {
   const [otp, setOTP] = useState("");

   return (
      <div>
         <form className="space-y-10">
            <p className="font-bold text-secondary-800 text-xl">
               کد تایید را وارد کنید
            </p>
            <OTPInput
               value={otp}
               onChange={setOTP}
               numInputs={6}
               renderInput={(props) => (
                  <input
                     type="number "
                     {...props}
                  />
               )}
               renderSeparator={<span> - </span>}
               containerStyle="flex flex-row-reverse gap-x-2 justify-center"
               inputStyle={{
                  width: "2.5rem",
                  padding: "0.5rem 0.2rem",
                  border: "2px solid rgb(var(--color-primary-300))",
                  borderRadius: "0.5rem",
               }}
            />
            <button className="btn btn--primary w-full">تایید</button>
         </form>
      </div>
   );
};

export default CheckOTPForm;
