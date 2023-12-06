import SendOTPForm from "../feature/authentication/SendOTPForm";

const Auth = () => {
   return (
      <div className="w-full container p-4 h-screen sm:max-w-sm">
         <SendOTPForm />
      </div>
   );
};

export default Auth;

//* steps:
// 1. Send OTP
// 2. Check OTP
