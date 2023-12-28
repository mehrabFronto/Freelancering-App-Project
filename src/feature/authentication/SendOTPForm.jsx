import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const SendOTPForm = ({ register, submitHandler, isPending }) => {
   return (
      <div>
         <form
            className="space-y-4"
            onSubmit={submitHandler}>
            <TextField
               register={register}
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
