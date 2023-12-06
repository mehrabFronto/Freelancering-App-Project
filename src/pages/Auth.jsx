import CheckOTPForm from "../feature/authentication/CheckOTPForm";

const Auth = () => {
   return (
      <div className="w-full container p-4 h-screen sm:max-w-sm">
         {/* <SendOTPForm /> */}
         <CheckOTPForm />
      </div>
   );
};

export default Auth;

//* steps:
// 1. Send OTP
// 2. Check OTP
