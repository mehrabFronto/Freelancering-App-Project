import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import DarkModeProvider from "./contexts/DarkModeContext";
import AdminLayout from "./feature/admin/adminLayout";
import FreelancerLayout from "./feature/freelancer/FreelancerLayout";
import OwnerLayout from "./feature/owner/OwnerLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import ProjectsList from "./pages/ProjectsList";
import Proposals from "./pages/Proposals";
import SingleProject from "./pages/SingleProject";
import SubmittedProjects from "./pages/SubmittedProjects";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => {
   return (
      <DarkModeProvider>
         <div className="bg-secondary-0 h-screen">
            <QueryClientProvider client={queryClient}>
               <ReactQueryDevtools initialIsOpen={false} />
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
                     element={
                        <ProtectedRoute>
                           <OwnerLayout />
                        </ProtectedRoute>
                     }>
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
                     path="/freelancer"
                     element={
                        <ProtectedRoute>
                           <FreelancerLayout />
                        </ProtectedRoute>
                     }>
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
                        element={<FreelancerDashboard />}
                     />
                     <Route
                        path="proposals"
                        element={<Proposals />}
                     />
                     <Route
                        path="projects"
                        element={<SubmittedProjects />}
                     />
                  </Route>
                  <Route
                     path="/admin"
                     element={
                        <ProtectedRoute>
                           <AdminLayout />
                        </ProtectedRoute>
                     }>
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
                        element={<AdminDashboard />}
                     />
                  </Route>
                  <Route
                     path="*"
                     element={<NotFound />}
                  />
               </Routes>
            </QueryClientProvider>
         </div>
      </DarkModeProvider>
   );
};

export default App;
