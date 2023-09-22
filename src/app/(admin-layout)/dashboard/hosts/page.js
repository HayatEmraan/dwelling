import HostList from "@/components/dashboard/hostMangement/HostList";
import HostTotal from "@/components/dashboard/hostMangement/HostTotal";
import { gethosts } from "@/utils/async/admin/hosts/gethosts";

export const metadata = {
  title: "Host Management - Admin",
  description: "A project by BrightCoders team",
};

const HostManagement = async () => {
  const data = await gethosts();
  return (
    <div className="m-5 dark:m-0  dark:bg-slate-900">
      <h3 className="text-3xl pb-4 dark:bg-slate-900 dark:text-slate-300 font-bold sm:px-6">Host Management</h3>
      <HostTotal></HostTotal>
      <HostList data={data}></HostList>
    </div>
  );
};
export default HostManagement;
