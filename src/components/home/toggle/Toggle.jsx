"use client";
import { toggleStore } from "@/store/slices/togglestore";
import React from "react";

const Toggle = () => {
  const { isToggled, setIsToggled } = toggleStore();

  const handleToggle = (e) => {
    setIsToggled(e.target.checked);
  };

  return (
    <div className="justify-center items-center py-4 px-5 md:px-4 lg:px-3 xl:px-2 mt-4 hidden md:flex">
      <div className="flex justify-between gap-2 items-center px-2 border border-[#DDDDDD] rounded-xl h-[3.4rem]">
        <div className="flex items-center">
          <h2 className="text-[0.81rem] text-gray-500 font-semibold whitespace-nowrap">
            Display without taxes
          </h2>
          <h2 className="hidden lg:block text-[#DDDDDD] mx-2">|</h2>
        </div>
        <div>
          <input
            type="checkbox"
            id="pricing-switch"
            onChange={handleToggle}
            className="relative mt-2 shrink-0 w-[2.25rem] h-4 bg-gray-300 text-violet-900 checked:bg-none checked:bg-violet-900   rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-0 ring-transparent focus:border-violet-900 focus:ring-violet-900 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-violet-900 dark:focus:ring-offset-gray-800 before:inline-block before:w-[1.15rem] before:h-4 before:bg-white before:translate-x-0 before:-translate-y-[0.15rem] checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
