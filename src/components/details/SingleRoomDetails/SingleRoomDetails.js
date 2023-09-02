"use client";
import Image from "next/image";

import { AiFillFlag } from "react-icons/ai";
import { DateRange } from "react-date-range";
import React, { useState } from "react";

import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css";

const SingleRoomDetails = ({ data }) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [activePicker, setActivePicker] = useState(null);

  const handleDateRangeChange = (ranges) => {
    setDateRange([ranges.selection]);
    setActivePicker(null);
  };

  const handlePickerOpen = (picker) => {
    setActivePicker(picker);
  };

import React from "react";
import { AiFillFlag } from "react-icons/ai";
import ReserveButton from "../ReserveButton/ReserveButton";

const SingleRoomDetails = ({ data }) => {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div>
          <p>{data.description}</p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Category-{data.category}</h2>
        </div>
        <div>
          <h2 className="font-bold">Most Popular Facilites</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
            {data.popular_facilities.map((facilities, index) => (
              <div key={index} className="flex items-center">
                <Image
                  className="mr-2"
                  src={facilities.image}
                  width={20}
                  height={20}
                ></Image>
                <p className="flex">{facilities.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* prie and Date */}
      <div>
        <div className="border rounded shadow-lg p-5">
          <h5 className="flex items-center my-3">
            <span className="font-bold mr-2">${data.price}</span>night
          </h5>
          <div>
            <div className="border rounded-xl">
              <div className="grid grid-cols-2 text-center">
                <div className="border-r border-b p-2">
                  <p>
                    <button onClick={() => handlePickerOpen("checkin")}>
                      Check-in
                    </button>
                  </p>
                  <p>
                    <small>
                      {" "}
                      {dateRange[0].startDate.toDateString()}
                    </small>
                  </p>
                </div>
                <div className="border-b p-2">
                  <p>
                    <button onClick={() => handlePickerOpen("checkout")}>
                      Check-out
                    </button>
                  </p>
                  <p>
                    <small>
                      {" "}
                      {dateRange[0].endDate.toDateString()}
                    </small>
                  </p>
                </div>
                {activePicker && (
                  <DateRange
                    ranges={dateRange}
                    onChange={handleDateRangeChange}
                    months={2}
                    direction="horizontal"
                    showDateDisplay={false}
                    shownDate={
                      activePicker === "checkin"
                        ? dateRange[0].startDate
                        : dateRange[0].endDate
                    }
                    onClose={() => setActivePicker(null)}
                  />
                )}
              </div>

              <div className="flex justify-between p-2">
                <h2>Guest</h2>
                <div>
                  <select>
                    <option value=""></option>
                    <option value="person1">Person-1</option>
                    <option value="person2">Person-2</option>
                    <option value="person3">Person-3</option>
                    <option value="person4">Person-4</option>
                    <option value="morethenFour">More Than Four</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <ReserveButton room={data} />
            <p>You won't be changed yet</p>
          </div>

          <div className="my-5 space-y-3">
            <div className="flex justify-between">
              <h3>Price * Night</h3>

              <h3>$305</h3>
            </div>
            <div className="flex justify-between">
              <h3>Cleaning Fee</h3>
              <h3>$9</h3>
            </div>
            <div className="flex justify-between">
              <h3>Dewling Service fee</h3>
              <h3>$44</h3>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between font-bold">
            <h3>Total before taxes</h3>
            <h3>$358</h3>
          </div>
        </div>
        <div className="my-3 justify-center flex items-center">
          <AiFillFlag className="mr-2" />
          <small className="underline">Report this listing</small>

          {/* <DateRangePicker ranges={selectedRange} onChange={handleSelect} /> */}
        </div>
      </div>
    </div>
  );
};

export default SingleRoomDetails;
