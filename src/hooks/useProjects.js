import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectsServices";

export default function useProjects() {
   const { data, isLoading } = useQuery({
      queryKey: ["get-projects"],
      queryFn: getProjectsApi,
   });

   const { projects } = data || [];

   return { projects, isLoading };
}
