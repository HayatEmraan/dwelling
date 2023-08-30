
import HostList from "@/components/dashboard/hostMangement/HostList";
import HostTotal from "@/components/dashboard/hostMangement/HostTotal";



const HostManagement = () => {
  return (
    <div className="m-5">
      <h3 className="text-3xl pb-4 font-bold sm:px-6">Host Management</h3>
      <HostTotal></HostTotal>
      <HostList></HostList>
    </div>
  );
};
export default HostManagement;
