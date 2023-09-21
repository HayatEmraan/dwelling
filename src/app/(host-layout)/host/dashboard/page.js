import CardContainer from '@/components/dashboard/homePage/CardContainer';
import HomePageHeading from '@/components/dashboard/homePage/Heading';
import React from 'react';
import CardContainerGuest from './card/page';
import DashboardRechartHost from './rechart/page';
import HostDashboardTable from './table/page';
// const uvData = [
//   { name: "Jan", uv: 100 },
//   { name: "Feb", uv: 200 },
//   // Add more UV data points as needed
// ];

// const pvData = [
//   { name: "Jan", pv: 500 },
//   { name: "Feb", pv: 700 },
//   // Add more PV data points as needed
// ];

const HostPage = () => {
    return (
      <div>
        <HomePageHeading></HomePageHeading>
        <div className="max-w-[150rem] lg:px-16 -mt-[70px] dark:bg-slate-700 dark:text-white">
          <CardContainerGuest />
          {/* Table And Charts */}
          {/* <DashboardRechartHost uvData={uvData} pvData={pvData} /> */}
        </div>
        <HostDashboardTable/>
      </div>
    );
};

export default HostPage;