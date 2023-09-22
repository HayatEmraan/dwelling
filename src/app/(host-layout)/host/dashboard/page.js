import HomePageHeading from '@/components/dashboard/homePage/Heading';
import React from 'react';
import CardContainerGuest from '../../../../components/host/cardcontainer/CardContainer';
import HostDashboardTable from '../../../../components/host/table/HostDashboardTable';

export const metadata = {
  title: "Dashboard - Host",
  description: "A project by BrightCoders team",
};

const HostPage = () => {
    return (
      <div>
        <HomePageHeading></HomePageHeading>
        <div className="max-w-[150rem] lg:px-16 -mt-[70px] dark:bg-slate-700 dark:text-white">
          <CardContainerGuest />
        </div>
        <HostDashboardTable/>
      </div>
    );
};

export default HostPage;