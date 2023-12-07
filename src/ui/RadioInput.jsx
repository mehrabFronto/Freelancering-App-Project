const RadioInput = ({ id, name, checked, value, onChange, label }) => {
   return (
      <div className="flex items-center justify-center">
         <input
            type="radio"
            name={name}
            id={id}
            checked={checked}
            value={value}
            onChange={onChange}
            className="cursor-pointer form-radio rounded-full border-2 border-secondary-400 bg-transparent
            w-4 h-4 checked:text-primary-900 ml-2"
         />
         <label htmlFor={id}>{label}</label>
      </div>
   );
};

export default RadioInput;
