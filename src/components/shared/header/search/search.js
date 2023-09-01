"use client"
import { userAppStore } from "@/store/store";
import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchComp = () => {
  const { setShowScheduleBar } = userAppStore();
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full mt-2 shadow-sm hover:shadow-md transition my-4"
    onClick={setShowScheduleBar}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm cursor-pointer font-semibold px-6">Anywhere</div>
        <div className=" cursor-pointer text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Any Week
        </div>
        <div className="text-sm cursor-pointer pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="">Add Guests</div>
          <div className="p-2 bg-rose-500 cursor-pointer rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComp;
