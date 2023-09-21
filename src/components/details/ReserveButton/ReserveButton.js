"use client";
import React from "react";

const ReserveButton = ({ room, children }) => {
  return (
    <div>
      <div className="block" data-hs-overlay="#checkingModal">
        <div className=" py-1.5">
          <div className="cursor-pointer btn py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border   shadow-sm align-middle text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-700 via-blue-800 to-fuchsia-800 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] hover:from-sky-800 hover:via-blue-800 hover:to-fuchsia-800 text-fuchsia-300 hover:text-white w-full dark:text-gray-300 dark:hover:text-white">
            Review & Reserve
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ReserveButton;
