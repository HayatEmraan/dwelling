"use client";
import Image from "next/image";
import React, { useState } from "react";

const PropertyModal = ({ data: madalData, title, subtitle, fullArray }) => {

  console.log(fullArray?.data);

  const findModal = fullArray?.data?.find((item) => item._id === madalData._id);
  console.log(findModal);
  const [data, setModalData] = useState(madalData);
  const resortName = data?.name;
  const city = data?.location?.city;
  const country = data?.location?.country;
  const region = data?.location?.region;
  const guests = data?.availability?.guests;
  const bedrooms = data?.availability?.bedrooms;
  const beds = data?.availability?.beds;
  const baths = data?.availability?.baths;
  const adults = data?.capacity?.adults;
  const children = data?.capacity?.children;
  const pets = data?.capacity?.pets;
  const infants = data?.capacity?.infants;
  const authorName = data?.author?.name;
  const authorPhoto = data?.author?.photo;
  const img = data?.images[0];
  const img2 = data?.images[1];
  const img3 = data?.images[2];
  const startDate = data?.dateRange?.startDate;
  const startD = new Date(startDate);
  const endDate = data?.dateRange?.endDate;
  const endD = new Date(endDate);
  const paymentAllIMG = data?.payment_methods;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const start = startD.toLocaleDateString(undefined, options);
  const end = endD.toLocaleDateString(undefined, options);

  return (
    <>
      <div
        id="hs-ai-invoice-modal"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
          <div className="flex flex-col bg-white  shadow-sm rounded-xl dark:bg-gray-800  dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-700 via-blue-800 to-fuchsia-800 rounded-t-xl">
              <h3 className="font-bold text-xl bg-gradient-to-br from-blue-800 via-fuchsia-300 to-white bg-clip-text text-transparent dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-ai-invoice-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            {/* Main part  */}

            <div className="p-4 overflow-y-auto">
              {/* location & people info */}
              <div className="border-2 my-5 mx-10 border-gray-200 justify-between items-center">
                <h1 className="pl-8 p-2 font-semibold  text-gray-600 bg-gray-200">
                  {subtitle} Confirmation Details
                </h1>

                <div className="flex flex-col lg:flex-row gap-2 transition-all lg:gap-6 justify-center items-center mt-8">
                  <img
                    className="rounded-lg duration-300 hover:blur-none hover:scale-110 w-9/12 lg:w-56 my-4"
                    src={img}
                    alt=""
                  />
                  <img
                    className="rounded-lg duration-300 hidden lg:block hover:scale-110 w-36 lg:w-56 my-4"
                    src={img2}
                    alt=""
                  />
                  <img
                    className="rounded-lg hidden lg:block duration-300 hover:scale-110 w-36 lg:w-56 my-4"
                    src={img3}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-xs italic text-gray-400">
                  photo: View of {resortName}
                </h1>

                <hr className="my-8 mx-8" />

                <div className=" flex justify-between mx-8">
                  <h1 className="font-bold">
                    Check In Date: <br />{" "}
                    <span className="font-light">{start}</span>{" "}
                  </h1>
                  <h1 className="font-bold">
                    Check Out Date: <br />{" "}
                    <span className="font-light">{end}</span>{" "}
                  </h1>
                </div>

                {/* People Info  */}

                <div className="mt-8 mx-8">
                  <h1 className="font-bold">Adults & Childrens:</h1>
                  <h1>
                    {" "}
                    {`${adults ? `${adults}` : "0"}`} Adults &{" "}
                    {`${children ? `${children}` : "0"}`} Children &{" "}
                    {`${infants ? `${infants}` : "0"}`} Infants &{" "}
                    {`${pets ? `${pets}` : "0"}`} Pets
                  </h1>
                </div>

                {/* Location card  */}
                <div className="flex flex-col lg:flex-row justify-between items-baseline">
                  <div className="mt-8 mx-8">
                    <h1 className="font-bold">Room & Location Info:</h1>
                    <div>
                      <h1>
                        Resort Name:{" "}
                        <span className="font-semibold">{resortName}</span>
                      </h1>
                      <h1 className="mt-1">
                        City: <span className=" font-semibold">{city}</span>
                      </h1>
                      <h1 className="mt-1">
                        Country:{" "}
                        <span className=" font-semibold">{country}</span>
                      </h1>
                      <h1 className="my-6">
                        Room Capacity: <br />{" "}
                        <span className="font-semibold">
                          {guests} Guests, {bedrooms} Bedrooms with {beds} Beds.{" "}
                          {baths} Baths
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className="hidden lg:flex flex-col scale-75 justify-center items-center">
                    <h1 className="font-bold text-sm">Author Info:</h1>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img
                        className="rounded-full w-2/5 my-1"
                        src={authorPhoto}
                        alt=""
                      />
                      <div className="flex flex-col justify-center items-center">
                        <h1 className="text-sm italic">Name: </h1>
                        <span className="font-semibold text-sm">
                          {authorName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-3 mx-8">
                  <h2 className="font-bold">Most Popular Facilities</h2>
                  <div className="flex flex-wrap gap-3 mt-5">
                    {data?.popular_facilities.map((facilities, index) => (
                      <div key={index} className="flex items-center">
                        <Image
                          className="mr-2"
                          src={facilities.image}
                          width={10}
                          height={10}
                        ></Image>
                        <p className="flex text-md">{facilities.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* payment info  */}
                <div className="my-12 mx-8">
                  <h1 className="font-bold">Payment method:</h1>
                  <div>
                    <div>
                      <div className="flex flex-wrap  gap-4 items-center lg:pr-3">
                        {paymentAllIMG?.map((pay, index) => (
                          <div key={index}>
                            <Image
                              src={pay?.image}
                              width={40}
                              height={40}
                              alt={pay?.providerName}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <h1 className="mt-1">
                      Payment via{" "}
                      <span className="font-bold">Stripe / SSL Commerz</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                type="button"
                className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-ai-invoice-modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyModal;
