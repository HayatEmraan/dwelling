"use client";
import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  return (
    <div className="flex justify-center items-center py-4 px-5 md:px-4 lg:px-3 xl:px-2">
      <div className="flex justify-between items-center px-5 border border-[#DDDDDD] rounded-xl h-[4.13rem] 2xl:w-2/4 xl:w-3/4 w-full max-w-2xl">
        <div className="lg:flex">
          <h2 className="font-semibold">Display total price</h2>
          <h2 className="hidden lg:block text-[#DDDDDD] mx-5">|</h2>
          <p className="text-[#717171] text-[15px]">
            Includes all fees, before taxes
          </p>
        </div>
        <div>
          <button className={`${isToggled ? "" : ""}`} onClick={handleToggle}>
            {isToggled ? (
              <input
                type="checkbox"
                className="toggle border-none bg-gray-400"
                checked
              />
            ) : (
              <input
                type="checkbox"
                className="toggle  border-none bg-gray-400"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
