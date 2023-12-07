import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const SendOTPForm = ({ phoneNumber, onChange, submitHandler, isPending }) => {
   return (
      <div>
         <form
            className="space-y-4"
            onSubmit={submitHandler}>
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
