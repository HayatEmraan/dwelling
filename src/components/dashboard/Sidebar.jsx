// "use client";
// import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { ImUsers } from "react-icons/im";
// import AccordionItem from "./AccordionItem";
import Link from "next/link";
import { TbBrandBooking } from "react-icons/tb";
import ActiveLink from "./ActiveLink/ActiveLink";
import { AiFillHome, AiOutlinePropertySafety } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";

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
    title: "Invoice Management",
    icon: <LiaFileInvoiceSolid />,
    path: "/dashboard/invoice",
  },
  {
    title: "Property Management",
    icon: <AiOutlinePropertySafety />,
    path: "/dashboard/property",
  },
  {
    title: "Host Management",
    icon: <GrHostMaintenance />,
    path: "/dashboard/host",
  },
  {
    title: "Setting",
    icon: <BsGear />,
    path: "/dashboard/setting",
  },
  {
    title: "Home",
    icon: <AiFillHome />,
    path: "/",
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
        <ActiveLink navLinks={navLinks} />
      </div>
    </div>
  );
};

export default Sidebar;
