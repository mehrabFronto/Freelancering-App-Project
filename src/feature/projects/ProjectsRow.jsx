import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { HiEye } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import { toLocalDateString } from "../../utils/toLocalDateString";
import {
   toPersianDigits,
   toPersianDigitsWithCommas,
} from "../../utils/toPersianDigits";
import truncateText from "../../utils/truncateText";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import useRemoveProject from "./useRemoveProject";

const ProjectsRow = ({ project, index }) => {
   const [isEditOpen, setIsEditOpen] = useState(false);
   const [isDeleteOpen, setIsDeleteOpen] = useState(false);

   const { removeProject } = useRemoveProject();

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
            <ToggleProjectStatus project={project} />
         </td>
         <td>
            <div className="flex items-center gap-x-2">
               <>
                  <button onClick={() => setIsEditOpen(true)}>
                     <TbEdit className="w-6 h-6 text-primary-900" />
                  </button>
                  <Modal
                     open={isEditOpen}
                     title={`ویرایش ${project.title}`}
                     onClose={() => setIsEditOpen(false)}>
                     <CreateProjectForm
                        projectToEdit={project}
                        onClose={() => setIsEditOpen(false)}
                     />
                  </Modal>
               </>
               <>
                  <button onClick={() => setIsDeleteOpen(true)}>
                     <FiTrash2 className="w-5 h-5 text-error" />
                  </button>
                  <Modal
                     open={isDeleteOpen}
                     title={`حذف ${project.title}`}
                     onClose={() => setIsDeleteOpen(false)}>
                     <ConfirmDelete
                        resourceName={project.title}
                        onClose={() => setIsDeleteOpen(false)}
                        disabled={false}
                        onConfirm={() =>
                           removeProject(project._id, {
                              onSuccess: () => setIsDeleteOpen(false),
                           })
                        }
                     />
                  </Modal>
               </>
            </div>
         </td>
         <td>
            <Link
               to={project._id}
               className="flex justify-center">
               <HiEye className="w-5 h-5 text-primary-800" />
            </Link>
         </td>
      </Table.Row>
   );
};

export default ProjectsRow;
