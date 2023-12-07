import { useState } from "react";
import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";

const CompleteProfileForm = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [role, setRole] = useState("freelancer");

   return (
      <div>
         <form className="space-y-8">
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
            />

            <div className="flex items-center justify-center gap-x-8">
               <RadioInput
                  name="role"
                  id="freelancer"
                  label="فریلنسر"
                  value="freelancer"
                  checked={role === "freelancer"}
                  onChange={(e) => setRole(e.target.value)}
               />
               <RadioInput
                  name="role"
                  id="owner"
                  label="کارفرما"
                  value="owner"
                  checked={role === "owner"}
                  onChange={(e) => setRole(e.target.value)}
               />
            </div>

            <button className="btn btn--primary w-full">تایید</button>
         </form>
      </div>
   );
};

export default CompleteProfileForm;
