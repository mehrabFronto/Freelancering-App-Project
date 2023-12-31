import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import { toLocalDateString } from "../../../utils/toLocalDateString";
import {
   toPersianDigits,
   toPersianDigitsWithCommas,
} from "../../../utils/toPersianDigits";
import truncateText from "../../../utils/truncateText";
import CreateProposalForm from "../../proposals/CreateProposalForm";

const projectStatus = {
   OPEN: { label: "باز", className: "badge--success" },
   CLOSED: { label: "بسته", className: "badge--danger" },
};

const ProjectsRow = ({ project, index }) => {
   const { status, title, budget, deadline } = project;

   const [isOpen, setIsOpen] = useState(false);

   return (
      <Table.Row>
         <td>{toPersianDigits(index)}</td>
         <td>{truncateText(title, 30)}</td>
         <td>{toPersianDigitsWithCommas(budget)}</td>
         <td>{toLocalDateString(deadline)}</td>
         <td>
            <span className={`badge ${projectStatus[status].className}`}>
               {projectStatus[status].label}
            </span>
         </td>
         <td>
            <button onClick={() => setIsOpen(true)}>
               <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
            </button>

            {isOpen && (
               <Modal
                  open={open}
                  onClose={() => setIsOpen(false)}
                  title={`درخواست انجام پروژه ${title}`}>
                  <CreateProposalForm
                     onClose={() => setIsOpen(false)}
                     projectId={project._id}
                  />
               </Modal>
            )}
         </td>
      </Table.Row>
   );
};

export default ProjectsRow;
