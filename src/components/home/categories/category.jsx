"use client";
import React from "react";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  return (
    <div
      className={`flex flex-col ml-4 xl:ml-2 md:ml-3 items-center justify-center gap-1 pt-6 border-b-2 pb-1 border-transparent hover:border-neutral-300 hover:text-neutral-800 transition cursor-pointer ${
        selected ? "border-b-neutral-800 text-neutral-800" : "text-neutral-500"
      }`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
