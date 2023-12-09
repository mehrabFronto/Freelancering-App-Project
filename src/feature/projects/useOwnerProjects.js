import { useQuery } from "@tanstack/react-query";
import { getOwnerProjects } from "../../services/projectsServices";

export default function useOwnerProjects() {
   const { data, isLoading } = useQuery({
      queryKey: ["get-owner-projects"],
      queryFn: getOwnerProjects,
   });

   const { projects } = data || [];

   return { projects, isLoading };
}
