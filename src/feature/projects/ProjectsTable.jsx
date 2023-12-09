import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProjectsRow from "./ProjectsRow";
import useOwnerProjects from "./useOwnerProjects";

const ProjectsTable = () => {
   const { isLoading, projects } = useOwnerProjects();

   if (isLoading) return <Loading />;

   if (!projects.length) return <Empty resourceName="پروژه" />;

   return (
      <Table>
         <Table.Header>
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملبات</th>
         </Table.Header>
         <Table.Body>
            {projects.map((project, index) => {
               return (
                  <ProjectsRow
                     key={project._id}
                     project={project}
                     index={index}
                  />
               );
            })}
         </Table.Body>
      </Table>
   );
};

export default ProjectsTable;
