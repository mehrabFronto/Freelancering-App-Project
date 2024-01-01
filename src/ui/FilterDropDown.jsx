import { useSearchParams } from "react-router-dom";
import Select from "./Select";

const FilterDropDown = ({ options, filterField }) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const filterValue = searchParams.get(filterField) || options.at(0).value;

   const changeHandler = (e) => {
      searchParams.set(filterField, e.target.value);
      setSearchParams(searchParams);
   };

   return (
      <Select
         value={filterValue}
         onChange={changeHandler}
         options={options}
      />
   );
};

export default FilterDropDown;
