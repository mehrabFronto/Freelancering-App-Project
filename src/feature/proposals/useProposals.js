import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalsServices";

export default function useProposals() {
   const { isLoading, data } = useQuery({
      queryKey: ["get-proposals"],
      queryFn: getProposalsApi,
   });

   const { proposals } = data || {};

   return { isLoading, proposals };
}
