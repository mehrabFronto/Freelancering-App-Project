import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import ProjectsList from "./pages/ProjectsList";
import SingleProject from "./pages/SingleProject";
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
            <Route
               path="/owner"
               element={<AppLayout />}>
               <Route
                  index
                  element={
                     <Navigate
                        to="dashboard"
                        replace
                     />
                  }
               />
               <Route
                  path="dashboard"
                  element={<OwnerDashboard />}
               />
               <Route
                  path="projects"
                  element={<ProjectsList />}
               />
               <Route
                  path="projects/:id"
                  element={<SingleProject />}
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
