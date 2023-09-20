import HostList from "@/components/dashboard/hostMangement/HostList";
import HostTotal from "@/components/dashboard/hostMangement/HostTotal";
import { gethosts } from "@/utils/async/admin/hosts/gethosts";

const HostManagement = async () => {
  const data = await gethosts();
  return (
    <div className="m-5">
      <h3 className="text-3xl pb-4 font-bold sm:px-6">Host Management</h3>
      <HostTotal></HostTotal>
      <HostList data={data}></HostList>
    </div>
  );
};
export default HostManagement;
