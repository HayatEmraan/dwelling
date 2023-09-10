import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import ThemeButton from "@/components/dashboard/homePage/ThemeButton";


const TopBar = ({ toggleMenu, isOpen }) => {
  const [theme, setTheme] = useState(false);
  useEffect(() => setTheme(true), []);

  return (
    <div className="flex justify-between sticky z-50 top-0 items-center px-6 py-2 border-r-slate-100 border bg-white dark:bg-slate-800 dark:text-white dark:border-slate-800">
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
        <AiOutlineBell />
        <RxAvatar className="text-4xl" />
      </div>
    </div>
  );
};

export default TopBar;
