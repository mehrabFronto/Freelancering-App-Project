import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

const App = () => {
   return (
      <div className="container bg-secondary-100">
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
         </Routes>
      </div>
   );
};

export default App;
