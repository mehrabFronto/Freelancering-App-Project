import Table from "../../ui/Table";
import { toLocalDateString } from "../../utils/toLocalDateString";
import {
   toPersianDigits,
   toPersianDigitsWithCommas,
} from "../../utils/toPersianDigits";
import truncateText from "../../utils/truncateText";

const ProjectsRow = ({ project, index }) => {
   return (
      <Table.Row>
         <td>{toPersianDigits(index)}</td>
         <td>{truncateText(project.title, 30)}</td>
         <td>{project.category.title}</td>
         <td>{toPersianDigitsWithCommas(project.budget)}</td>
         <td>{toLocalDateString(project.deadline)}</td>
         <td>
            <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
               {project.tags.map((tag) => (
                  <span
                     key={tag}
                     className="badge badge--secondary">
                     {tag}
                  </span>
               ))}
            </div>
         </td>
         <td>{project.freelancer?.name || "-"}</td>
         <td>
            {project.status === "OPEN" ? (
               <span className="badge badge--success">باز</span>
            ) : (
               <span className="badge badge--danger">بسته</span>
            )}
         </td>
         <td>...</td>
      </Table.Row>
   );
};

export default ProjectsRow;
