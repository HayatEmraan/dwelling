'use client'

import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/TopBar';
import ProviderTheme from '@/utils/themeProvider';
import useToggleOpen from '@/utils/useToggleOpen';

const DashboardLayout = ({ children }) => {

    const [isOpen, toggleMenu] = useToggleOpen();

    return (
        <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6'>
            <div className={`h-screen bg-white transition-all  ${isOpen ? 'hidden' : 'block z-30 left-0 top-10 w-3/4 h-[100vh] fixed md:static'}`}>
                <Sidebar />
            </div>
            <div className={`w-full md:col-span-4 lg:col-span-5 transition-all ${isOpen ? 'md:col-span-5 lg:col-span-6' : 'lg:col-span-5'} bg-slate-100`}>
                <ProviderTheme>
                    <TopBar toggleMenu={toggleMenu} />
                    {children}
                </ProviderTheme>
            </div>
        </div>
    );
};

export default DashboardLayout;