const RHFSelect = ({ label, name, register, options, required }) => {
   return (
      <div>
         <label
            htmlFor={name}
            className="mb-2 block text-base font-bold text-secondary-700">
            {label} {required && <span className="text-error">*</span>}
         </label>
         <select
            {...register(name)}
            className="textField__input py-2.5"
            id={name}>
            {options.map(({ value, label }) => (
               <option
                  key={value}
                  value={value}>
                  {label}
               </option>
            ))}
         </select>
      </div>
   );
};

export default RHFSelect;
