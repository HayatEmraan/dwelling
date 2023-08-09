"use client";
import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  console.log(isToggled);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  return (
    <div className="flex justify-between items-center px-2 lg:px-5  border border-gray-400 rounded-lg h-20 lg:w-1/3">
      <div className="lg:flex">
        <h2 className="font-bold">Display total price</h2>
        <h2 className="hidden lg:block text-gray-500 mx-5">|</h2>
        <p className="text-gray-500">Includes all fees,before taxes</p>
      </div>
      <div>
        <button className={`${isToggled ? "" : ""}`} onClick={handleToggle}>
          {isToggled ? (
            <input type="checkbox" className="toggle border-none bg-gray-400" checked />
          ) : (
            <input type="checkbox" className="toggle  border-none bg-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
