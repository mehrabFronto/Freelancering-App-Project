import { HiOutlineCollection } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

const FreelancerLayout = () => {
   return (
      <AppLayout>
         <Sidebar>
            <CustomNavLink to="dashboard">
               <RxDashboard className="w-5 h-5" />
               <span className="text-xl">داشبورد</span>
            </CustomNavLink>

            <CustomNavLink to="proposals">
               <HiOutlineCollection className="w-5 h-5" />
               <span className="text-xl">درخواست ها</span>
            </CustomNavLink>

            <CustomNavLink to="projects">
               <HiOutlineCollection className="w-5 h-5" />
               <span className="text-xl">پروژه ها</span>
            </CustomNavLink>
         </Sidebar>
      </AppLayout>
   );
};

export default FreelancerLayout;
