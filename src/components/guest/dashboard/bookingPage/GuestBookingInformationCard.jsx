import React from "react";

import { BiSolidLeaf } from "react-icons/bi";
import { IoMdDoneAll } from "react-icons/io";
import { PiWarningFill } from "react-icons/pi";
import { GiConfirmed } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { SiPayoneer } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";

const dashboardCards = [
  {
    id: 1,
    title: "Total",
    icon: <IoMdDoneAll />,
    project_detail: 18,
    clientPercentage: "+9.18",
    amount: "243",
    arrow: <FiArrowUpRight />,
    bgColor: "#e1c38f",
  },
  {
    id: 2,
    title: 'Active Booking',
    icon: <BiSolidLeaf />,
    clientPercentage: "3.45",
    amount: "2",
    arrow: <FiArrowUpRight />,
},
  {
    id: 3,
    title: "Pending Booking",
    icon: <PiWarningFill />,
    project_detail: 132,
    clientPercentage: "10.24",
    amount: "22",
    arrow: <FiArrowUpRight />,
  },
  {
    id: 4,
    title: "Confirm Booking",
    icon: <GiConfirmed />,
    project_detail: 132,
    clientPercentage: "-3.18",
    amount: "152",
    arrow: <FiArrowDownRight />,
  },
  {
    id: 5,
    title: "Rejected Booking",
    icon: <MdCancel />,
    project_detail: 12,
    clientPercentage: "+183",
    amount: "32",
    arrow: <FiArrowUpRight />,
  },
  {
    id: 6,
    title: "Total Amount Spend",
    icon: <SiPayoneer />,
    project_detail: "75%",
    clientPercentage: "+6.18",
    amount: "$268.45k",
    arrow: <FiArrowUpRight />,
  },
];

const GuestBookingInformationCard = () => {
  return (
    <div className="max-w-[150rem] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-4">
      {/* Card  */}

      <h1 className="text-2xl font-bold dark:text-gray-300 px-4 py-10 sm:px-6   lg:py-4">
        Booking Information:
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-4 items-center sm:px-6">
        {dashboardCards.map(
          ({ id, title, icon, clientPercentage, amount, arrow, bgColor }) => {
            return (
              <div
                key={id}
                className="shadow-md p-4 w-full rounded-md bg-white dark:bg-gray-900 transition-all hover:-translate-y-1"
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl rounded-md ">
                    <div
                      className={`p-2 rounded ${
                        title === "Clients"
                          ? `bg-[${bgColor}] text-[#706f6e]`
                          : title === "Rejected Booking"
                          ? "bg-[#fecdd3] text-[#cf1d1d]"
                          : title === "Total Amount Spend"
                          ? "bg-[#e9d5ff] text-[#a855f7]"
                          : title === "Pending Booking"
                          ? "bg-[#e1bf11] text-[#333333]"
                          : title === "Confirm Booking"
                          ? "bg-[#e9e9e9] text-[#00851b]"
                          : title === "Total"
                          ? "bg-[#e0e0e0] text-[#a4a4a4]"
                          : ""
                          ? "bg-[#e0e0e0] text-[#a4a4a4]"
                          : title === "Active Booking"
                          ? "bg-[#e9e9e9] text-[#00851b]"
                          : ""
                      }`}
                    >
                      {icon}
                    </div>
                  </span>

                  <span></span>

                  <span className="rounded-md text-[#5d91eb] -2 flex">
                    <div
                      className={` flex  ${
                        clientPercentage === "+9.18"
                          ? "text-green-500"
                          : clientPercentage === "+183"
                          ? " text-green-500"
                          : clientPercentage === "+6.18"
                          ? "text-green-500"
                          : clientPercentage === "-3.18"
                          ? "text-red-500 "
                          : clientPercentage === "10.24"
                          ? "text-yellow-500 "
                          : ""
                      }`}
                    >
                      {" "}
                      <div className="mt-1">{arrow} </div> {clientPercentage}%
                    </div>
                  </span>
                </div>
                <p className="mt-5 text-slate-500">{title}</p>
                <h2 className="text-2xl font-bold dark:text-gray-300 pt-5 pb-4">{amount}</h2>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default GuestBookingInformationCard;
