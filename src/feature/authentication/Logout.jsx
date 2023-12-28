import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Loading from "../../ui/Loading";
import useLogout from "./useLogout";

const Logout = () => {
   const { isPending, logoutUser } = useLogout();

   return isPending ? (
      <Loading />
   ) : (
      <button
         onClick={logoutUser}
         className="flex items-center justify-center">
         <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500 hover:text-error" />
      </button>
   );
};

export default Logout;
