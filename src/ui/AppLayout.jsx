import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
   return (
      <div className="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr] h-screen">
         <Header />
         <Sidebar />
         <div className="bg-green-300 pb-8 overflow-y-auto">
            <div className="mx-auto max-w-screen-md bg-secondary-0">
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default AppLayout;
