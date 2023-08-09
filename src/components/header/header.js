"use client";
import React, { useState } from "react";
import { RxAvatar, RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { TbMountain } from "react-icons/tb";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { Libre_Bodoni } from "next/font/google";
import Image from "next/image";
import searchIcon from "../../assets/icons/search.svg";

const navlinks = [
  {
    id: 1,
    name: "home",
    path: "/",
    icon: <MdOutlineAddHomeWork />,
  },
  {
    id: 2,
    name: "about",
    path: "/about",
    icon: <TbMountain />,
  },
  {
    id: 3,
    name: "service",
    path: "/service",
    icon: <TbMountain />,
  },
  {
    id: 4,
    name: "blog",
    path: "/blog",
    icon: <TbMountain />,
  },
  {
    id: 5,
    name: "testimonils",
    path: "/testimonils",
    icon: <TbMountain />,
  },
  {
    id: 6,
    name: "contact",
    path: "/contact",
    icon: <TbMountain />,
  },
];

// google fonts
const bodoni = Libre_Bodoni({
  weight: "400",
  subsets: ["latin"],
});

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="relative">
      <div className="bg-[#003B95]">
        <nav className="flex justify-between items-center px-4 py-4">
          <div className={`text-2xl text-white ${bodoni.className}`}>
            Dwelling
          </div>

          <div className="flex items-center space-x-6">
            <Image
              src={searchIcon}
              alt="Search Icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <RxAvatar size="24" className="text-white" />

            <button
              className="p-2 text-white rounded-md outline-none"
              onClick={toggleOpen}
            >
              {isOpen ? (
                <RxCross2
                  size={"20"}
                  className="cursor-pointer text-gray-800 relative z-20"
                />
              ) : (
                <AiOutlineMenu
                  size={"20"}
                  className="text-white cursor-pointer"
                />
              )}
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`flex flex-col space-y-4 px-4 py-4 ${
          isOpen
            ? "block w-full h-screen absolute bg-white top-0 transition"
            : "hidden"
        }`}
      >
        <ul className="pt-8">
          {navlinks.map(({ id, name, path, icon }) => {
            return (
              <li key={id} className="flex items-center space-x-4 mt-6">
                <span className="text-3xl">{icon}</span>
                <Link href={path} className="capitalize">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
