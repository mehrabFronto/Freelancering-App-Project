import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Owner from "./pages/Owner";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient();

const App = () => {
   return (
      <QueryClientProvider client={queryClient}>
         <Toaster />
         <Routes>
            <Route
               path="/"
               element={<Home />}
            />
            <Route
               path="/auth"
               element={<Auth />}
            />
            <Route
               path="/complete-profile"
               element={<CompleteProfile />}
            />
            <Route element={<AppLayout />}>
               <Route
                  path="/owner"
                  element={<Owner />}
               />
            </Route>
            <Route
               path="*"
               element={<NotFound />}
            />
         </Routes>
      </QueryClientProvider>
   );
};

export default App;
