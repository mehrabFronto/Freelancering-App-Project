const Sidebar = ({ children }) => {
   return (
      <div className="bg-secondary-50 row-start-1 row-span-2 border-l border-secondary-300">
         <ul className="text-secondary-900 p-2 space-y-2">{children}</ul>
      </div>
   );
};

export default Sidebar;
