"use client";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { TbMountain } from "react-icons/tb";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { Libre_Bodoni } from "next/font/google";
import searchIcon from "/public/icons/search.svg";
import Image from "next/image";
import LogInComp from "../../SEC/loginComp";
import AvatarComp from "./avatar";

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
    name: "testimonials",
    path: "/testimonials",
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
  useEffect(() => {
    import("preline");
  }, []);

  return (
    // <div className="sticky top-0 z-50 w-full">
    //   <div className="bg-[#003B95]">
    //     <nav className="flex justify-between items-center px-5 md:px-4 lg:px-3 xl:px-2 py-4 max-w-[1560px] mx-auto">
    //       <Link
    //         href={"/"}
    //         className={`text-2xl text-white ${bodoni.className}`}
    //       >
    //         Dwelling
    //       </Link>

    //       <div className="flex items-center space-x-6 relative">
    //         <Image
    //           src={searchIcon}
    //           alt="Search Icon"
    //           width={20}
    //           height={20}
    //           className="cursor-pointer"
    //         />
    //         <AvatarComp />

    //         <button
    //           className="p-2 text-white rounded-md outline-none"
    //           onClick={toggleOpen}
    //         >
    //           {isOpen ? (
    //             <RxCross2
    //               size={"20"}
    //               className="cursor-pointer text-gray-800 fixed z-50"
    //             />
    //           ) : (
    //             <AiOutlineMenu
    //               size={"20"}
    //               className="text-white cursor-pointer"
    //             />
    //           )}
    //         </button>
    //       </div>
    //     </nav>
    //     <div
    //       className={`flex flex-col space-y-4 py-4 ${
    //         isOpen
    //           ? "block w-full min-h-screen fixed z-40 bg-white top-0 transition"
    //           : "hidden"
    //       }`}
    //     >
    //       <ul className="pt-8">
    //         {navlinks.map(({ id, name, path, icon }) => {
    //           return (
    //             <li key={id} className="p-3 transition hover:bg-gray-100">
    //               <Link
    //                 href={path}
    //                 className="flex items-center space-x-4 capitalize"
    //               >
    //                 <span className="text-3xl">{icon}</span>
    //                 <span className="capitalize">{name}</span>
    //               </Link>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    //   {<LogInComp />}
    // </div>
    <div className="sticky top-0 z-50 w-full">
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800">
        <div
          className="max-w-[1560px] w-full mx-auto px-5 md:px-4 lg:px-3 xl:px-2"
          aria-label="Global"
        >
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className={`flex-none text-2xl font-semibold dark:text-white ${bodoni.className}`}
                aria-label="Brand"
              >
                Dwelling
              </Link>
              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden w-4 h-4"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden w-4 h-4"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                  <a
                    className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500"
                    href="#"
                    aria-current="page"
                  >
                    Landing
                  </a>
                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                    <button
                      type="button"
                      className="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500"
                    >
                      Company
                      <svg
                        className="ml-2 w-2.5 h-2.5 text-gray-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-50 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-gray-800 dark:divide-gray-700 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5">
                      <a
                        className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                          <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z" />
                        </svg>
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
                            Data
                          </span>
                          How you get the most accurate and up-to-date data
                        </div>
                      </a>
                      <div className="my-2 border-t border-gray-100 dark:border-gray-800" />
                      <a
                        className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        </svg>
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
                            Team{" "}
                            <span className="inline ml-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full">
                              We're hiring
                            </span>
                          </span>
                          Meet the people building products to help your
                          business grow
                        </div>
                      </a>
                      <div className="my-2 border-t border-gray-100 dark:border-gray-800" />
                      <a
                        className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                          <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                        </svg>
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
                            Blog
                          </span>
                          The latest news, feature releases, and how to grow
                          with data
                        </div>
                      </a>
                    </div>
                  </div>
                  <a
                    className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500"
                    href="#"
                  >
                    Resources
                  </a>
                  <a
                    className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500"
                    href="#"
                  >
                    Work
                  </a>
                  <div className="pt-3 md:pt-0">
                    <a
                      className="inline-flex justify-center items-center gap-x-2 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800"
                      href="#"
                    >
                      Request demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
