import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUser";

const Dashboard = () => {
   const { isLoading: isLoadingProjects, projects } = useProjects();
   const { isLoading: isLoadingProposals, proposals } = useProposals();
   const { isLoading: isLoadingUsers, users } = useUsers();

   if (isLoadingProjects || isLoadingProposals || isLoadingUsers)
      return <Loading />;

   return (
      <div>
         <DashboardHeader />
         <Stats
            numOfProjects={projects.length}
            numOfProposals={proposals.length}
            numOfUsers={users.length}
         />
      </div>
   );
};

export default Dashboard;
