import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import { toPersianDigits } from "../../../utils/toPersianDigits";
import truncateText from "../../../utils/truncateText";
import ChangeUserStatus from "./ChangeUserStatus";

const userStatus = {
   0: { label: "رد شده", className: "badge--danger" },
   1: { label: "در انتظار تایید", className: "badge--secondary" },
   2: { label: "تایید شده", className: "badge--success" },
};

const UsersRow = ({ index, user }) => {
   const [isOpen, setIsOpen] = useState(false);

   const { name, email, phoneNumber, status, role } = user;

   return (
      <Table.Row>
         <td>{toPersianDigits(index)}</td>
         <td>{name}</td>
         <td>{truncateText(email, 40)}</td>
         <td>{toPersianDigits(phoneNumber)}</td>
         <td>{role}</td>
         <td>
            <span className={`badge ${userStatus[status].className}`}>
               {userStatus[status].label}
            </span>
         </td>
         <td>
            <Modal
               open={isOpen}
               onClose={() => setIsOpen(false)}
               title="تغییر وضعیت کاربر">
               <ChangeUserStatus
                  userId={user._id}
                  onClose={() => setIsOpen(false)}
               />
            </Modal>
            <button onClick={() => setIsOpen(true)}>تغییر وضعیت</button>
         </td>
      </Table.Row>
   );
};

export default UsersRow;
