import InvoiceListPage from "@/components/dashboard/usersPage/UsersCard";
import UsersList from "@/components/dashboard/usersPage/UsersList";
import TableSkeleton from "@/components/tableskeleton/tableskeleton";
import { getusers } from "@/utils/async/admin/users/getusers";
import { Suspense } from "react";

const UsersPage = async () => {
  const data = await getusers();
  return (
    <>
      <div className="mt-4 lg:mt-6 -mb-4">
        <h2 className="text-2xl font-semibold mb-4 pl-6">Users</h2>
        <InvoiceListPage />
      </div>
      <Suspense fallback={<TableSkeleton data={data} />}>
        <UsersList />
      </Suspense>
    </>
  );
};

export default UsersPage;
