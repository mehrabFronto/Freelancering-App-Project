import Table from "../../ui/Table";
import {
   toPersianDigits,
   toPersianDigitsWithCommas,
} from "../../utils/toPersianDigits";
import truncateText from "../../utils/truncateText";

const statusStyle = [
   { label: "رد شده", className: "badge--danger" },
   { label: "در انتظار تایید", className: "badge--secondary" },
   { label: "تایید شده", className: "badge--success" },
];

const ProposalsRow = ({ index, proposal }) => {
   const { status } = proposal;

   return (
      <Table.Row>
         <td>{toPersianDigits(index)}</td>
         <td>{truncateText(proposal.description, 60)}</td>
         <td>{proposal.duration} روز</td>
         <td>{toPersianDigitsWithCommas(proposal.price)}</td>
         <td>
            <span className={`badge ${statusStyle[status].className}`}>
               {statusStyle[status].label}
            </span>
         </td>
      </Table.Row>
   );
};

export default ProposalsRow;
