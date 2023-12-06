import { Route, Routes } from "react-router-dom";

const App = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <div className="text-yellow-500 bg-primary-900 text-3xl">
                  شروع پروژه
               </div>
            }
         />
      </Routes>
   );
};

export default App;
