import useUser from "./useUser";

const UserAvatar = () => {
   const { user } = useUser();

   return (
      <div className="flex items-center gap-x-2 text-secondary-600">
         <img
            src="/user.jpg"
            alt="user-account"
            className="w-7 h-7 rounded-full object-cover object-center"
         />
         <span className="text-sm">{user?.name}</span>
      </div>
   );
};

export default UserAvatar;
