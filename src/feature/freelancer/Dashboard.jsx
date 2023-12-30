import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";

const Dashboard = () => {
   const { proposals, isLoading } = useProposals();

   return isLoading ? (
      <Loading />
   ) : (
      <div>
         <DashboardHeader />
         <Stats proposals={proposals} />
      </div>
   );
};

export default Dashboard;
