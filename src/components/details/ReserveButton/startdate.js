"use client";
import useDateStore from "@/store/datestore";
import React from "react";
import {PiWarningFill} from "react-icons/pi";

const ReviewDates = () => {
  const { date } = useDateStore();
  const Sdate = new Date(date?.startDate).toDateString();
  const Edate = new Date(date?.endDate).toDateString();


  return (
    <div className=" flex justify-between mx-8">
      <h1 className="font-bold">
        Check In Date: <br /> <span className="font-light">{Sdate === 'Invalid Date' ? <div className="text-orange-400 flex items-center justify-center gap-2"><PiWarningFill /><span className="text-gray-600">No Date Selected</span></div> : Sdate}</span>{" "}
      </h1>
      <h1 className="font-bold">
        Check Out Date: <br /> <span className="font-light">{Edate === 'Invalid Date' ? <div className="text-orange-400 flex items-center justify-center gap-2"><PiWarningFill /><span className="text-gray-600">No Date Selected</span></div> : Edate}</span>{" "}
      </h1>
    </div>
  );
};

export default ReviewDates;
