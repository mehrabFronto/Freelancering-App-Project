const TextField = ({
   register,
   name,
   label,
   type = "text",
   required,
   validationSchema,
   errors,
}) => {
   const placeholder = "..." + label;

   return (
      <div>
         <label
            htmlFor={name}
            className="mb-2 block text-base font-bold text-secondary-700">
            {label} {required && <span className="text-error">*</span>}
         </label>
         <input
            {...register(name, validationSchema)}
            type={type}
            id={name}
            className="textField__input"
            autoComplete="off"
            placeholder={placeholder}
            dir="auto"
         />
         {errors && errors[name] && (
            <span className="text-error block text-sm mt-2">
               {errors[name]?.message}
            </span>
         )}
      </div>
   );
};

export default TextField;
