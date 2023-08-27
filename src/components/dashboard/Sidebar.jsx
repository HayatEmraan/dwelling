// "use client";
// import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { ImUsers } from "react-icons/im";
// import AccordionItem from "./AccordionItem";
import Link from "next/link";
import { TbBrandBooking } from "react-icons/tb";

const navLinks = [
  {
    title: "Dashboard",
    icon: <CiHome />,
    path: "/dashboard",
  },
  {
    title: "Users Management",
    icon: <ImUsers />,
    path: "/dashboard/users",
  },
  {
    title: "Booking Management",
    icon: <TbBrandBooking />,
    path: "/dashboard/booking",
  },
  {
    title: "Invoice",
    icon: <LiaFileInvoiceSolid />,
    path: "/dashboard/invoice",
  },
];

const Sidebar = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = (index) => {
  //     if (isOpen === index) {
  //       return setIsOpen(null);
  //     }
  //     setIsOpen(index);
  //   };

  return (
    <div className="fixed top-0 dark:lg:w-1/6 dark:w-3/4 dark:bg-slate-800 dark:text-white dark:h-full">
      <div className="text-2xl font-semibold px-2 pt-3 pb-4 text-center ">
        <Link href={"/dashboard"}>Admin Panel</Link>
      </div>
      <div className="px-4">
        {navLinks.map((data, index) => {
          return (
            <li className="list-none mt-4" key={index}>
              <Link href={data.path} className="flex items-center space-x-1">
                <span className="text-sm md:text-md">{data.icon}</span>{" "}
                <span className="text-sm md:text-md">{data.title}</span>
              </Link>
            </li>

            // <AccordionItem
            //   toggle={() => toggle(index)}
            //   isOpen={isOpen === index}
            //   key={index}
            //   title={data.title}
            //   desc={data.children}
            //   icon={data.icon}
            // />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
