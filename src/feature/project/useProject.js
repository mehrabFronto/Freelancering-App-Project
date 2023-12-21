import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProjectApi } from "../../services/projectsServices";

export default function useProject() {
   const { id } = useParams();

   const { data, isLoading } = useQuery({
      queryKey: ["get-project", id],
      queryFn: () => getProjectApi(id),
      retry: false,
   });

   const { project } = data || [];

   return { project, isLoading };
}
