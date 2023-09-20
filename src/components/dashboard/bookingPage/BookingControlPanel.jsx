"use client";

import { filterbookings } from "@/utils/async/admin/booking/filterbookings";
import { getbookings } from "@/utils/async/admin/booking/getbookings";
import { updatebooking } from "@/utils/async/admin/booking/updatebooking";
import { useState } from "react";

const BookingControlPanel = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);
  const [pageNumber, setPageNumber] = useState(1);
  const handleFilterApproved = async () => {
    const res = await filterbookings("approved");
    setData(res);
  };
  const handleFilterDeclined = async () => {
    const res = await filterbookings("declined");
    setData(res);
  };
  const handlePageNumber = async (page) => {
    const res = await getbookings(page);
    setData(res);
  };
  const handleApprove = async (id) => {
    await updatebooking(id, "approved");
    const res = await getbookings();
    setData(res);
  };
  const handleDecline = async (id) => {
    await updatebooking(id, "declined");
    const res = await getbookings();
    setData(res);
  };
  return (
    <div className="max-w-[150rem] mx-auto px-4 sm:px-6 lg:px-8 ">
      <>
        {/* Table Section */}
        <div className="py-10 sm:px-6 lg:px-6 lg:py-14">
          {/* Card */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                  {/* Header */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                    {/* Input */}
                    <div className="sm:col-span-1">
                      <div className="relative">
                        <h1 className="text-2xl font-bold">Control Panel:</h1>
                        <span>Manage Your All Booking</span>
                      </div>
                    </div>
                    {/* End Input */}
                    <div className="sm:col-span-2 md:grow">
                      <div className="flex justify-end gap-x-2">
                        <div className="hs-dropdown relative inline-block [--placement:bottom-right]"></div>

                        <div
                          className="hs-dropdown relative inline-block [--placement:bottom-right]"
                          data-hs-dropdown-auto-close="inside"
                        >
                          <button
                            id="hs-as-table-table-filter-dropdown"
                            type="button"
                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                          >
                            <svg
                              className="w-3 h-3"
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            Filter
                            <span className="pl-2 text-xs font-semibold text-blue-600 border-l border-gray-200 dark:border-gray-700 dark:text-blue-500">
                              1
                            </span>
                          </button>
                          <div
                            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-[12rem] z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                            aria-labelledby="hs-as-table-table-filter-dropdown"
                          >
                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                              <label
                                onClick={handleFilterApproved}
                                htmlFor="hs-as-filters-dropdown-pending"
                                className="flex py-2.5 px-3 cursor-pointer"
                              >
                                <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                                  Approved
                                </span>
                              </label>
                              <label
                                onClick={handleFilterDeclined}
                                htmlFor="hs-as-filters-dropdown-declined"
                                className="flex py-2.5 px-3 cursor-pointer"
                              >
                                <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                                  Declined
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Header */}
                  {/* Table */}
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-slate-800">
                      <tr>
                        <th scope="col" className="pl-6 py-3 text-left">
                          <label
                            htmlFor="hs-at-with-checkboxes-main"
                            className="flex"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-main"
                            />
                            <span className="sr-only">Checkbox</span>
                          </label>
                        </th>
                        <th scope="col" className="pr-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Order ID
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Date
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Payment Status
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Payment Method
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Status
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-right" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {data?.data?.map((item, index) => {
                        return (
                          <tr>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="pl-6 py-2">
                                <label
                                  htmlFor="hs-at-with-checkboxes-1"
                                  className="flex"
                                >
                                  <input
                                    type="checkbox"
                                    className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    id="hs-at-with-checkboxes-1"
                                  />
                                  <span className="sr-only">Checkbox</span>
                                </label>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="pr-6 py-2">
                                <p className="text-sm text-blue-600 decoration-2 dark:text-blue-500">
                                  #{item?.orderID}
                                </p>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {new Date(item?.date).toLocaleTimeString()}
                                </span>
                              </div>
                            </td>
                            {/* Payment Status  */}
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-2">
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  <svg
                                    className="w-2.5 h-2.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                  </svg>
                                  {item?.status}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-2">
                                <div className="flex items-center gap-x-2">
                                  {item?.gateway === "stripe" ? (
                                    <>
                                      {item?.str?.brand === "visa" ? (
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="400"
                                          width="248"
                                          className="w-8 h-7"
                                          viewBox="-74.7 -40.204 647.4 241.224"
                                        >
                                          <defs>
                                            <linearGradient
                                              x1="0"
                                              y1="0"
                                              x2="1"
                                              y2="0"
                                              gradientUnits="userSpaceOnUse"
                                              gradientTransform="scale(89.72793 -89.72793) rotate(-20.218 .966 -.457)"
                                              spreadMethod="pad"
                                              id="b"
                                            >
                                              <stop
                                                offset="0"
                                                stop-color="#222357"
                                              />
                                              <stop
                                                offset="1"
                                                stop-color="#254aa5"
                                              />
                                            </linearGradient>
                                            <clipPath
                                              clipPathUnits="userSpaceOnUse"
                                              id="a"
                                            >
                                              <path d="M413.742 90.435c-.057-4.494 4.005-7.002 7.065-8.493 3.144-1.53 4.2-2.511 4.188-3.879-.024-2.094-2.508-3.018-4.833-3.054-4.056-.063-6.414 1.095-8.289 1.971l-1.461-6.837c1.881-.867 5.364-1.623 8.976-1.656 8.478 0 14.025 4.185 14.055 10.674.033 8.235-11.391 8.691-11.313 12.372.027 1.116 1.092 2.307 3.426 2.61 1.155.153 4.344.27 7.959-1.395l1.419 6.615c-1.944.708-4.443 1.386-7.554 1.386-7.98 0-13.593-4.242-13.638-10.314m34.827 9.744c-1.548 0-2.853-.903-3.435-2.289l-12.111-28.917h8.472l1.686 4.659h10.353l.978-4.659h7.467l-6.516 31.206h-6.894m1.185-8.43l2.445-11.718h-6.696l4.251 11.718m-46.284 8.43l-6.678-31.206h8.073l6.675 31.206h-8.07m-11.943 0l-8.403-21.24-3.399 18.06c-.399 2.016-1.974 3.18-3.723 3.18h-13.737l-.192-.906c2.82-.612 6.024-1.599 7.965-2.655 1.188-.645 1.527-1.209 1.917-2.742l6.438-24.903h8.532l13.08 31.206h-8.478" />
                                            </clipPath>
                                          </defs>
                                          <g
                                            clip-path="url(#a)"
                                            transform="matrix(4.98469 0 0 -4.98469 -1804.82 502.202)"
                                          >
                                            <path
                                              d="M0 0l98.437 36.252 22.394-60.809-98.436-36.252"
                                              fill="url(#b)"
                                              transform="translate(351.611 96.896)"
                                            />
                                          </g>
                                        </svg>
                                      ) : (
                                        <svg
                                          className="w-5 h-5"
                                          width={400}
                                          height={248}
                                          viewBox="0 0 400 248"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip05asd)">
                                            <path
                                              d="M254 220.8H146V26.4H254V220.8Z"
                                              fill="#FF5F00"
                                            />
                                            <path
                                              d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                                              fill="#EB001B"
                                            />
                                            <path
                                              d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                                              fill="#F79E1B"
                                            />
                                          </g>
                                          <defs>
                                            <clipPath id="clip05asd">
                                              <rect
                                                width={400}
                                                height="247.2"
                                                fill="white"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      )}
                                      <span className="text-sm text-gray-600 dark:text-gray-400">
                                        •••• {item?.str?.last4}
                                      </span>{" "}
                                    </>
                                  ) : (
                                    "SSL Commerz"
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-2">
                                {item?.update === "approved" && (
                                  <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                    <svg
                                      className="w-2.5 h-2.5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                    {item?.update}
                                  </span>
                                )}
                                {!item?.update && (
                                  <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-green-200">
                                    <svg
                                      className="w-2.5 h-2.5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    Pending
                                  </span>
                                )}
                                {item?.update === "declined" && (
                                  <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200">
                                    <svg
                                      className="w-2.5 h-2.5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                    </svg>
                                    {item?.update}
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="px-6 py-1.5 flex justify-end">
                                <div className="group inline-flex items-center divide-x divide-gray-300 border border-gray-300 bg-white shadow-sm rounded-md transition-all dark:divide-gray-700 dark:bg-slate-700 dark:border-gray-700">
                                  <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                                    <button
                                      id="hs-table-dropdown-1"
                                      type="button"
                                      className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-r-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                    >
                                      <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                      </svg>
                                    </button>
                                    <div
                                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2  dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                                      aria-labelledby="hs-table-dropdown-1"
                                    >
                                      <div className="py-2 first:pt-0 last:pb-0">
                                        <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-600">
                                          Change Status
                                        </span>
                                        <button
                                          className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                          onClick={() =>
                                            handleApprove(item?._id)
                                          }
                                        >
                                          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                            <svg
                                              className="w-3 h-3"
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={20}
                                              height={20}
                                              fill="currentColor"
                                              viewBox="0 0 16 16"
                                            >
                                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                            Approved
                                          </span>
                                        </button>
                                        <button
                                          className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                          onClick={() =>
                                            handleDecline(item?._id)
                                          }
                                        >
                                          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200">
                                            <svg
                                              className="w-2.5 h-2.5"
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={16}
                                              height={16}
                                              fill="currentColor"
                                              viewBox="0 0 16 16"
                                            >
                                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                            </svg>
                                            Declined
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {/* End Table */}
                  {/* Footer */}
                  <div className="px-6 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {data?.startView}
                        </span>{" "}
                        results of {data?.totalView} entries
                      </p>
                    </div>
                    <div className="px-0 py-4 grid gap-3 md:flex md:justify-center md:items-center border-t border-gray-200 dark:border-gray-700">
                      <div className="inline-flex gap-x-2">
                        <button
                          onClick={() => {
                            if (pageNumber > 1) {
                              setPageNumber(pageNumber - 1);
                              handlePageNumber(pageNumber - 1);
                            }
                          }}
                          type="button"
                          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        >
                          <svg
                            className="w-3 h-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                            />
                          </svg>
                          Prev
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (pageNumber < data?.totalPages) {
                              setPageNumber(pageNumber + 1);
                              handlePageNumber(pageNumber + 1);
                            }
                          }}
                          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        >
                          Next
                          <svg
                            className="w-3 h-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Footer */}
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Table Section */}
      </>
    </div>
  );
};

export default BookingControlPanel;
