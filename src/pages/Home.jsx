import { useEffect } from "react";
import Loading from "../ui/Loading";
import { useNavigate } from "react-router-dom";
import useAuthorize from "../feature/authentication/useAuthorize";

const Home = () => {
   const navigate = useNavigate();

   const { user, isVerified, isAuthenticated } = useAuthorize();

   useEffect(() => {
      if(!isAuthenticated){
         navigate('/auth', { replace: true });
      }
      else if(isAuthenticated && isVerified){
          navigate(`/${user.role.toLowerCase()}`, { replace: true });
      }
   }, [user, isVerified, isAuthenticated, navigate]);

   return (
      <div className="container text-primary-900 text-3xl font-bold p-4 h-full 
      flex flex-col items-center justify-center">
         <p className="text-center ml-1">  
            حساب شما در انتظار تایید است
         </p>
         <Loading />
      </div>
   );
};

export default Home;
