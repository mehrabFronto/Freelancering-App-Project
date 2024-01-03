import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useUsers from "../useUser";
import UsersRow from "./UsersRow";

const UsersTable = () => {
   const { isLoading, users } = useUsers();

   if (isLoading) return <Loading />;

   if (!users.length) return <Empty resourceName="کاربری" />;

   return (
      <Table>
         <Table.Header>
            <th>#</th>
            <th>نام</th>
            <th>ایمیل</th>
            <th>شماره مویابل</th>
            <th>نقش</th>
            <th>وضعیت</th>
            <th>عملیات</th>
         </Table.Header>
         <Table.Body>
            {users.map((user, index) => {
               return (
                  <UsersRow
                     key={user._id}
                     user={user}
                     index={index}
                  />
               );
            })}
         </Table.Body>
      </Table>
   );
};

export default UsersTable;
