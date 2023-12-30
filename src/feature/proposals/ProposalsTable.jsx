import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalsRow from "./ProposalsRow";
import useProposals from "./useProposals";

const ProposalsTable = () => {
   const { proposals, isLoading } = useProposals();

   if (isLoading) return <Loading />;

   if (!proposals.length) return <Empty resourceName="پروپوزال" />;

   return (
      <Table>
         <Table.Header>
            <th>#</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
         </Table.Header>
         <Table.Body>
            {proposals.map((proposal, index) => {
               return (
                  <ProposalsRow
                     key={proposal._id}
                     proposal={proposal}
                     index={index}
                  />
               );
            })}
         </Table.Body>
      </Table>
   );
};

export default ProposalsTable;
