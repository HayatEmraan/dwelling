import Link from "next/link";
import React from "react";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  return (
    <Link
      href={`/group?filter=${label}&page=1&limit=nan&sort=bright`}
      className={`flex flex-col ml-4 xl:ml-2 md:ml-3 items-center justify-center gap-1 pt-6 border-b-2 pb-1 border-transparent hover:border-neutral-300 hover:text-neutral-800 transition cursor-pointer ${
        selected ? "border-b-neutral-800 text-neutral-800" : "text-neutral-500"
      }`}
    >
      <div className="w-10 h-10">{Icon}</div>
      <div
        className={`text-[0.79rem] font-medium ${
          !selected && "text-gray-500"
        } hover:text-neutral-800 font-medium whitespace-nowrap`}
      >
        {label}
      </div>
    </Link>
  );
};

export default CategoryBox;
