import UserAvatar from "../feature/authentication/UserAvatar";
import useUser from "../hooks/useUser";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
   const { isPending: isLoading } = useUser();

   return (
      <div className="bg-secondary-50 py-4 px-8 border-b border-secondary-300">
         <div
            className={`container xl:max-w-screen-xl flex items-center justify-end gap-x-8
            ${isLoading ? "blur-sm opacity-50" : ""}`}>
            <UserAvatar />
            <HeaderMenu />
         </div>
      </div>
   );
};

export default Header;
