"use client";
import React from "react";

const ReserveButton = ({ room, children }) => {
  return (
    <div>
      <div className="block" data-hs-overlay="#checkingModal">
        <div className=" py-1.5">
          <div style={{
                backgroundImage:
                  "radial-gradient( circle at center,#FF385C 0%,#e61e4d 27.5%,#e31c5f 40%,#d70466 57.5%,#bd1e59 75%,#bd1e59 100% )",
              }} className="cursor-pointer btn py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border   shadow-sm align-middle text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700   hover:text-white w-full dark:text-gray-300 dark:hover:text-white">
            Review & Reserve
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ReserveButton;
