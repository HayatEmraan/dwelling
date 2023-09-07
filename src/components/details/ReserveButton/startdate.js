"use client";
import useDateStore from "@/store/datestore";
import React from "react";

const ReviewDates = () => {
  const { date } = useDateStore();
  const Sdate = new Date(date?.startDate).toDateString();
  const Edate = new Date(date?.endDate).toDateString();

  return (
    <div className=" flex justify-between mx-8">
      <h1 className="font-bold">
        Check In Date: <br /> <span className="font-light">{Sdate}</span>{" "}
      </h1>
      <h1 className="font-bold">
        Check Out Date: <br /> <span className="font-light">{Edate}</span>{" "}
      </h1>
    </div>
  );
};

export default ReviewDates;
