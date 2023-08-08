"use client";
import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  console.log(isToggled);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  return (
    <div className="flex justify-between items-center px-5 border border-gray-400 rounded-lg h-20 lg:w-2/3">
      <div className="lg:flex">
        <h2 className="font-bold mr-5">Display total price</h2>
        <p>Includes all fees,before taxes</p>
      </div>
      <div>
        <button className={`btn ${isToggled ? "" : ""}`} onClick={handleToggle}>
          {isToggled ? (
            <input type="checkbox" className="toggle" checked />
          ) : (
            <input type="checkbox" className="toggle" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
