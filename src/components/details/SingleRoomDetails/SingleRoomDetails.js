"use client";
import Image from "next/image";
import { AiFillFlag } from "react-icons/ai";
import React, { useState } from "react";
import ReserveButton from "../ReserveButton/ReserveButton";
import DatePicker from "./DatePicker";


const SingleRoomDetails = ({ data }) => {
  
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  

  const handleDateSelect = (dateRange) => {
    if (!checkInDate) {
      setCheckInDate(dateRange.startDate);
      setShowPicker(true); 
    } else if (!checkOutDate) {
      setCheckOutDate(dateRange.endDate);
      setShowPicker(false); 
    } else {
      setCheckInDate(null);
      setCheckOutDate(null);
    }
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="mb-2 lg:flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl mb-2">
              {data?.name} hosted by {data.author.name}
            </h2>
            <div>
              <span>
                {data.capacity.adults} Adults, {data.capacity.children} Children
                ,{data.capacity.pets} Pets, {data.capacity.infants} Infants
              </span>
            </div>
            {/* {data.capacity.map((item, index) => (
            <p key={index}>{item}</p>
          ))} */}
          </div>
          <div className="lg:mr-10">
            <Image className="rounded-full" src={data.author.photo} width={50} height={50} />
          </div>
        </div>
        <hr className="mb-3" />
        <div>
          <p>{data.description}</p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Category-{data.category}</h2>
        </div>
        <div>
          <h2 className="font-bold">Most Popular Facilites</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
            {data.popular_facilities?.map((facilities, index) => (
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
                <div className="border-r border-b p-2 relative">
                  <h2>
                    <button onClick={togglePicker}>CheckIn</button>
                  </h2>
                  <div className="absolute">
                    {showPicker && (
                      <DatePicker handleSelect={handleDateSelect} />
                    )}
                  </div>
                  {checkInDate && <small>{checkInDate.toDateString()}</small>}
                </div>
                <div className="border-b p-2">
                  <h2>
                    <button onClick={togglePicker}>CheckOut</button>
                  </h2>
                  {checkOutDate && <small>{checkOutDate.toDateString()}</small>}
                </div>
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
        </div>
      </div>
    </div>
  );
};

export default SingleRoomDetails;
