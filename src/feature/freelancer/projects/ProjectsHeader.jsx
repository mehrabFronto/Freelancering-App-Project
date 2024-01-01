import useCategories from "../../../hooks/useCategories";
import FilterDropDown from "../../../ui/FilterDropDown";

const ProjectsHeader = () => {
   const { transformedCategories } = useCategories();

   return (
      <div className="flex items-center justify-between text-secondary-700 mb-8">
         <h1 className="text-lg font-bold">لیست پروژه ها</h1>
         <div className="flex items-center gap-8">
            {/* category filter */}
            <FilterDropDown
               options={[
                  {
                     value: "ALL",
                     label: "همه",
                  },
                  ...transformedCategories,
               ]}
               filterField="category"
            />
         </div>
      </div>
   );
};

export default ProjectsHeader;
