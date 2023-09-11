import ActiveProjectTable from "@/components/dashboard/homePage/ActiveProjectTable";
import CardContainer from "@/components/dashboard/homePage/CardContainer";
// import Example from "@/components/dashboard/homePage/ChartSide";
import dynamic from "next/dynamic";
const Example = dynamic(
  () => {
    return import("@/components/dashboard/homePage/ChartSide");
  },
  {
    ssr: false,
  }
);
import DashBooking from "@/components/dashboard/homePage/DashBooking";
import DashHost from "@/components/dashboard/homePage/DashHost";
import DashInvoice from "@/components/dashboard/homePage/DashInvoice";
import DashProperty from "@/components/dashboard/homePage/DashProperty";
import DashUsers from "@/components/dashboard/homePage/DashUsers";
import HomePageHeading from "@/components/dashboard/homePage/Heading";
import MyTaskTable from "@/components/dashboard/homePage/MyTaskTable/MyTaskTable";
import MyTeam from "@/components/dashboard/homePage/MyTeam/MyTeam";
import { getusers } from "@/utils/async/admin/users/getusers";

const DashboardHomePage = async () => {
  const data = await getusers();
  return (
    <>
      <HomePageHeading />
      <div className="max-w-[150rem] lg:px-16 -mt-[70px] dark:bg-slate-700 dark:text-white">
        <CardContainer />
        {/*Dashboard user list with chart */}
        <div className="xl:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
         <DashUsers data={data}></DashUsers>
         <div className="border-2 shadow-md rounded-md xl:w-96 w-full">
         <Example></Example>
         </div>
      </div>
        Dashboard Booking list with chart
        <div  className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
          <Example></Example>
          <DashBooking></DashBooking>
        </div>
        Dashboard Invoice list with chart
        <div className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
          <DashInvoice></DashInvoice>
          <Example></Example>
        </div>
        Dashboard Property list with chart
        <div className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
        <Example></Example>
          <DashProperty></DashProperty>
        </div>
        Dashboard Host list with chart
        <div className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
          <DashHost></DashHost>
          <Example></Example>
        </div>
      </div>
      <div className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
        <Example></Example>
        <DashBooking></DashBooking>
      </div>
    </>
  );
};

export default DashboardHomePage;
