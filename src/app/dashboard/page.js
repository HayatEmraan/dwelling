"use client"
import ActiveProjectTable from "@/components/dashboard/homePage/ActiveProjectTable";
import CardContainer from "@/components/dashboard/homePage/CardContainer";
import HomePageHeading from "@/components/dashboard/homePage/Heading";
import MyTaskTable from "@/components/dashboard/homePage/MyTaskTable/MyTaskTable";
import MyTeam from "@/components/dashboard/homePage/MyTeam/MyTeam";
import React from "react";
import FetchData from "./fetch";

const DashboardHomePage = async() => {
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
        <FetchData />
      </div>
    </div>
  );
};

export default DashboardHomePage;
