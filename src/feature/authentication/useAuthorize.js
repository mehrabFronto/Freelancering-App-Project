import { useLocation } from "react-router-dom";
import useUser from "./useUser";

const useAuthorize = () => {
   const { user, isLoading } = useUser();

   const { pathname } = useLocation();

   //? check if user is authenticated or no

   let isAuthenticated = false;

   if (user) {
      isAuthenticated = true;
   }

   //? check if user is authorized or no

   let isAuthorized = false;

   //! ❌ BAD SOLUTION

   //    if (pathname.includes("owner")) {
   //       if (isAuthenticated && user.role === "OWNER") {
   //          isAuthorized = true;
   //       }
   //    }

   //    if (pathname.includes("freelancer")) {
   //       if (isAuthenticated && user.role === "FREELANCER") {
   //          isAuthorized = true;
   //       }
   //    }

   //    if (pathname.includes("admin")) {
   //       if (isAuthenticated && user.role === "ADMIN") {
   //          isAuthorized = true;
   //       }
   //    }

   //* ✅ GOOD SOLUTION

   const ROLES = {
      admin: "ADMIN",
      freelancer: "FREELANCER",
      owner: "OWNER",
   };

   const desiredRole = pathname.split("/").at(1); // ['', 'owner', 'projects'] => index 1 => 'owner'

   if (Object.keys(ROLES).includes(desiredRole)) {
      if (isAuthenticated && user.role === ROLES[desiredRole])
         isAuthorized = true;
   }

   return { user, isLoading, isAuthenticated, isAuthorized };
};

export default useAuthorize;
