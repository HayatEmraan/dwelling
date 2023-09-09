import UsersList from "@/components/dashboard/usersPage/UsersList";
import { getusers } from "@/utils/async/admin/users/getusers";

const UsersPage = async () => {
  const data = await getusers();
  return (
    <div>
      <UsersList data={data} />
    </div>
  );
};

export default UsersPage;
