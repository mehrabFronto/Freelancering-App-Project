import { useState } from "react";
import TextField from "../../ui/TextField";

const SendOTPForm = () => {
   const [phoneNumber, setPhoneNumber] = useState("");
   return (
      <div>
         <form className="space-y-4">
            <TextField
               value={phoneNumber}
               onChange={(e) => setPhoneNumber(e.target.value)}
               name="phoneNumber"
               label="شماره موبایل"
            />
            <button className="btn btn--primary w-full">ارسال کد تایید</button>
         </form>
      </div>
   );
};

export default SendOTPForm;
