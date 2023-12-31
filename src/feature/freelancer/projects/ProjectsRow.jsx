import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import { toLocalDateString } from "../../../utils/toLocalDateString";
import {
   toPersianDigits,
   toPersianDigitsWithCommas,
} from "../../../utils/toPersianDigits";
import truncateText from "../../../utils/truncateText";

const projectStatus = {
   OPEN: { label: "باز", className: "badge--success" },
   CLOSED: { label: "بسته", className: "badge--danger" },
};

const ProjectsRow = ({ project, index }) => {
   const { status, title, budget, deadline } = project;

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
            <button>
               <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
            </button>
         </td>
      </Table.Row>
   );
};

export default ProjectsRow;
