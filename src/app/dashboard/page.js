import ActiveProjectTable from "@/components/dashboard/homePage/ActiveProjectTable";
import CardContainer from "@/components/dashboard/homePage/CardContainer";
import HomePageHeading from "@/components/dashboard/homePage/Heading";
import MyTaskTable from "@/components/dashboard/homePage/MyTaskTable/MyTaskTable";
import MyTeam from "@/components/dashboard/homePage/MyTeam/MyTeam";
import React from "react";

const DashboardHomePage =  () => {
  return (
    <div>
      <HomePageHeading />
      <div className="px-6 -mt-[70px] dark:bg-slate-700 dark:text-white">
        <CardContainer />
        <ActiveProjectTable />
      </div>
      <div className="px-6 md:flex justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
        <MyTaskTable />
        <MyTeam />
      </div>
    </div>
  );
};

export default DashboardHomePage;
