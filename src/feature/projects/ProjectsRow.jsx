import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import { toLocalDateString } from "../../utils/toLocalDateString";
import {
   toPersianDigits,
   toPersianDigitsWithCommas,
} from "../../utils/toPersianDigits";
import truncateText from "../../utils/truncateText";
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
            {project.status === "OPEN" ? (
               <span className="badge badge--success">باز</span>
            ) : (
               <span className="badge badge--danger">بسته</span>
            )}
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
                     <div className="flex items-center justify-center">
                        this is modal
                     </div>
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
      </Table.Row>
   );
};

export default ProjectsRow;
