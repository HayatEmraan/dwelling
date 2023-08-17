
import ActiveProjectTable from '@/components/dashboard/homePage/ActiveProjectTable';
import CardContainer from '@/components/dashboard/homePage/CardContainer';
import HomePageHeading from '@/components/dashboard/homePage/Heading';
import React from 'react';

const DashboardHomePage = () => {
    return (
        <div>
            <HomePageHeading />
            <div className="px-6 -mt-[70px]">
                <CardContainer />
                <ActiveProjectTable />
            </div>
        </div>
    );
};

export default DashboardHomePage;