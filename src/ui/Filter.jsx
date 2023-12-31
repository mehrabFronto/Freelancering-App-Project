import { useSearchParams } from "react-router-dom";

const Filter = ({ options, filterField }) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const currentValue = searchParams.get(filterField) || options.at(0).value;

   return (
      <div className="flex items-center gap-x-2 text-xs">
         <span>وضعیت</span>
         <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg">
            {options.map(({ value, label }) => {
               const isActive = currentValue === value;
               return (
                  <button
                     key={value}
                     disabled={isActive}
                     onClick={() => {
                        searchParams.set(filterField, value);
                        setSearchParams(searchParams);
                     }}
                     className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300
                     ${
                        isActive
                           ? "!bg-primary-900 text-white"
                           : "bg-secondary-0 text-secondary-800"
                     }`}>
                     {label}
                  </button>
               );
            })}
         </div>
      </div>
   );
};

export default Filter;
