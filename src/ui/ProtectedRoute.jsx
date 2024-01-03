import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuthorize from "../feature/authentication/useAuthorize";
import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
   const { isLoading, isAuthenticated, isAuthorized, isVerified } =
      useAuthorize();

   const navigate = useNavigate();

   useEffect(() => {
      if (!isAuthenticated && !isLoading) return navigate("/auth");
      if (!isVerified && !isLoading) {
         toast.error("پروفایل شما هنوز تایید نشده است");
         return navigate("/not-access", { replace: true });
      }
      if (!isAuthorized && !isLoading) return navigate("/not-access");
   }, [isAuthenticated, isAuthorized, isLoading, navigate, isVerified]);

   if (isLoading)
      return (
         <div className="flex items-center justify-center h-screen bg-secondary-100">
            <Loading />
         </div>
      );

   if ((isAuthenticated, isAuthorized)) return children;
};

export default ProtectedRoute;
