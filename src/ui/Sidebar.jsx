import { HiOutlineCollection } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
   return (
      <div className="bg-secondary-50 row-start-1 row-span-2 border-l border-secondary-300">
         <ul className="text-secondary-900 p-2 space-y-2">
            <li>
               <CustomNavLink to="/owner/dashboard">
                  <RxDashboard className="w-5 h-5" />
                  <span className="text-xl">داشبورد</span>
               </CustomNavLink>
            </li>
            <li>
               <CustomNavLink to="/owner/projects">
                  <HiOutlineCollection className="w-5 h-5" />
                  <span className="text-xl">پروژه ها</span>
               </CustomNavLink>
            </li>
         </ul>
      </div>
   );
};

export default Sidebar;

const CustomNavLink = ({ children, to }) => {
   const navLinkClasses =
      "flex items-center gap-x-2 p-3 rounded-xl hover:bg-primary-200/80 transition-all";

   return (
      <NavLink
         className={({ isActive }) =>
            isActive
               ? `bg-primary-200/80 text-primary-900 fill-primary-900 ${navLinkClasses}`
               : ` ${navLinkClasses} text-secondary-600`
         }
         to={to}>
         {children}
      </NavLink>
   );
};
