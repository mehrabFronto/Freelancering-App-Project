const TextField = ({ value, onChange, name, label }) => {
   return (
      <div>
         <label
            htmlFor={name}
            className="mb-2 block text-xl">
            {label}
         </label>
         <input
            value={value}
            onChange={onChange}
            type="text"
            id={name}
            name={name}
            className="textField__input"
            autoComplete="off"
            placeholder={`${label}...`}
         />
      </div>
   );
};

export default TextField;
