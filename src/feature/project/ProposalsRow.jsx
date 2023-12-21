import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import {
   toPersianDigits,
   toPersianDigitsWithCommas,
} from "../../utils/toPersianDigits";
import truncateText from "../../utils/truncateText";
import ChangeProposalStatus from "./ChangeProposalStatus";

const ProposalsRow = ({ proposal, index }) => {
   const [isOpen, setIsOpen] = useState(false);

   const { status, user } = proposal;

   const statusStyle = [
      { label: "رد شده", className: "badge--danger" },
      { label: "در انتظار تایید", className: "badge--secondary" },
      { label: "تایید شده", className: "badge--success" },
   ];

   return (
      <Table.Row>
         <td>{toPersianDigits(index + 1)}</td>
         <td>{user.name}</td>
         <td>
            <p>{truncateText(proposal.description, 50)}</p>
         </td>
         <td>{proposal.duration} روز</td>
         <td>{toPersianDigitsWithCommas(proposal.price)}</td>
         <td>
            <span className={`badge ${statusStyle[status].className}`}>
               {statusStyle[status].label}
            </span>
         </td>
         <td>
            <Modal
               open={isOpen}
               onClose={() => setIsOpen(false)}
               title="تغییر وضعیت درخواست">
               <ChangeProposalStatus
                  onClose={() => setIsOpen(false)}
                  proposalId={proposal._id}
               />
            </Modal>
            <button onClick={() => setIsOpen(true)}>تغییر وضعیت</button>
         </td>
      </Table.Row>
   );
};

export default ProposalsRow;
