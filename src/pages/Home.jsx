import Loading from "../ui/Loading";

const Home = () => {
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
