import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";

const queryClient = new QueryClient();

const App = () => {
   return (
      <QueryClientProvider client={queryClient}>
         <Toaster />
         <div className="container">
            <Routes>
               <Route
                  path="/"
                  element={
                     <div className="text-yellow-500 bg-primary-900 text-3xl font-bold p-4">
                        صفحه اصلی
                     </div>
                  }
               />
               <Route
                  path="/auth"
                  element={<Auth />}
               />
               <Route
                  path="/complete-profile"
                  element={<CompleteProfile />}
               />
            </Routes>
         </div>
      </QueryClientProvider>
   );
};

export default App;
