import React from "react";
import { FiUsers } from "react-icons/fi";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { SiPayoneer } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";

const dashboardCards = [
  {
    id: 1,
    title: "Clients",
    icon: <FiUsers />,
    project_detail: 18,
    clientPercentage: "+9.18",
    amount: "3156",
    arrow: <FiArrowUpRight />,
    bgColor: "#e1c38f",
  },
  {
    id: 2,
    title: "Invoices",
    icon: <BsFileEarmarkText />,
    project_detail: 132,
    clientPercentage: "-3.18",
    amount: "167",
    arrow: <FiArrowDownRight />,
  },
  {
    id: 3,
    title: "Sent Invoice",
    icon: <GiSelfLove />,
    project_detail: 12,
    clientPercentage: "+183",
    amount: "$41.56k",
    arrow: <FiArrowUpRight />,
  },
  {
    id: 4,
    title: "Paid",
    icon: <SiPayoneer />,
    project_detail: "75%",
    clientPercentage: "+6.18",
    amount: "$33.16k",
    arrow: <FiArrowUpRight />,
  },
];

const InvoiceListPage = () => {
  return (
    <div className="flex justify-between gap-4 items-center max-w-[150rem] sm:px-6">
      {dashboardCards.map(
        ({ id, title, icon, clientPercentage, amount, arrow, bgColor }) => {
          return (
            <div
              key={id}
              className="shadow-md p-4 w-full rounded-md bg-white transition-all hover:-translate-y-1"
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl rounded-md ">
                  <div
                    className={`p-2 rounded ${
                      title === "Clients"
                        ? `bg-[${bgColor}] text-[#706f6e]`
                        : title === "Invoices"
                        ? "bg-[#a5f3fc] text-[#0891b2]"
                        : title === "Sent Invoice"
                        ? "bg-[#fecdd3] text-[#f43f5e]"
                        : title === "Paid"
                        ? "bg-[#e9d5ff] text-[#a855f7]"
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
                        : ""
                    }`}
                  >
                    {" "}
                    <div className="mt-1">{arrow} </div> {clientPercentage}%
                  </div>
                </span>
              </div>
              <p className="mt-5 text-slate-500">{title}</p>
              <h2 className="text-2xl font-bold pt-5 pb-4">{amount}</h2>
            </div>
          );
        }
      )}
    </div>
  );
};

export default InvoiceListPage;