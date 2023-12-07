import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiArrowLeft } from "react-icons/hi";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "../../services/authServices";
import Loading from "../../ui/Loading";
import { toPersianDigits } from "../../utils/toPersianDigits";

const RESEND_TIME = 90;

const CheckOTPForm = ({ phoneNumber, onBack, onReSendOtp, isSendingOtp }) => {
   const navigate = useNavigate();

   const [otp, setOTP] = useState("");
   const [time, setTime] = useState(RESEND_TIME);

   const { isPending: isCheckingOtp, mutateAsync } = useMutation({
      mutationFn: checkOtp,
   });

   const checkOtpHandler = async (e) => {
      e.preventDefault();
      try {
         const { message, user } = await mutateAsync({ phoneNumber, otp });
         toast.success(message);
         if (user.isActive) {
            // push to panel based on role
         } else {
            navigate("/complete-profile");
         }
      } catch (err) {
         toast.error(err?.response?.data?.message);
      }
   };

   useEffect(() => {
      const timer =
         time > 0 &&
         setInterval(() => {
            setTime((t) => t - 1);
         }, 1000);

      return () => {
         if (timer) clearInterval(timer);
      };
   }, [time]);

   return (
      <div>
         <form
            className="space-y-8"
            onSubmit={checkOtpHandler}>
            {/* header */}
            <div className="flex items-center justify-between">
               <p className="font-bold text-secondary-800 text-xl">
                  کد تایید را وارد کنید
               </p>
               <button onClick={onBack}>
                  <HiArrowLeft className="w-5 h-5 text-secondary-500" />
               </button>
            </div>

            {/* OTP input */}
            <OTPInput
               value={otp}
               onChange={setOTP}
               numInputs={6}
               renderSeparator={<span className="px-2"></span>}
               renderInput={(props) => <input {...props} />}
               inputStyle={{
                  width: "2.2rem",
                  height: "2.5rem",
                  padding: "0.5rem 0.2rem",
                  border: "2px solid rgb(var(--color-primary-600))",
                  borderRadius: "0.5rem",
               }}
               containerStyle={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1e293b",
                  marginBottom: "30px",
               }}
               shouldAutoFocus={true}
            />

            {/* button */}
            {isCheckingOtp ? (
               <Loading />
            ) : (
               <button className="btn btn--primary w-full">تایید</button>
            )}

            {/* Resend message */}
            <div className="flex flex-col gap-y-2 items-center justify-center">
               <p className="text-secondary-900">
                  کد تایید برای شماره موبایل {toPersianDigits(phoneNumber)}{" "}
                  ارسال گردید.
               </p>

               {time > 0 ? (
                  <p className="text-secondary-500">
                     {toPersianDigits(time)} ثانیه تا ارسال مجدد کد{" "}
                  </p>
               ) : (
                  <button
                     onClick={onReSendOtp}
                     className="text-primary-900 p-2">
                     {isSendingOtp ? (
                        <Loading
                           width="45"
                           height="45"
                        />
                     ) : (
                        "ارسال مجدد کد"
                     )}
                  </button>
               )}
            </div>
         </form>
      </div>
   );
};

export default CheckOTPForm;
