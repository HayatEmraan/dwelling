import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/TopBar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6'>
            <div className='h-screen bg-white md:block hidden'>
                <Sidebar />
            </div>
            <div className='w-full md:col-span-4 lg:col-span-5 bg-slate-100'>
                <TopBar />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;