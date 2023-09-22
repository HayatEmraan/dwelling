import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import ThemeButton from "@/components/dashboard/homePage/ThemeButton";
import HandleLogout from "@/components/shared/header/handlelogout";
import { getuserbycookie } from "@/utils/async/conditions/getuserbycookie";

const TopBar = ({ toggleMenu, isOpen }) => {
  const [theme, setTheme] = useState(false);
  useEffect(() => setTheme(true), []);

  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getuserbycookie();
      setUser(response);
    })();
  }, []);

  return (
    <div className="flex justify-between sticky z-50 top-0 items-center px-6 py-4 sm:py-1 border-r-slate-100 border bg-white dark:bg-slate-800 dark:text-white dark:border-slate-800">
      <div className="flex justify-between items-center">
        <button onClick={toggleMenu}>
          <div className={`${isOpen ? "hidden" : ""}`}>
            <svg
              className="w-6 h-6 lg:hidden mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className={`${isOpen ? "" : "hidden"}`}>
            <svg
              className="w-6 h-6 lg:hidden mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
        <Link
          href="/"
          className={`flex-none text-2xl md:w-64 font-bold dark:text-white bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent`}
          aria-label="Brand"
        >
          Dwelling
        </Link>
        <label htmlFor="search" className="relative hidden md:block">
          <input
            type="search"
            placeholder="Search"
            className="px-3 mx-4 py-2 rounded-md outline-primary border border-slate-300 w-full max-w-xs"
          />
          <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2" />
        </label>
      </div>
      <div className="flex space-x-4 items-center">
        {theme && <ThemeButton />}
        <div className="hs-dropdown [--strategy:fixed] [--adaptive:none] sm:[--trigger:hover sm:py-4">
          <button
            type="button"
            className="flex items-center w-full text-gray-800 hover:text-gray-500 font-medium dark:text-gray-200 dark:hover:text-gray-400"
          >
            <div className="w-7 h-7 rounded-full">
              <img
                src={
                  user?.data?.photoURL ? user?.data?.photoURL : "/avatar.png"
                }
                className="w-7 h-7 rounded-full"
                alt="Avatar"
              />
            </div>
          </button>
          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-50 bg-white sm:shadow-2xl rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
            <>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="/dashboard/settings"
              >
                Settings
              </a>
            </>
            <HandleLogout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
