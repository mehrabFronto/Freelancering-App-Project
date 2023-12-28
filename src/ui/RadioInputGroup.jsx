import RadioInput from "./RadioInput";

const RadioInputGroup = ({ errors, register, watch, configs }) => {
   const { name, validationSchema = {}, options } = configs;

   return (
      <div className="flex flex-col items-center gap-y-2">
         <div className="flex items-center justify-center gap-x-8">
            {options.map(({ label, value }) => (
               <RadioInput
                  key={value}
                  name={name}
                  value={value}
                  label={label}
                  watch={watch}
                  register={register}
                  required={true}
                  validationSchema={validationSchema}
               />
            ))}
         </div>

         {errors && errors["role"] && (
            <span className="text-error block text-sm mt-2">
               {errors["role"]?.message}
            </span>
         )}
      </div>
   );
};

export default RadioInputGroup;
