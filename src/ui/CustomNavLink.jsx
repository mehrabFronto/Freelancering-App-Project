import { NavLink } from "react-router-dom";

const CustomNavLink = ({ children, to }) => {
   const navLinkClasses =
      "flex items-center gap-x-2 p-3 rounded-xl hover:bg-primary-200/80 transition-all";

   return (
      <li>
         <NavLink
            className={({ isActive }) =>
               isActive
                  ? `bg-primary-200/80 text-primary-900 fill-primary-900 ${navLinkClasses}`
                  : ` ${navLinkClasses} text-secondary-600`
            }
            to={to}>
            {children}
         </NavLink>
      </li>
   );
};

export default CustomNavLink;
