import { HiOutlineSun } from "react-icons/hi";

const DarkModeToggle = () => {
   return (
      <div>
         <button className="flex items-center justify-center">
            <HiOutlineSun className="w-5 h-5 text-primary-900" />
         </button>
      </div>
   );
};

export default DarkModeToggle;
