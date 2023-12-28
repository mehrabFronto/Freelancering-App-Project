const RadioInput = ({
   name,
   value,
   label,
   watch,
   register,
   required,
   validationSchema,
}) => {
   return (
      <div className="flex items-center justify-center">
         <input
            type="radio"
            name={name}
            id={value}
            checked={watch(name) === value}
            value={value}
            {...register(name, validationSchema)}
            className="cursor-pointer form-radio rounded-full border-2 border-secondary-400 bg-transparent
            w-4 h-4 checked:text-primary-900 ml-2"
         />
         <label htmlFor={value}>
            {label} {required && <span className="text-error">*</span>}
         </label>
      </div>
   );
};

export default RadioInput;
