import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../contexts/DarkModeContext";

const DarkModeToggle = () => {
   const { toggleDarkMode, isDarkMode } = useDarkMode();

   return (
      <div>
         <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center">
            {isDarkMode ? (
               <HiOutlineMoon className="w-5 h-5 text-primary-900" />
            ) : (
               <HiOutlineSun className="w-5 h-5 text-primary-900" />
            )}
         </button>
      </div>
   );
};

export default DarkModeToggle;
