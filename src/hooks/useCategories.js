import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/categoriesServices";

const useCategories = () => {
   const { data, isLoading } = useQuery({
      queryKey: ["get-categories"],
      queryFn: getCategories,
   });

   const { categories: rawCategories = [] } = data || [];

   const categories = rawCategories.map((category) => ({
      value: category._id,
      label: category.title,
   }));

   const transformedCategories = rawCategories.map((category) => ({
      value: category.englishTitle,
      label: category.title,
   }));

   return { isLoading, categories, transformedCategories };
};

export default useCategories;
