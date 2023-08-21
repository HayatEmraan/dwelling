"use client";
import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  return (
    <div className="flex justify-center items-center py-4 px-5 md:px-4 lg:px-3 xl:px-2">
      <div className="flex justify-between items-center px-5 border border-[#DDDDDD] rounded-lg h-[4.5rem] 2xl:w-2/4 xl:w-3/4 w-full max-w-4xl">
        <div className="lg:flex">
          <h2 className="font-bold">Display total price</h2>
          <h2 className="hidden lg:block text-gray-500 mx-5">|</h2>
          <p className="text-gray-500">Includes all fees,before taxes</p>
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
