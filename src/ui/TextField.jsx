const TextField = ({ value, onChange, name, label, type = "text" }) => {
   const placeholder = "..." + label;

   return (
      <div>
         <label
            htmlFor={name}
            className="mb-2 block text-lg font-bold">
            {label}
         </label>
         <input
            value={value}
            onChange={onChange}
            type={type}
            id={name}
            name={name}
            className="textField__input"
            autoComplete="off"
            placeholder={placeholder}
            dir="auto"
         />
      </div>
   );
};

export default TextField;
