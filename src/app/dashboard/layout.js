import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-5'>
            <div className='h-screen bg-slate-50'>
                <Sidebar />
            </div>
            <div className='w-full col-span-4 bg-red-100'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;