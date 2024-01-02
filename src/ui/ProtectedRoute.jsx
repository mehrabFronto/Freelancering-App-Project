import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthorize from "../feature/authentication/useAuthorize";
import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
   const { isLoading, isAuthenticated, isAuthorized } = useAuthorize();

   const navigate = useNavigate();

   useEffect(() => {
      if (!isAuthenticated && !isLoading) return navigate("/auth");
      if (!isAuthorized && !isLoading) return navigate("/not-access");
   }, [isAuthenticated, isAuthorized, isLoading, navigate]);

   if (isLoading)
      return (
         <div className="flex items-center justify-center h-screen bg-secondary-100">
            <Loading />
         </div>
      );

   if ((isAuthenticated, isAuthorized)) return children;
};

export default ProtectedRoute;
