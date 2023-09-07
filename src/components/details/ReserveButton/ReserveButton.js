"use client";
import stripeCheckout from "@/utils/async/stripeCheckout";
import React from "react";


const ReserveButton = ({ room, children, checkInDate, checkOutDate }) => {
  const handleStripeCheckout = () => {
    stripeCheckout(room);
  };

  return (
    <div>
      <button
        onClick={handleStripeCheckout}
        className="btn bg-pink-500 text-white w-full my-5"
      >
        Reserve
      </button>

      <div className="block" data-hs-overlay="#checkingModal">
        <div className=" py-1.5">
          <div 

          className="cursor-pointer btn py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border   shadow-sm align-middle text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 bg-green-700 text-white w-full dark:hover:text-white">
            Review & Confirm
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ReserveButton;
