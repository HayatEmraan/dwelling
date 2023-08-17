import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/TopBar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid md:grid-cols-5 grid-cols-6'>
            <div className='h-screen bg-white border-r-slate-100 border'>
                <Sidebar />
            </div>
            <div className='w-full md:col-span-4 col-span-5 bg-[#F1F5F9]'>
                <TopBar />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;