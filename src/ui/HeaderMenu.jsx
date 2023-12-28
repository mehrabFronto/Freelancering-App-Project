import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logout from "../feature/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

const HeaderMenu = () => {
   return (
      <ul className="flex items-center gap-x-4">
         <li className="flex">
            <Link to="dashboard">
               <HiOutlineUser className="w- h-5 text-primary-900" />
            </Link>
         </li>
         <li className="flex">
            <DarkModeToggle />
         </li>
         <li className="flex">
            <Logout />
         </li>
      </ul>
   );
};

export default HeaderMenu;
