"use client";
import TopBar from "@/components/dashboard/TopBar";
import HostSideBar from "@/components/host/hostsidebar/hostsidebar";
import ProviderTheme from "@/utils/themeProvider";
import useToggleOpen from "@/utils/useToggleOpen";

const HostLayOut = ({ children }) => {
  const [isOpen, toggleMenu] = useToggleOpen();
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6">
      <div
        className={`fixed top-0 left-0  z-20 lg:flex bg-white flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 transition-width ${
          isOpen ? "" : "hidden"
        }`}
      >
        <HostSideBar />
      </div>
      <div
        className={`w-full md:col-span-4 lg:col-span-5 transition-all ${
          !isOpen
            ? "md:col-span-5 lg:col-span-6"
            : "md:col-span-5 lg:col-span-6"
        } bg-slate-100`}
      >
        <ProviderTheme>
          <TopBar toggleMenu={toggleMenu} isOpen={isOpen} />
          <div className="lg:ml-64">{children}</div>
        </ProviderTheme>
      </div>
    </div>
  );
};

export default HostLayOut;
