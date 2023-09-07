import ActiveProjectTable from "@/components/dashboard/homePage/ActiveProjectTable";
import CardContainer from "@/components/dashboard/homePage/CardContainer";
import Example from "@/components/dashboard/homePage/ChartSide";

import DashBooking from "@/components/dashboard/homePage/DashBooking";
import DashHost from "@/components/dashboard/homePage/DashHost";
import DashInvoice from "@/components/dashboard/homePage/DashInvoice";
import DashProperty from "@/components/dashboard/homePage/DashProperty";
import DashUsers from "@/components/dashboard/homePage/DashUsers";
import HomePageHeading from "@/components/dashboard/homePage/Heading";
import MyTaskTable from "@/components/dashboard/homePage/MyTaskTable/MyTaskTable";
import MyTeam from "@/components/dashboard/homePage/MyTeam/MyTeam";

const DashboardHomePage = () => {
  return (
    <>
      <HomePageHeading />
      <div className=" lg:px-16 -mt-[70px] dark:bg-slate-700 dark:text-white">
        <CardContainer />
        {/*Dashboard user list with chart */}
        <div  className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
          <DashUsers></DashUsers>
          <Example></Example>
        </div>
        {/* Dashboard Booking list with chart */}
        <div  className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
          <Example></Example>
          <DashBooking></DashBooking>
        </div>
        {/*Dashboard Invoice list with chart */}
        <div className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
          <DashInvoice></DashInvoice>
          <Example></Example>
        </div>
        {/*Dashboard Property list with chart */}
        <div className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
        <Example></Example>
          <DashProperty></DashProperty>
        </div>
        {/*Dashboard Host list with chart */}
        <div className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
          <DashHost></DashHost>
          <Example></Example>
        </div>
      </div>
      {/* <div className="px-6 md:px-10 lg:px-16 md:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
        <Example></Example>
        <DashBooking></DashBooking>
      </div> */}
    </>
  );
};

export default DashboardHomePage;
