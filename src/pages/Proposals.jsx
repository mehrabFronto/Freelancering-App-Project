import ProposalsTable from "../feature/proposals/ProposalsTable";

const Proposals = () => {
   return (
      <div>
         <h1 className="font-bold text-secondary-700 text-lg mb-8">
            لیست پروپوزال ها
         </h1>
         <ProposalsTable />
      </div>
   );
};

export default Proposals;
