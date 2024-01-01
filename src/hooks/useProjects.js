import { useQuery } from "@tanstack/react-query";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getProjectsApi } from "../services/projectsServices";

export default function useProjects() {
   const { search } = useLocation();
   const queryObject = queryString.parse(search);

   const { data, isLoading } = useQuery({
      queryKey: ["get-projects", queryObject],
      queryFn: () => getProjectsApi(search),
   });

   const { projects } = data || [];

   return { projects, isLoading };
}
