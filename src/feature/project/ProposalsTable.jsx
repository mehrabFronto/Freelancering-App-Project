import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalsRow from "./ProposalsRow";

const ProposalsTable = ({ proposals }) => {
   if (!proposals.length) return <Empty resourceName="درخواستی" />;

   return (
      <Table>
         <Table.Header>
            <th>#</th>
            <th>فریلنسر</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
            <th>عملبات</th>
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
