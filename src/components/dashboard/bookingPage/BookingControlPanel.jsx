"use client";
import { filterbookings } from "@/utils/async/admin/booking/filterbookings";
import { getbookings } from "@/utils/async/admin/booking/getbookings";
import { updatebooking } from "@/utils/async/admin/booking/updatebooking";
import { useState } from "react";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approved it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Approved!", "Your booking has been Approved.", "success");
        setData(res);
      }
    });
  };

  const handleDecline = async (id) => {
    await updatebooking(id, "declined");
    const res = await getbookings();

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Declined it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Declined!',
          'Your booking has been Declined.',
          'success'
        )
        setData(res);
      }
    })

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
                          <tr key={index}>
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
                                      {item?.str?.brand === "visa" && (
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
                                                stopColor="#222357"
                                              />
                                              <stop
                                                offset="1"
                                                stopColor="#254aa5"
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
                                            clipPath="url(#a)"
                                            transform="matrix(4.98469 0 0 -4.98469 -1804.82 502.202)"
                                          >
                                            <path
                                              d="M0 0l98.437 36.252 22.394-60.809-98.436-36.252"
                                              fill="url(#b)"
                                              transform="translate(351.611 96.896)"
                                            />
                                          </g>
                                        </svg>
                                      )}
                                      {item?.str?.brand === "discover" && (
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="800"
                                          height="248"
                                          className="w-8 h-7"
                                          viewBox="0 0 192.756 192.756"
                                        >
                                          <g
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                          >
                                            <path
                                              fill="#fff"
                                              d="M0 0h192.756v192.756H0V0z"
                                            />
                                            <path d="M16.437 74.7H8.504v27.611h7.83c4.225 0 7.212-.928 9.891-3.194 3.091-2.575 5.048-6.491 5.048-10.612 0-8.138-6.079-13.805-14.836-13.805zm6.285 20.811c-1.751 1.443-3.916 2.164-7.418 2.164h-1.442V79.439h1.442c3.502 0 5.563.618 7.418 2.163 1.854 1.648 2.988 4.225 2.988 6.903-.001 2.679-1.134 5.358-2.988 7.006zM33.746 102.312h5.357V74.7h-5.357v27.612zM52.29 85.312c-3.297-1.236-4.224-1.957-4.224-3.503 0-1.751 1.751-2.987 4.018-2.987 1.648 0 2.988.618 4.327 2.163l2.885-3.605c-2.37-2.061-5.151-3.091-8.139-3.091-4.945 0-8.654 3.4-8.654 7.933 0 3.812 1.751 5.667 6.8 7.521 2.164.721 3.194 1.236 3.709 1.545 1.133.722 1.648 1.751 1.648 2.885 0 2.267-1.751 3.915-4.224 3.915s-4.636-1.339-5.873-3.709l-3.399 3.4c2.473 3.605 5.46 5.254 9.581 5.254 5.563 0 9.479-3.709 9.479-9.066-.001-4.431-1.855-6.389-7.934-8.655zM61.872 88.505c0 8.139 6.388 14.424 14.629 14.424 2.267 0 4.327-.413 6.697-1.546v-6.388c-2.164 2.163-4.018 3.091-6.491 3.091-5.357 0-9.272-4.018-9.272-9.582 0-5.254 4.018-9.478 9.066-9.478 2.576 0 4.533.927 6.697 3.091v-6.285c-2.267-1.237-4.224-1.751-6.594-1.751-8.139.001-14.732 6.492-14.732 14.424z" />
                                            <path
                                              d="M99.992 74.082c-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424.001-8.035-6.388-14.423-14.732-14.423z"
                                              fill="#db8135"
                                            />
                                            <path
                                              d="M99.992 74.082c-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424.001-8.035-6.388-14.423-14.732-14.423zm0 14.423h14.732-14.732z"
                                              fill="#db8135"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#db8135"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#db8137"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#dc8337"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#dc8539"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#dc853a"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#dc853c"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#dd873e"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#dd873e"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#dd883f"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#dd8841"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#de8a41"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#de8a43"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#de8a44"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732c0-8.036-6.389-14.423-14.732-14.423-8.14 0-14.734 6.388-14.734 14.217 0 8.449 6.285 14.63 14.734 14.63 8.24 0 14.732-6.285 14.732-14.424H99.992z"
                                              fill="#de8c46"
                                            />
                                            <path
                                              d="M99.992 88.505h14.732-14.732zm14.733 0c0-.125-.002-.25-.006-.375v-.005a11.204 11.204 0 0 0-.014-.368v-.01a13.897 13.897 0 0 0-.023-.36c0-.005 0-.01-.002-.015a13.614 13.614 0 0 0-.029-.353c-.002-.007-.002-.013-.002-.02a10.44 10.44 0 0 0-.041-.345v-.003a18.44 18.44 0 0 0-.045-.328c-.002-.011-.004-.022-.004-.033-.018-.108-.035-.215-.055-.323l-.006-.036-.031-.175-.041-.207-.021-.099c-.018-.084-.035-.168-.055-.251-.008-.039-.02-.077-.027-.116l-.059-.234-.059-.22-.029-.108c-.021-.077-.045-.153-.066-.229l-.035-.119c-1.824-5.883-7.309-10.092-14.082-10.092-5.962 0-11.093 3.428-13.413 8.338a14.568 14.568 0 0 0-1.32 5.984c.011 1.785.304 3.468.837 5.011l.046.129.02.054a14.705 14.705 0 0 0 2.435 4.248c2.65 3.162 6.686 5.083 11.395 5.083 6.695 0 12.234-4.148 14.078-10.07l.094-.318v-.001a14.66 14.66 0 0 0 .516-2.899l.002-.002c.008-.124.018-.249.023-.374v-.001a15.994 15.994 0 0 0 .019-.758z"
                                              fill="#df8e47"
                                            />
                                            <path
                                              d="M99.992 88.505h14.629c0-5.604-3.209-10.455-7.875-12.879-2.008-.988-4.295-1.544-6.754-1.544-3.165 0-6.092.967-8.493 2.605-3.707 2.633-6.138 6.94-6.138 11.818 0 5.366 2.942 10.089 7.288 12.635 2.133 1.149 4.624 1.789 7.343 1.789 3.428 0 6.551-1.088 9.031-2.942 3.4-2.688 5.598-6.845 5.598-11.482H99.992z"
                                              fill="#df8e48"
                                            />
                                            <path
                                              d="M99.992 88.505h14.422c0-7.933-6.49-14.423-14.422-14.423-.125 0-.248.002-.371.005h-.01c-7.758.203-14.044 6.613-14.044 14.418a14.536 14.536 0 0 0 9.753 13.744c1.454.443 3.021.681 4.671.681 2.014 0 3.922-.377 5.658-1.062a14.541 14.541 0 0 0 8.764-13.362H99.992v-.001z"
                                              fill="#df8e4a"
                                            />
                                            <path
                                              d="M99.992 88.505h14.32c0-7.83-6.389-14.321-14.32-14.321-7.934 0-14.322 6.491-14.322 14.321a14.29 14.29 0 0 0 14.322 14.321 14.29 14.29 0 0 0 14.32-14.321h-14.32z"
                                              fill="#df904a"
                                            />
                                            <path
                                              d="M99.992 88.505h14.217c0-7.83-6.389-14.115-14.217-14.115-7.831 0-14.219 6.285-14.219 14.115 0 7.831 6.388 14.218 14.219 14.218 7.828 0 14.217-6.388 14.217-14.218H99.992z"
                                              fill="#e0914c"
                                            />
                                            <path
                                              d="M99.992 88.505h14.113c0-7.727-6.387-14.011-14.113-14.011-7.728 0-14.116 6.284-14.116 14.011 0 7.831 6.388 14.115 14.116 14.115 7.727 0 14.113-6.284 14.113-14.115H99.992z"
                                              fill="#e0914e"
                                            />
                                            <path
                                              d="M99.992 88.505H113.9c0-7.624-6.182-13.909-13.908-13.909-7.728 0-13.91 6.285-13.91 13.909 0 7.727 6.182 14.011 13.91 14.011 7.727 0 13.908-6.284 13.908-14.011H99.992z"
                                              fill="#df924f"
                                            />
                                            <path
                                              d="M99.992 88.505h13.805c0-7.624-6.182-13.805-13.805-13.805-7.625 0-13.807 6.182-13.807 13.805s6.182 13.806 13.807 13.806c7.623 0 13.805-6.183 13.805-13.806H99.992z"
                                              fill="#e09351"
                                            />
                                            <path
                                              d="M99.992 88.505h13.701c0-7.521-6.182-13.599-13.701-13.599-7.522 0-13.704 6.078-13.704 13.599 0 7.624 6.182 13.703 13.704 13.703 7.52 0 13.701-6.079 13.701-13.703H99.992z"
                                              fill="#e09552"
                                            />
                                            <path
                                              d="M99.992 88.505h13.496c0-7.417-5.977-13.496-13.496-13.496-7.522 0-13.601 6.079-13.601 13.496 0 7.521 6.079 13.599 13.601 13.599 7.52 0 13.496-6.078 13.496-13.599H99.992z"
                                              fill="#e09554"
                                            />
                                            <path
                                              d="M99.992 88.505h13.393a13.368 13.368 0 0 0-13.393-13.393 13.367 13.367 0 0 0-13.394 13.393c0 7.418 5.975 13.497 13.394 13.497 7.416 0 13.393-6.079 13.393-13.497H99.992z"
                                              fill="#e09555"
                                            />
                                            <path
                                              d="M99.992 88.505h13.289c0-7.315-5.975-13.29-13.289-13.29-7.316 0-13.292 5.975-13.292 13.29 0 7.418 5.976 13.291 13.292 13.291a13.257 13.257 0 0 0 13.289-13.291H99.992z"
                                              fill="#e19756"
                                            />
                                            <path
                                              d="M99.992 88.505h13.186c0-7.211-5.871-13.084-13.186-13.084-7.316 0-13.188 5.873-13.188 13.084a13.146 13.146 0 0 0 13.188 13.187 13.146 13.146 0 0 0 13.186-13.187H99.992z"
                                              fill="#e19757"
                                            />
                                            <path
                                              d="M99.992 88.505h12.98c0-7.211-5.77-12.981-12.98-12.981-7.213 0-13.085 5.77-13.085 12.981 0 7.212 5.873 13.084 13.085 13.084 7.211 0 12.98-5.873 12.98-13.084h-12.98z"
                                              fill="#e29959"
                                            />
                                            <path
                                              d="M99.992 88.505h12.877c0-7.109-5.77-12.878-12.877-12.878-7.11 0-12.879 5.769-12.879 12.878s5.77 12.981 12.879 12.981c7.107 0 12.877-5.872 12.877-12.981H99.992z"
                                              fill="#e2995b"
                                            />
                                            <path
                                              d="M99.992 88.505h12.773c0-7.005-5.77-12.775-12.773-12.775-7.007 0-12.776 5.77-12.776 12.775 0 7.109 5.77 12.775 12.776 12.775 7.004 0 12.773-5.666 12.773-12.775H99.992z"
                                              fill="#e29b5b"
                                            />
                                            <path
                                              d="M99.992 88.505h12.672c0-6.903-5.668-12.569-12.672-12.569-7.007 0-12.673 5.666-12.673 12.569 0 7.006 5.667 12.672 12.673 12.672 7.004 0 12.672-5.667 12.672-12.672H99.992z"
                                              fill="#e29b5d"
                                            />
                                            <path
                                              d="M99.992 88.505h12.465a12.442 12.442 0 0 0-12.465-12.466c-6.904 0-12.467 5.563-12.467 12.466s5.563 12.57 12.467 12.57c6.902 0 12.465-5.667 12.465-12.57H99.992z"
                                              fill="#e39d5f"
                                            />
                                            <path
                                              d="M99.992 88.505h12.361c0-6.8-5.562-12.363-12.361-12.363-6.801 0-12.364 5.563-12.364 12.363 0 6.903 5.563 12.466 12.364 12.466 6.799 0 12.361-5.563 12.361-12.466H99.992z"
                                              fill="#e39d61"
                                            />
                                            <path
                                              d="M99.992 88.505h12.26c0-6.697-5.461-12.26-12.26-12.26-6.801 0-12.261 5.563-12.261 12.26 0 6.8 5.46 12.26 12.261 12.26 6.799 0 12.26-5.46 12.26-12.26h-12.26z"
                                              fill="#e39f63"
                                            />
                                            <path
                                              d="M99.992 88.505h12.156c0-6.697-5.461-12.054-12.156-12.054-6.698 0-12.158 5.357-12.158 12.054s5.46 12.158 12.158 12.158c6.695 0 12.156-5.461 12.156-12.158H99.992z"
                                              fill="#e39f63"
                                            />
                                            <path
                                              d="M99.992 88.505h11.949c0-6.593-5.355-11.951-11.949-11.951-6.595 0-11.952 5.357-11.952 11.951 0 6.697 5.357 12.054 11.952 12.054 6.594 0 11.949-5.357 11.949-12.054H99.992z"
                                              fill="#e39f64"
                                            />
                                            <path
                                              d="M99.992 88.505h11.848c0-6.49-5.254-11.848-11.848-11.848-6.595 0-11.849 5.358-11.849 11.848 0 6.594 5.254 11.952 11.849 11.952 6.594 0 11.848-5.358 11.848-11.952H99.992z"
                                              fill="#e4a166"
                                            />
                                            <path
                                              d="M99.992 88.505h11.744c0-6.49-5.254-11.745-11.744-11.745-6.492 0-11.746 5.254-11.746 11.745s5.254 11.746 11.746 11.746c6.49 0 11.744-5.255 11.744-11.746H99.992z"
                                              fill="#e4a367"
                                            />
                                            <path
                                              d="M99.992 88.505h11.641c0-6.387-5.254-11.539-11.641-11.539-6.389 0-11.643 5.151-11.643 11.539 0 6.491 5.254 11.642 11.643 11.642 6.387 0 11.641-5.151 11.641-11.642H99.992z"
                                              fill="#e4a369"
                                            />
                                            <path
                                              d="M99.992 88.505h11.436c0-6.284-5.049-11.436-11.436-11.436-6.389 0-11.437 5.152-11.437 11.436 0 6.388 5.048 11.539 11.437 11.539 6.387 0 11.436-5.151 11.436-11.539H99.992z"
                                              fill="#e4a36a"
                                            />
                                            <path
                                              d="M99.992 88.505h11.332a11.301 11.301 0 0 0-11.332-11.333 11.3 11.3 0 0 0-11.334 11.333c0 6.285 5.048 11.436 11.334 11.436 6.283 0 11.332-5.151 11.332-11.436H99.992z"
                                              fill="#e5a56c"
                                            />
                                            <path
                                              d="M99.992 88.505h11.229c0-6.181-5.049-11.229-11.229-11.229-6.183 0-11.231 5.048-11.231 11.229 0 6.182 5.048 11.23 11.231 11.23 6.18 0 11.229-5.048 11.229-11.23H99.992z"
                                              fill="#e5a56c"
                                            />
                                            <path
                                              d="M99.992 88.505h11.125c0-6.078-5.047-11.023-11.125-11.023-6.08 0-11.128 4.945-11.128 11.023 0 6.182 5.048 11.126 11.128 11.126 6.078 0 11.125-4.944 11.125-11.126H99.992z"
                                              fill="#e5a76e"
                                            />
                                            <path
                                              d="M99.992 88.505h10.92c0-5.975-4.842-10.92-10.92-10.92-6.08 0-10.921 4.945-10.921 10.92 0 6.079 4.842 11.024 10.921 11.024 6.078 0 10.92-4.945 10.92-11.024h-10.92z"
                                              fill="#e5a770"
                                            />
                                            <path
                                              d="M99.992 88.505h10.816c0-5.975-4.842-10.817-10.816-10.817-5.977 0-10.819 4.842-10.819 10.817 0 5.976 4.842 10.818 10.819 10.818 5.975 0 10.816-4.842 10.816-10.818H99.992z"
                                              fill="#e6a970"
                                            />
                                            <path
                                              d="M99.992 88.505h10.713c0-5.872-4.842-10.714-10.713-10.714-5.874 0-10.716 4.842-10.716 10.714 0 5.976 4.842 10.714 10.716 10.714 5.871 0 10.713-4.738 10.713-10.714H99.992z"
                                              fill="#e6a972"
                                            />
                                            <path
                                              d="M99.992 88.505h10.611c0-5.769-4.74-10.508-10.611-10.508-5.874 0-10.613 4.739-10.613 10.508a10.597 10.597 0 0 0 10.613 10.612 10.597 10.597 0 0 0 10.611-10.612H99.992z"
                                              fill="#e6ab74"
                                            />
                                            <path
                                              d="M99.992 88.505h10.404A10.377 10.377 0 0 0 99.992 78.1a10.377 10.377 0 0 0-10.407 10.405c0 5.77 4.636 10.509 10.407 10.509 5.768 0 10.404-4.739 10.404-10.509H99.992z"
                                              fill="#e6ab75"
                                            />
                                            <path
                                              d="M99.992 88.505h10.301c0-5.667-4.635-10.302-10.301-10.302-5.667 0-10.304 4.636-10.304 10.302 0 5.77 4.636 10.303 10.304 10.303a10.266 10.266 0 0 0 10.301-10.303H99.992z"
                                              fill="#e7ad77"
                                            />
                                            <path
                                              d="M99.992 88.505h10.199c0-5.563-4.533-10.199-10.199-10.199-5.667 0-10.201 4.636-10.201 10.199 0 5.667 4.533 10.2 10.201 10.2a10.157 10.157 0 0 0 10.199-10.2H99.992z"
                                              fill="#e7ad77"
                                            />
                                            <path
                                              d="M99.992 88.505h10.096c0-5.563-4.533-9.994-10.096-9.994-5.564 0-10.098 4.431-10.098 9.994 0 5.564 4.533 10.097 10.098 10.097 5.562 0 10.096-4.533 10.096-10.097H99.992z"
                                              fill="#e8af79"
                                            />
                                            <path
                                              d="M99.992 88.505h9.889c0-5.46-4.43-9.89-9.889-9.89-5.461 0-9.892 4.43-9.892 9.89 0 5.564 4.43 9.994 9.892 9.994 5.459 0 9.889-4.43 9.889-9.994h-9.889z"
                                              fill="#e8af7b"
                                            />
                                            <path
                                              d="M99.992 88.505h9.787c0-5.357-4.328-9.788-9.787-9.788-5.461 0-9.789 4.431-9.789 9.788 0 5.46 4.327 9.788 9.789 9.788 5.459 0 9.787-4.327 9.787-9.788h-9.787z"
                                              fill="#e8b17b"
                                            />
                                            <path
                                              d="M99.992 88.505h9.684a9.674 9.674 0 0 0-9.684-9.684 9.674 9.674 0 0 0-9.686 9.684 9.674 9.674 0 0 0 9.686 9.685 9.675 9.675 0 0 0 9.684-9.685h-9.684z"
                                              fill="#e8b17d"
                                            />
                                            <path
                                              d="M99.992 88.505h9.58c0-5.254-4.326-9.478-9.58-9.478-5.255 0-9.583 4.224-9.583 9.478s4.327 9.582 9.583 9.582c5.254 0 9.58-4.327 9.58-9.582h-9.58z"
                                              fill="#e8b17e"
                                            />
                                            <path
                                              d="M99.992 88.505h9.375c0-5.151-4.225-9.375-9.375-9.375a9.344 9.344 0 0 0-9.376 9.375c0 5.254 4.121 9.478 9.376 9.478 5.15 0 9.375-4.224 9.375-9.478h-9.375z"
                                              fill="#e9b381"
                                            />
                                            <path
                                              d="M99.992 88.505h9.271a9.233 9.233 0 0 0-9.271-9.272 9.234 9.234 0 0 0-9.273 9.272 9.235 9.235 0 0 0 9.273 9.273 9.234 9.234 0 0 0 9.271-9.273h-9.271z"
                                              fill="#e9b381"
                                            />
                                            <path
                                              d="M99.992 88.505h9.168c0-5.048-4.121-9.169-9.168-9.169-5.049 0-9.17 4.121-9.17 9.169s4.121 9.169 9.17 9.169c5.047 0 9.168-4.121 9.168-9.169h-9.168z"
                                              fill="#e9b583"
                                            />
                                            <path
                                              d="M99.992 88.505h9.066c0-4.945-4.123-8.963-9.066-8.963-4.946 0-9.067 4.018-9.067 8.963 0 5.048 4.121 9.066 9.067 9.066 4.943 0 9.066-4.018 9.066-9.066h-9.066z"
                                              fill="#e9b584"
                                            />
                                            <path
                                              d="M99.992 88.505h8.859c0-4.842-3.916-8.86-8.859-8.86-4.946 0-8.861 4.018-8.861 8.86 0 4.945 3.915 8.963 8.861 8.963 4.943 0 8.859-4.018 8.859-8.963h-8.859z"
                                              fill="#eab786"
                                            />
                                            <path
                                              d="M99.992 88.505h8.756a8.749 8.749 0 0 0-8.756-8.757c-4.843 0-8.758 3.915-8.758 8.757s3.915 8.757 8.758 8.757a8.749 8.749 0 0 0 8.756-8.757h-8.756z"
                                              fill="#eab788"
                                            />
                                            <path
                                              d="M99.992 88.505h8.652c0-4.739-3.914-8.654-8.652-8.654-4.74 0-8.655 3.915-8.655 8.654 0 4.842 3.915 8.654 8.655 8.654 4.738 0 8.652-3.812 8.652-8.654h-8.652z"
                                              fill="#ebb989"
                                            />
                                            <path
                                              d="M99.992 88.505h8.551c0-4.636-3.812-8.448-8.551-8.448-4.74 0-8.552 3.812-8.552 8.448a8.53 8.53 0 0 0 8.552 8.551 8.53 8.53 0 0 0 8.551-8.551h-8.551z"
                                              fill="#ebb98a"
                                            />
                                            <path
                                              d="M99.992 88.505h8.344a8.31 8.31 0 0 0-8.344-8.345c-4.637 0-8.346 3.708-8.346 8.345s3.709 8.449 8.346 8.449c4.635 0 8.344-3.812 8.344-8.449h-8.344z"
                                              fill="#ebbb8c"
                                            />
                                            <path
                                              d="M99.992 88.505h8.24c0-4.533-3.707-8.242-8.24-8.242-4.534 0-8.243 3.708-8.243 8.242 0 4.636 3.709 8.243 8.243 8.243 4.533 0 8.24-3.606 8.24-8.243h-8.24z"
                                              fill="#ebbb8c"
                                            />
                                            <path
                                              d="M99.992 88.505h8.139c0-4.43-3.605-8.139-8.139-8.139-4.534 0-8.14 3.708-8.14 8.139a8.091 8.091 0 0 0 8.14 8.139 8.09 8.09 0 0 0 8.139-8.139h-8.139z"
                                              fill="#ecbd8f"
                                            />
                                            <path
                                              d="M99.992 88.505h8.035c0-4.43-3.605-7.933-8.035-7.933-4.431 0-8.037 3.502-8.037 7.933s3.606 8.037 8.037 8.037c4.43 0 8.035-3.606 8.035-8.037h-8.035z"
                                              fill="#ecbd90"
                                            />
                                            <path
                                              d="M99.992 88.505h7.828a7.826 7.826 0 0 0-7.828-7.83 7.827 7.827 0 0 0-7.831 7.83c0 4.327 3.503 7.933 7.831 7.933 4.326 0 7.828-3.606 7.828-7.933h-7.828z"
                                              fill="#ecbf93"
                                            />
                                            <path
                                              d="M99.992 88.505h7.727c0-4.224-3.504-7.727-7.727-7.727-4.328 0-7.728 3.503-7.728 7.727 0 4.327 3.4 7.727 7.728 7.727 4.223 0 7.727-3.4 7.727-7.727h-7.727z"
                                              fill="#ecbf93"
                                            />
                                            <path
                                              d="M99.992 88.505h7.623c0-4.224-3.4-7.624-7.623-7.624-4.225 0-7.625 3.399-7.625 7.624s3.4 7.624 7.625 7.624a7.606 7.606 0 0 0 7.623-7.624h-7.623z"
                                              fill="#edc195"
                                            />
                                            <path
                                              d="M99.992 88.505h7.52c0-4.121-3.398-7.417-7.52-7.417s-7.522 3.297-7.522 7.417c0 4.121 3.4 7.521 7.522 7.521 4.121 0 7.52-3.4 7.52-7.521h-7.52z"
                                              fill="#edc196"
                                            />
                                            <path
                                              d="M99.992 88.505h7.314c0-4.018-3.297-7.315-7.314-7.315-4.019 0-7.316 3.297-7.316 7.315 0 4.121 3.297 7.418 7.316 7.418 4.018 0 7.314-3.297 7.314-7.418h-7.314z"
                                              fill="#eec397"
                                            />
                                            <path
                                              d="M99.992 88.505h7.211c0-3.915-3.193-7.211-7.211-7.211-4.019 0-7.213 3.297-7.213 7.211a7.168 7.168 0 0 0 7.213 7.212 7.167 7.167 0 0 0 7.211-7.212h-7.211z"
                                              fill="#eec399"
                                            />
                                            <path
                                              d="M99.992 88.505h7.107c0-3.915-3.193-7.109-7.107-7.109-3.916 0-7.11 3.194-7.11 7.109 0 3.916 3.194 7.109 7.11 7.109 3.914 0 7.107-3.193 7.107-7.109h-7.107z"
                                              fill="#eec59b"
                                            />
                                            <path
                                              d="M99.992 88.505h7.004c0-3.812-3.193-6.903-7.004-6.903-3.813 0-7.007 3.091-7.007 6.903 0 3.916 3.194 7.006 7.007 7.006 3.811 0 7.004-3.09 7.004-7.006h-7.004z"
                                              fill="#eec69d"
                                            />
                                            <path
                                              d="M99.992 88.505h6.799c0-3.708-2.988-6.8-6.799-6.8-3.813 0-6.801 3.091-6.801 6.8 0 3.812 2.988 6.903 6.801 6.903 3.811 0 6.799-3.091 6.799-6.903h-6.799z"
                                              fill="#eec69f"
                                            />
                                            <path
                                              d="M99.992 88.505h6.695a6.684 6.684 0 0 0-6.695-6.697 6.684 6.684 0 0 0-6.698 6.697 6.684 6.684 0 0 0 6.698 6.697 6.683 6.683 0 0 0 6.695-6.697h-6.695z"
                                              fill="#efc89f"
                                            />
                                            <path
                                              d="M99.992 88.505h6.594c0-3.605-2.988-6.593-6.594-6.593-3.607 0-6.595 2.988-6.595 6.593a6.574 6.574 0 0 0 6.595 6.594 6.574 6.574 0 0 0 6.594-6.594h-6.594z"
                                              fill="#efc8a1"
                                            />
                                            <path
                                              d="M99.992 88.505h6.49c0-3.502-2.885-6.387-6.49-6.387-3.607 0-6.492 2.885-6.492 6.387a6.464 6.464 0 0 0 6.492 6.491 6.464 6.464 0 0 0 6.49-6.491h-6.49z"
                                              fill="#efcaa3"
                                            />
                                            <path
                                              d="M99.992 88.505h6.283a6.243 6.243 0 0 0-6.283-6.284 6.245 6.245 0 0 0-6.286 6.284c0 3.503 2.782 6.388 6.286 6.388 3.502 0 6.283-2.884 6.283-6.388h-6.283z"
                                              fill="#efcaa3"
                                            />
                                            <path
                                              d="M99.992 88.505h6.18c0-3.4-2.781-6.181-6.18-6.181-3.401 0-6.183 2.781-6.183 6.181s2.782 6.182 6.183 6.182c3.398 0 6.18-2.782 6.18-6.182h-6.18z"
                                              fill="#f0cca6"
                                            />
                                            <path
                                              d="M99.992 88.505h6.078c0-3.296-2.783-6.078-6.078-6.078-3.401 0-6.08 2.782-6.08 6.078 0 3.4 2.679 6.079 6.08 6.079 3.295 0 6.078-2.679 6.078-6.079h-6.078z"
                                              fill="#f0cca8"
                                            />
                                            <path
                                              d="M99.992 88.505h5.975c0-3.296-2.68-5.872-5.975-5.872-3.297 0-5.977 2.576-5.977 5.872a5.98 5.98 0 0 0 5.977 5.976 5.98 5.98 0 0 0 5.975-5.976h-5.975z"
                                              fill="#f1ceaa"
                                            />
                                            <path
                                              d="M99.992 88.505h5.768a5.758 5.758 0 0 0-5.768-5.769c-3.195 0-5.771 2.575-5.771 5.769s2.576 5.873 5.771 5.873c3.193 0 5.768-2.679 5.768-5.873h-5.768z"
                                              fill="#f1ceaa"
                                            />
                                            <path
                                              d="M99.992 88.505h5.666c0-3.09-2.576-5.667-5.666-5.667-3.092 0-5.667 2.576-5.667 5.667a5.65 5.65 0 0 0 5.667 5.667 5.65 5.65 0 0 0 5.666-5.667h-5.666z"
                                              fill="#f1d0ad"
                                            />
                                            <path
                                              d="M99.992 88.505h5.562c0-2.988-2.473-5.563-5.562-5.563-3.092 0-5.564 2.575-5.564 5.563a5.54 5.54 0 0 0 5.564 5.564 5.54 5.54 0 0 0 5.562-5.564h-5.562z"
                                              fill="#f1d0ae"
                                            />
                                            <path
                                              d="M99.992 88.505h5.459c0-2.988-2.473-5.357-5.459-5.357-2.988 0-5.461 2.369-5.461 5.357s2.473 5.46 5.461 5.46c2.986 0 5.459-2.473 5.459-5.46h-5.459z"
                                              fill="#f2d2b1"
                                            />
                                            <path
                                              d="M99.992 88.505h5.254c0-2.884-2.371-5.254-5.254-5.254-2.885 0-5.255 2.37-5.255 5.254 0 2.988 2.371 5.357 5.255 5.357 2.883 0 5.254-2.37 5.254-5.357h-5.254z"
                                              fill="#f2d2b3"
                                            />
                                            <path
                                              d="M99.992 88.505h5.15c0-2.782-2.268-5.151-5.15-5.151-2.885 0-5.152 2.369-5.152 5.151 0 2.885 2.268 5.151 5.152 5.151 2.883 0 5.15-2.267 5.15-5.151h-5.15z"
                                              fill="#f3d4b4"
                                            />
                                            <path
                                              d="M99.992 88.505h5.047a5.055 5.055 0 0 0-5.047-5.048c-2.783 0-5.049 2.267-5.049 5.048s2.266 5.048 5.049 5.048a5.056 5.056 0 0 0 5.047-5.048h-5.047z"
                                              fill="#f3d4b5"
                                            />
                                            <path
                                              d="M99.992 88.505h4.943c0-2.678-2.266-4.842-4.943-4.842-2.68 0-4.946 2.164-4.946 4.842 0 2.782 2.267 4.945 4.946 4.945 2.678 0 4.943-2.164 4.943-4.945h-4.943z"
                                              fill="#f3d4b7"
                                            />
                                            <path
                                              d="M99.992 88.505h4.738a4.726 4.726 0 0 0-4.738-4.739 4.726 4.726 0 0 0-4.74 4.739c0 2.679 2.061 4.842 4.74 4.842 2.678 0 4.738-2.164 4.738-4.842h-4.738z"
                                              fill="#f3d6b8"
                                            />
                                            <path
                                              d="M99.992 88.505h4.635a4.617 4.617 0 0 0-4.635-4.636c-2.576 0-4.637 2.061-4.637 4.636s2.061 4.636 4.637 4.636a4.617 4.617 0 0 0 4.635-4.636h-4.635z"
                                              fill="#f4d8ba"
                                            />
                                            <path
                                              d="M99.992 88.505h4.533c0-2.473-2.061-4.533-4.533-4.533s-4.534 2.061-4.534 4.533c0 2.576 2.062 4.533 4.534 4.533s4.533-1.958 4.533-4.533h-4.533z"
                                              fill="#f4d9bc"
                                            />
                                            <path
                                              d="M99.992 88.505h4.43c0-2.37-1.957-4.327-4.43-4.327s-4.431 1.957-4.431 4.327c0 2.473 1.958 4.43 4.431 4.43s4.43-1.958 4.43-4.43h-4.43z"
                                              fill="#f4d9be"
                                            />
                                            <path
                                              d="M99.992 88.505h4.223c0-2.37-1.854-4.224-4.223-4.224-2.371 0-4.225 1.854-4.225 4.224s1.854 4.327 4.225 4.327c2.369 0 4.223-1.958 4.223-4.327h-4.223z"
                                              fill="#f4dbbf"
                                            />
                                            <path
                                              d="M99.992 88.505h4.121a4.133 4.133 0 0 0-4.121-4.121c-2.268 0-4.122 1.854-4.122 4.121s1.854 4.121 4.122 4.121a4.133 4.133 0 0 0 4.121-4.121h-4.121z"
                                              fill="#f4dbc0"
                                            />
                                            <path
                                              d="M99.992 88.505h4.018c0-2.164-1.855-4.018-4.018-4.018-2.164 0-4.019 1.854-4.019 4.018 0 2.267 1.855 4.018 4.019 4.018 2.162 0 4.018-1.751 4.018-4.018h-4.018z"
                                              fill="#f5ddc3"
                                            />
                                            <path
                                              d="M99.992 88.505h3.914c0-2.061-1.752-3.812-3.914-3.812-2.164 0-3.916 1.751-3.916 3.812a3.914 3.914 0 1 0 7.83 0h-3.914z"
                                              fill="#f5ddc3"
                                            />
                                            <path
                                              d="M99.992 88.505h3.707c0-2.061-1.646-3.708-3.707-3.708s-3.71 1.648-3.71 3.708 1.649 3.812 3.71 3.812 3.707-1.751 3.707-3.812h-3.707z"
                                              fill="#f6dfc6"
                                            />
                                            <path
                                              d="M99.992 88.505h3.605c0-1.958-1.648-3.605-3.605-3.605-1.959 0-3.607 1.648-3.607 3.605 0 2.061 1.648 3.606 3.607 3.606 1.957 0 3.605-1.545 3.605-3.606h-3.605z"
                                              fill="#f6dfc7"
                                            />
                                            <path
                                              d="M99.992 88.505h3.502c0-1.854-1.545-3.502-3.502-3.502-1.959 0-3.504 1.648-3.504 3.502a3.474 3.474 0 0 0 3.504 3.503 3.474 3.474 0 0 0 3.502-3.503h-3.502z"
                                              fill="#f6e1ca"
                                            />
                                            <path
                                              d="M99.992 88.505h3.398c0-1.854-1.545-3.296-3.398-3.296-1.855 0-3.401 1.442-3.401 3.296 0 1.855 1.545 3.4 3.401 3.4 1.854 0 3.398-1.545 3.398-3.4h-3.398z"
                                              fill="#f6e1cc"
                                            />
                                            <path
                                              d="M99.992 88.505h3.193a3.21 3.21 0 0 0-3.193-3.194 3.21 3.21 0 0 0-3.195 3.194c0 1.855 1.443 3.297 3.195 3.297 1.75 0 3.193-1.442 3.193-3.297h-3.193z"
                                              fill="#f7e3cd"
                                            />
                                            <path
                                              d="M99.992 88.505h3.09c0-1.648-1.34-3.09-3.09-3.09-1.752 0-3.092 1.442-3.092 3.09 0 1.751 1.34 3.091 3.092 3.091 1.75 0 3.09-1.34 3.09-3.091h-3.09z"
                                              fill="#f7e3cf"
                                            />
                                            <path
                                              d="M99.992 88.505h2.986a2.99 2.99 0 0 0-2.986-2.988 2.989 2.989 0 0 0 0 5.976 2.989 2.989 0 0 0 2.986-2.988h-2.986z"
                                              fill="#f7e3d0"
                                            />
                                            <path
                                              d="M99.992 88.505h2.883c0-1.545-1.338-2.782-2.883-2.782-1.547 0-2.885 1.237-2.885 2.782a2.879 2.879 0 0 0 2.885 2.885 2.878 2.878 0 0 0 2.883-2.885h-2.883z"
                                              fill="#f8e5d1"
                                            />
                                            <path
                                              d="M99.992 88.505h2.678c0-1.442-1.133-2.678-2.678-2.678a2.66 2.66 0 0 0-2.68 2.678c0 1.545 1.133 2.782 2.68 2.782 1.545 0 2.678-1.236 2.678-2.782h-2.678z"
                                              fill="#f8e8d4"
                                            />
                                            <path
                                              d="M99.992 88.505h2.574a2.55 2.55 0 0 0-2.574-2.576 2.551 2.551 0 0 0-2.576 2.576 2.55 2.55 0 0 0 2.576 2.576 2.55 2.55 0 0 0 2.574-2.576h-2.574z"
                                              fill="#f8e8d6"
                                            />
                                            <path
                                              d="M99.992 88.505h2.473c0-1.339-1.135-2.37-2.473-2.37-1.34 0-2.473 1.03-2.473 2.37s1.133 2.473 2.473 2.473c1.338 0 2.473-1.133 2.473-2.473h-2.473z"
                                              fill="#f8e8d8"
                                            />
                                            <path
                                              d="M99.992 88.505h2.369c0-1.236-1.135-2.267-2.369-2.267-1.238 0-2.371 1.031-2.371 2.267 0 1.339 1.133 2.37 2.371 2.37 1.234 0 2.369-1.03 2.369-2.37h-2.369z"
                                              fill="#f9ead9"
                                            />
                                            <path
                                              d="M99.992 88.505h2.162c0-1.133-.928-2.164-2.162-2.164-1.238 0-2.164 1.03-2.164 2.164 0 1.237.926 2.267 2.164 2.267 1.234 0 2.162-1.03 2.162-2.267h-2.162z"
                                              fill="#faecdc"
                                            />
                                            <path
                                              d="M99.992 88.505h2.061a2.068 2.068 0 0 0-2.061-2.061c-1.135 0-2.061.927-2.061 2.061s.926 2.061 2.061 2.061a2.067 2.067 0 0 0 2.061-2.061h-2.061z"
                                              fill="#faecdd"
                                            />
                                            <path
                                              d="M99.992 88.505h1.957c0-1.03-.928-1.854-1.957-1.854-1.031 0-1.959.824-1.959 1.854 0 1.133.928 1.958 1.959 1.958a1.957 1.957 0 0 0 1.957-1.958h-1.957z"
                                              fill="#faecdf"
                                            />
                                            <path
                                              d="M99.992 88.505h1.854c0-.927-.824-1.751-1.854-1.751-1.031 0-1.855.824-1.855 1.751 0 1.031.824 1.855 1.855 1.855a1.847 1.847 0 0 0 1.854-1.855h-1.854z"
                                              fill="#faeee0"
                                            />
                                            <path
                                              d="M99.992 88.505h1.648c0-.927-.723-1.648-1.648-1.648-.928 0-1.65.721-1.65 1.648s.723 1.751 1.65 1.751c.926 0 1.648-.824 1.648-1.751h-1.648z"
                                              fill="#fbf0e3"
                                            />
                                            <path
                                              d="M99.992 88.505h1.545c0-.824-.723-1.545-1.545-1.545-.824 0-1.547.721-1.547 1.545 0 .927.723 1.545 1.547 1.545.822 0 1.545-.618 1.545-1.545h-1.545z"
                                              fill="#fbf1e5"
                                            />
                                            <path
                                              d="M99.992 88.505h1.441c0-.721-.619-1.339-1.441-1.339-.824 0-1.443.618-1.443 1.339 0 .825.619 1.443 1.443 1.443.822 0 1.441-.618 1.441-1.443h-1.441z"
                                              fill="#fbf1e7"
                                            />
                                            <path
                                              d="M99.992 88.505h1.338c0-.721-.617-1.236-1.338-1.236-.723 0-1.34.515-1.34 1.236 0 .722.617 1.339 1.34 1.339.721 0 1.338-.618 1.338-1.339h-1.338z"
                                              fill="#fcf3e8"
                                            />
                                            <path
                                              d="M99.992 88.505h1.133c0-.618-.516-1.133-1.133-1.133-.619 0-1.135.516-1.135 1.133 0 .722.516 1.237 1.135 1.237.617 0 1.133-.515 1.133-1.237h-1.133z"
                                              fill="#fcf3ea"
                                            />
                                            <path
                                              d="M99.992 88.505h1.029c0-.515-.412-1.03-1.029-1.03-.619 0-1.031.515-1.031 1.03 0 .619.412 1.031 1.031 1.031.617 0 1.029-.412 1.029-1.031h-1.029z"
                                              fill="#fcf5ed"
                                            />
                                            <path
                                              d="M99.992 88.505h.926c0-.515-.412-.824-.926-.824-.516 0-.928.309-.928.824s.412.927.928.927a.923.923 0 0 0 .926-.927h-.926z"
                                              fill="#fcf5ef"
                                            />
                                            <path
                                              d="M99.992 88.505h.822c0-.412-.412-.721-.822-.721-.412 0-.824.31-.824.721 0 .412.412.825.824.825.41 0 .822-.413.822-.825h-.822z"
                                              fill="#fdf8f1"
                                            />
                                            <path
                                              d="M99.992 88.505h.617c0-.309-.309-.618-.617-.618-.311 0-.619.309-.619.618 0 .412.309.722.619.722.309 0 .617-.31.617-.722h-.617z"
                                              fill="#fdf8f3"
                                            />
                                            <path
                                              d="M99.992 88.505h.514c0-.206-.205-.515-.514-.515-.311 0-.516.309-.516.515 0 .309.205.515.516.515.309 0 .514-.206.514-.515h-.514z"
                                              fill="#fdf8f5"
                                            />
                                            <path
                                              d="M99.992 88.505h.41c0-.206-.205-.309-.41-.309-.207 0-.412.103-.412.309s.205.412.412.412c.205 0 .41-.206.41-.412h-.41z"
                                              fill="#fefbf6"
                                            />
                                            <path
                                              d="M99.992 88.505h.205c0-.103-.104-.206-.205-.206-.104 0-.311.103-.311.206 0 .206.207.309.311.309.102 0 .205-.103.205-.309h-.205z"
                                              fill="#fffffb"
                                            />
                                            <path
                                              d="M99.992 88.505h.102s0-.103-.102-.103c-.104 0-.104.103-.104.103 0 .103 0 .206.104.206.102 0 .102-.103.102-.206h-.102z"
                                              fill="#fff"
                                            />
                                            <path d="M126.881 93.245L119.566 74.7h-5.976l11.746 28.332h2.885L140.172 74.7h-5.873l-7.418 18.545zM142.645 102.312h15.248v-4.637h-9.891v-7.418h9.478v-4.739h-9.478v-6.079h9.891V74.7h-15.248v27.612zM179.219 82.839c0-5.151-3.504-8.139-9.787-8.139h-7.934v27.611h5.357V91.287h.721l7.418 11.024h6.594l-8.654-11.643c4.017-.823 6.285-3.605 6.285-7.829zM168.4 87.476h-1.545v-8.448h1.648c3.4 0 5.15 1.442 5.15 4.121.001 2.781-1.749 4.327-5.253 4.327zM9.731 110.419v2.474h3.055v1.001H9.731v4.31H8.633v-8.787h4.253v1.002H9.731zM17.901 109.417H19v8.787h-1.099v-8.787zM24.305 108.995l6.59 6.915v-6.493h1.098v9.149l-6.597-6.911v6.549h-1.091v-9.209zM42.152 115.001h-3.13l1.564-3.558 1.566 3.558zm.45 1.002l1.002 2.201h1.182l-4.199-9.16-4.197 9.16h1.177l1.005-2.201h4.03zM49.181 108.995l6.597 6.915v-6.493h1.099v9.149l-6.605-6.911v6.549h-1.091v-9.209zM68.597 111.097c-.625-.562-1.491-.863-2.32-.863-1.965 0-3.469 1.643-3.469 3.59 0 1.923 1.489 3.565 3.449 3.565.864 0 1.688-.324 2.339-.909v1.296a4.734 4.734 0 0 1-2.306.615c-2.511 0-4.583-1.992-4.583-4.534 0-2.6 2.086-4.63 4.679-4.63.771 0 1.55.19 2.209.597v1.273h.002zM73.64 109.417h1.092v8.787H73.64v-8.787zM84.969 115.001H81.84l1.572-3.558 1.557 3.558zm.451 1.002l1.005 2.201h1.177l-4.19-9.16-4.199 9.16h1.174l1.002-2.201h4.031zM93.198 117.207h2.671v.997h-3.763v-8.787h1.092v7.79zM111.395 111.085c-.318-.551-.74-.83-1.41-.83-.701 0-1.473.477-1.473 1.249 0 .685.686 1.049 1.23 1.258l.625.247c1.252.487 2.184 1.177 2.184 2.644 0 1.599-1.238 2.738-2.809 2.738-1.424 0-2.531-1.047-2.713-2.458l1.105-.231c-.014.965.756 1.665 1.695 1.665.947 0 1.621-.79 1.621-1.714 0-.942-.756-1.352-1.512-1.669l-.604-.253c-1.006-.432-1.914-1.002-1.914-2.227 0-1.424 1.258-2.277 2.59-2.277.975 0 1.781.481 2.256 1.33l-.871.528zM117.512 109.417h4.724v1.002h-3.625v2.463h3.526v1.001h-3.526v3.324h3.625v.997h-4.724v-8.787zM128.457 110.396h.281c1.094 0 2.396.198 2.396 1.576 0 1.397-1.219 1.605-2.336 1.605h-.342v-3.181h.001zm1.594 3.988c1.27-.154 2.109-1.2 2.109-2.461 0-.838-.422-1.668-1.158-2.1-.697-.395-1.537-.406-2.314-.406h-1.328v8.787h1.098v-3.713h.451l2.588 3.713h1.326l-2.772-3.82zM140.352 115.921l2.611-6.504h1.203l-3.814 9.258-3.821-9.258h1.201l2.62 6.504zM148.641 109.417h1.097v8.787h-1.097v-8.787zM161.555 111.097c-.633-.562-1.5-.863-2.332-.863-1.963 0-3.467 1.643-3.467 3.59 0 1.923 1.488 3.565 3.447 3.565.865 0 1.697-.324 2.352-.909v1.296a4.774 4.774 0 0 1-2.312.615c-2.504 0-4.586-1.992-4.586-4.534 0-2.6 2.096-4.63 4.678-4.63.771 0 1.551.19 2.221.597v1.273h-.001zM166.617 109.417h4.723v1.002h-3.623v2.463h3.519v1.001h-3.519v3.324h3.623v.997h-4.723v-8.787zM180.359 111.085c-.32-.551-.74-.83-1.404-.83-.697 0-1.469.477-1.469 1.249 0 .685.68 1.049 1.223 1.258l.635.247c1.242.487 2.174 1.177 2.174 2.644 0 1.599-1.236 2.738-2.809 2.738-1.418 0-2.533-1.047-2.711-2.458l1.102-.231c-.014.965.762 1.665 1.703 1.665.945 0 1.623-.79 1.623-1.714 0-.942-.764-1.352-1.518-1.669l-.605-.253c-1.006-.432-1.914-1.002-1.914-2.227 0-1.424 1.26-2.277 2.59-2.277.975 0 1.783.481 2.264 1.33l-.884.528zM182.367 77.149c0 .212-.145.324-.439.324h-.1v-.633h.107c.292.001.432.101.432.309zm.862 1.673l-.801-1.006c.342-.088.539-.338.539-.682 0-.476-.334-.745-.928-.745h-.775v2.433h.574v-.942l.682.942h.709zm1.023-1.221c0-1.162-.945-2.12-2.092-2.12a2.111 2.111 0 0 0-2.125 2.12c0 1.181.949 2.123 2.125 2.123 1.147-.001 2.092-.958 2.092-2.123zm-.428.006c0 .954-.75 1.736-1.674 1.736-.93 0-1.695-.778-1.695-1.736 0-.969.758-1.739 1.695-1.739.924 0 1.674.782 1.674 1.739z" />
                                          </g>
                                        </svg>
                                      )}
                                      {item?.str?.brand === "diners" && (
                                        <svg
                                          className="w-6 h-7"
                                          width="800px"
                                          height="248px"
                                          viewBox="0 -9 58 58"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <rect
                                            x="0.5"
                                            y="0.5"
                                            width="57"
                                            height="39"
                                            rx="3.5"
                                            fill="white"
                                            stroke="#F3F3F3"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.83219 24.2047C8.83219 23.4203 8.42237 23.4718 8.03033 23.4636V23.2368C8.37026 23.2533 8.71882 23.2533 9.05965 23.2533C9.42581 23.2533 9.92294 23.2368 10.5688 23.2368C12.8276 23.2368 14.058 24.7451 14.058 26.2897C14.058 27.1541 13.552 29.3255 10.4639 29.3255C10.0194 29.3255 9.60889 29.3083 9.19907 29.3083C8.80685 29.3083 8.42237 29.3164 8.03033 29.3255V29.0986C8.55316 29.0458 8.80685 29.0287 8.83219 28.4357V24.2047ZM9.68704 28.2957C9.68704 28.9676 10.1673 29.0458 10.5945 29.0458C12.4792 29.0458 13.0977 27.6243 13.0977 26.3247C13.0977 24.6936 12.0511 23.5162 10.3678 23.5162C10.0094 23.5162 9.84443 23.5417 9.68704 23.5511V28.2957Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.3636 29.0987H14.5289C14.7731 29.0987 14.9477 29.0987 14.9477 28.8102V26.4465C14.9477 26.0633 14.8171 26.0103 14.4939 25.8363V25.6971C14.9039 25.5738 15.3928 25.4093 15.4273 25.383C15.4887 25.348 15.5403 25.3387 15.5847 25.3387C15.6274 25.3387 15.6454 25.3911 15.6454 25.4616V28.8102C15.6454 29.0987 15.8376 29.0987 16.0822 29.0987H16.2298V29.3256C15.9332 29.3256 15.6274 29.3084 15.3144 29.3084C15.0004 29.3084 14.6861 29.3165 14.3636 29.3256V29.0987ZM15.2968 23.9958C15.0696 23.9958 14.8694 23.7865 14.8694 23.5598C14.8694 23.3413 15.0791 23.1403 15.2968 23.1403C15.5232 23.1403 15.7244 23.3241 15.7244 23.5598C15.7244 23.7957 15.532 23.9958 15.2968 23.9958Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.0588 26.4989C17.0588 26.1768 16.9625 26.0896 16.5532 25.9236V25.758C16.9276 25.636 17.285 25.5221 17.7042 25.3386C17.7306 25.3386 17.7559 25.3561 17.7559 25.4258V25.993C18.2539 25.636 18.6814 25.3386 19.2667 25.3386C20.0071 25.3386 20.2687 25.8796 20.2687 26.56V28.8101C20.2687 29.0987 20.4612 29.0987 20.7051 29.0987H20.8625V29.3256C20.5562 29.3256 20.2513 29.3084 19.9376 29.3084C19.6234 29.3084 19.3091 29.3164 18.9951 29.3256V29.0987H19.1525C19.3968 29.0987 19.5705 29.0987 19.5705 28.8101V26.5519C19.5705 26.0541 19.2667 25.8101 18.7689 25.8101C18.4895 25.8101 18.0446 26.0364 17.7559 26.2292V28.8101C17.7559 29.0987 17.9487 29.0987 18.193 29.0987H18.3497V29.3256C18.0446 29.3256 17.7392 29.3084 17.4246 29.3084C17.1113 29.3084 16.7969 29.3164 16.4832 29.3256V29.0987H16.6405C16.8845 29.0987 17.0588 29.0987 17.0588 28.8101V26.4989"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M21.5255 26.9183C21.5077 26.9968 21.5077 27.1274 21.5255 27.4242C21.5769 28.2526 22.1102 28.9327 22.8073 28.9327C23.2877 28.9327 23.663 28.6709 23.9852 28.3488L24.107 28.4709C23.7056 29.0029 23.2086 29.4568 22.4939 29.4568C21.1065 29.4568 20.8275 28.1127 20.8275 27.5548C20.8275 25.8449 21.9786 25.3386 22.5886 25.3386C23.296 25.3386 24.0554 25.7835 24.0635 26.7084C24.0635 26.7614 24.0635 26.8131 24.0554 26.8656L23.9765 26.9183H21.5255ZM23.0701 26.6389C23.2877 26.6389 23.3132 26.5253 23.3132 26.4202C23.3132 25.9761 23.043 25.6184 22.5543 25.6184C22.0227 25.6184 21.6561 26.0102 21.5516 26.6389H23.0701Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M24.2645 29.0987H24.5002C24.7435 29.0987 24.9182 29.0987 24.9182 28.8101V26.3595C24.9182 26.0896 24.5957 26.0364 24.4647 25.9667V25.8363C25.1014 25.5657 25.4505 25.3386 25.5303 25.3386C25.5813 25.3386 25.6075 25.3649 25.6075 25.4525V26.2377H25.6259C25.8433 25.8976 26.2103 25.3386 26.7421 25.3386C26.9601 25.3386 27.2389 25.4868 27.2389 25.8011C27.2389 26.0364 27.074 26.2468 26.8298 26.2468C26.5585 26.2468 26.5585 26.0364 26.2529 26.0364C26.1049 26.0364 25.6163 26.2377 25.6163 26.7614V28.8101C25.6163 29.0987 25.7906 29.0987 26.035 29.0987H26.5229V29.3256C26.0432 29.3164 25.6781 29.3084 25.3026 29.3084C24.9449 29.3084 24.5784 29.3164 24.2645 29.3256V29.0987"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M27.6225 28.1126C27.7362 28.6883 28.0844 29.1775 28.7224 29.1775C29.2362 29.1775 29.428 28.8631 29.428 28.558C29.428 27.5282 27.5269 27.86 27.5269 26.4557C27.5269 25.9667 27.9197 25.3387 28.8793 25.3387C29.1579 25.3387 29.5329 25.4178 29.8728 25.5924L29.9341 26.4814H29.7336C29.6464 25.9322 29.3415 25.6183 28.7826 25.6183C28.4337 25.6183 28.1026 25.8186 28.1026 26.1938C28.1026 27.215 30.1258 26.9004 30.1258 28.27C30.1258 28.8453 29.664 29.4567 28.6256 29.4567C28.277 29.4567 27.8663 29.3344 27.5619 29.1599L27.4655 28.1566L27.6225 28.1126"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M38.0025 24.8152H37.785C37.619 23.7956 36.8949 23.3851 35.9186 23.3851C34.9143 23.3851 33.4581 24.0563 33.4581 26.1498C33.4581 27.9125 34.7146 29.1775 36.0576 29.1775C36.9204 29.1775 37.6373 28.5841 37.8114 27.6676L38.0121 27.7197L37.8114 28.9937C37.445 29.2208 36.459 29.4567 35.8827 29.4567C33.8424 29.4567 32.5515 28.1393 32.5515 26.1767C32.5515 24.388 34.1478 23.1053 35.8575 23.1053C36.5638 23.1053 37.244 23.3328 37.9158 23.5685L38.0025 24.8152"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M38.3175 29.0987H38.4826C38.7277 29.0987 38.9018 29.0987 38.9018 28.8102V23.9527C38.9018 23.3851 38.7712 23.3679 38.4393 23.2717V23.132C38.7881 23.0188 39.1548 22.8621 39.3384 22.7566C39.4331 22.7051 39.5035 22.6605 39.5292 22.6605C39.5825 22.6605 39.5998 22.7135 39.5998 22.7836V28.8102C39.5998 29.0987 39.7919 29.0987 40.0358 29.0987H40.1835V29.3256C39.8878 29.3256 39.5825 29.3084 39.2683 29.3084C38.9544 29.3084 38.6407 29.3165 38.3175 29.3256V29.0987"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M43.9183 28.8453C43.9183 29.0029 44.0137 29.0111 44.1616 29.0111C44.2668 29.0111 44.3971 29.0029 44.5114 29.0029V29.1865C44.136 29.221 43.4204 29.4043 43.2544 29.4567L43.2109 29.4301V28.7235C42.6881 29.1507 42.2864 29.4567 41.6662 29.4567C41.1953 29.4567 40.7071 29.1507 40.7071 28.419V26.1852C40.7071 25.9581 40.6724 25.74 40.1846 25.697V25.5308C40.4989 25.5222 41.1953 25.4701 41.309 25.4701C41.4058 25.4701 41.4058 25.5308 41.4058 25.7231V27.9734C41.4058 28.2353 41.4058 28.9847 42.1646 28.9847C42.4606 28.9847 42.8532 28.7585 43.2194 28.4536V26.1065C43.2194 25.9322 42.8009 25.8363 42.4874 25.7495V25.5926C43.2717 25.5394 43.7607 25.4701 43.8479 25.4701C43.9183 25.4701 43.9183 25.5308 43.9183 25.6271V28.8453"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M45.6536 25.9668C46.0024 25.6708 46.4736 25.3386 46.9533 25.3386C47.9654 25.3386 48.5761 26.2206 48.5761 27.1712C48.5761 28.3136 47.7383 29.4568 46.4903 29.4568C45.8455 29.4568 45.5052 29.2467 45.278 29.1508L45.0171 29.3515L44.8342 29.2559C44.9122 28.7413 44.9562 28.2354 44.9562 27.703V23.9527C44.9562 23.3851 44.8248 23.3679 44.4933 23.2717V23.132C44.8426 23.0188 45.2086 22.8621 45.3917 22.7566C45.488 22.7051 45.5575 22.6605 45.5841 22.6605C45.636 22.6605 45.6536 22.7137 45.6536 22.7836V25.9668ZM45.6536 28.3396C45.6536 28.6709 45.9679 29.2297 46.5521 29.2297C47.4853 29.2297 47.8777 28.3136 47.8777 27.5369C47.8777 26.595 47.1632 25.8101 46.483 25.8101C46.1589 25.8101 45.889 26.0198 45.6536 26.2206V28.3396Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.7292 33.6048L12.7387 33.5954V31.816C12.7387 31.4265 12.4678 31.3695 12.3255 31.3695H12.2209V31.2271C12.4444 31.2271 12.6627 31.2459 12.8855 31.2459C13.0801 31.2459 13.2755 31.2271 13.4694 31.2271V31.3695H13.3988C13.1988 31.3695 12.9757 31.4074 12.9757 31.9723V34.1319C12.9757 34.2983 12.9804 34.4643 13.0037 34.6116H12.8233L10.3793 31.8866V33.8426C10.3793 34.2559 10.4596 34.3976 10.8251 34.3976H10.9059V34.5403C10.7018 34.5403 10.4979 34.5218 10.2938 34.5218C10.0807 34.5218 9.86206 34.5403 9.64825 34.5403V34.3976H9.71491C10.0423 34.3976 10.142 34.1745 10.142 33.7959V31.7961C10.142 31.5305 9.92296 31.3695 9.71024 31.3695H9.64825V31.2271C9.82828 31.2271 10.0137 31.2459 10.1937 31.2459C10.3366 31.2459 10.4742 31.2271 10.6165 31.2271L12.7292 33.6048"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13.0037 34.6315L12.8083 34.6248L10.3995 31.9401V33.8425C10.4052 34.2552 10.4679 34.3726 10.8253 34.3771H10.927V34.5605H10.9059C10.7006 34.5605 10.4963 34.5415 10.2938 34.5415C10.0813 34.5415 9.86316 34.5605 9.6481 34.5605H9.62726V34.3771H9.71494C10.0286 34.3753 10.1183 34.1737 10.1217 33.7957V31.7967C10.1208 31.5439 9.91347 31.3901 9.71044 31.3901H9.62726V31.2063H9.6481C9.82956 31.2063 10.0153 31.2248 10.1934 31.2248C10.335 31.2248 10.4721 31.2063 10.6321 31.2137L12.7181 33.5617V31.8159C12.7157 31.439 12.4638 31.3932 12.3257 31.3901H12.2001V31.2063H12.2211C12.4453 31.2063 12.6638 31.2248 12.8855 31.2248C13.0787 31.2248 13.2732 31.2063 13.4694 31.2063H13.4903V31.3901H13.3988C13.2028 31.3951 13.0018 31.4124 12.996 31.9722V34.1318C12.996 34.298 13.0012 34.4637 13.024 34.6077L13.0284 34.6315H13.0037ZM12.8235 34.5901H12.9806C12.9594 34.4473 12.9556 34.2897 12.9556 34.1318V31.9722C12.9556 31.4025 13.1944 31.3488 13.3988 31.3484H13.4488V31.2474C13.2617 31.2489 13.0743 31.2661 12.8855 31.2661C12.6681 31.2661 12.4568 31.2489 12.2423 31.2474L12.2418 31.3484H12.3257C12.4716 31.3488 12.7592 31.4136 12.7592 31.8159L12.7529 33.6102L12.7436 33.6194L12.7274 33.6347L10.6165 31.2474C10.4755 31.2474 10.3382 31.2661 10.1934 31.2661C10.0195 31.2661 9.84124 31.2489 9.66912 31.2474L9.66822 31.3484H9.71044C9.93305 31.3488 10.1621 31.5187 10.1621 31.7967V33.7957C10.1621 34.1755 10.0563 34.418 9.71494 34.4193L9.66912 34.418V34.5199C9.87466 34.5183 10.0865 34.5008 10.2938 34.5008C10.4918 34.5008 10.6894 34.5183 10.8853 34.5199V34.4193H10.8253C10.4517 34.418 10.3592 34.2552 10.3589 33.8425V31.8333L12.8235 34.5901ZM12.7294 33.6047L12.7443 33.591L12.7294 33.6047ZM12.7181 33.5953V33.5935L12.7143 33.5905L12.7181 33.5953Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.1807 31.4643C13.8243 31.4643 13.8104 31.5502 13.7393 31.8962H13.5968C13.6155 31.7633 13.639 31.6305 13.6538 31.4929C13.6728 31.3594 13.6823 31.227 13.6823 31.0897H13.7961C13.8343 31.2322 13.9529 31.227 14.0817 31.227H16.5299C16.6587 31.227 16.7771 31.2223 16.7868 31.0798L16.9002 31.0992C16.8818 31.227 16.8624 31.3553 16.8486 31.4837C16.8392 31.6118 16.8392 31.7396 16.8392 31.8677L16.6966 31.9205C16.6869 31.7451 16.6634 31.4643 16.3453 31.4643H15.5668V33.9895C15.5668 34.3557 15.7332 34.3976 15.9607 34.3976H16.0512V34.5402C15.866 34.5402 15.5336 34.5219 15.2778 34.5219C14.9926 34.5219 14.6601 34.5402 14.4748 34.5402V34.3976H14.5654C14.827 34.3976 14.9592 34.3742 14.9592 33.9994V31.4643H14.1807"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.0516 34.5605C15.8645 34.5605 15.5325 34.5417 15.2777 34.5417C14.993 34.5417 14.6609 34.5605 14.4748 34.5605H14.4545V34.3771H14.5654C14.827 34.371 14.9321 34.3676 14.938 33.9994V31.4847H14.1807V31.4431H14.9791V33.9994C14.9791 34.3805 14.8255 34.419 14.5654 34.4193H14.4951V34.5196C14.6823 34.5183 15.0021 34.5009 15.2777 34.5009C15.5248 34.5009 15.8419 34.5183 16.03 34.5196V34.4193H15.9607C15.731 34.419 15.5463 34.3626 15.5463 33.9896V31.4431H16.3453C16.6637 31.4444 16.7059 31.715 16.7158 31.8916L16.8186 31.8537C16.8186 31.7297 16.8191 31.6056 16.8275 31.4809C16.8416 31.3582 16.8588 31.2376 16.8766 31.116L16.8045 31.1039C16.7824 31.2421 16.6486 31.2495 16.5297 31.2477H14.0569C13.9451 31.2478 13.8235 31.2425 13.7808 31.11H13.7024C13.7017 31.2412 13.6927 31.3686 13.6748 31.4951C13.6606 31.6255 13.6388 31.7507 13.6216 31.8765H13.7229C13.7852 31.5454 13.8259 31.4385 14.1807 31.4431V31.4847C13.8291 31.4917 13.8368 31.5504 13.7594 31.9011L13.756 31.9173H13.5731L13.5756 31.8927C13.595 31.7603 13.6191 31.6269 13.6329 31.4891C13.6527 31.3574 13.6616 31.2258 13.6616 31.0897V31.0687H13.8124L13.816 31.0836C13.8479 31.2033 13.9358 31.2042 14.0569 31.2063H16.5297C16.6619 31.2042 16.7582 31.2024 16.7663 31.0782L16.7679 31.0558L16.7895 31.0601L16.9237 31.0813L16.9203 31.1023C16.9014 31.2297 16.8829 31.3574 16.8685 31.4847C16.8597 31.6119 16.8597 31.7394 16.8597 31.8677V31.8821L16.8459 31.8876L16.6779 31.9491L16.6768 31.9216C16.6637 31.743 16.6454 31.4847 16.3453 31.4847H15.5877V33.9896C15.5923 34.3475 15.7343 34.3726 15.9607 34.3771H16.0717V34.5605H16.0516"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.0518 34.3976H17.1187C17.289 34.3976 17.4699 34.3743 17.4699 34.1272V31.6406C17.4699 31.3932 17.289 31.3697 17.1187 31.3697H17.0518V31.2271C17.3404 31.2271 17.8352 31.2459 18.2331 31.2459C18.6325 31.2459 19.1255 31.2271 19.4482 31.2271C19.4399 31.4312 19.4444 31.7452 19.4585 31.9536L19.3154 31.9914C19.2926 31.6827 19.2357 31.4365 18.7371 31.4365H18.0781V32.6793H18.6419C18.9266 32.6793 18.9886 32.5185 19.0168 32.2619H19.1591C19.1496 32.4473 19.1446 32.6324 19.1446 32.8173C19.1446 32.998 19.1496 33.1782 19.1591 33.3583L19.0168 33.3866C18.9886 33.1022 18.9744 32.9172 18.6465 32.9172H18.0781V34.0225C18.0781 34.3315 18.3522 34.3315 18.6562 34.3315C19.226 34.3315 19.4773 34.2932 19.6198 33.7528L19.7522 33.7855C19.6906 34.0376 19.634 34.2884 19.5914 34.5403C19.2872 34.5403 18.7414 34.522 18.3151 34.522C17.8869 34.522 17.3226 34.5403 17.0518 34.5403V34.3976"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.591 34.5605C19.2865 34.5605 18.7403 34.5407 18.3145 34.5407C17.8869 34.5407 17.3227 34.5605 17.0516 34.5605H17.0317V34.3771H17.1185C17.2902 34.3742 17.4465 34.3591 17.4487 34.1271V31.6406C17.4465 31.4086 17.2902 31.3932 17.1185 31.3901H17.0317V31.2063H17.0516C17.3416 31.2063 17.8353 31.2248 18.2331 31.2248C18.6321 31.2248 19.125 31.2063 19.4482 31.2063H19.4692L19.4685 31.2282C19.4654 31.2992 19.4635 31.3836 19.4635 31.4729C19.4635 31.637 19.4685 31.8168 19.4778 31.9519L19.4787 31.9688L19.4627 31.9737L19.2958 32.0173L19.2951 31.9929C19.2671 31.6849 19.2258 31.4609 18.7371 31.4562H18.0973L18.0969 32.6584H18.6417C18.9153 32.6555 18.9642 32.5157 18.9965 32.2597L18.9976 32.2406H19.1801L19.1798 32.2624C19.1706 32.4478 19.165 32.6323 19.165 32.8172C19.165 32.9967 19.1706 33.1769 19.1798 33.3573L19.1801 33.3745L19.1629 33.3785L18.9976 33.4113L18.9965 33.3891C18.9636 33.0993 18.9615 32.9404 18.6465 32.937H18.0973V34.0224C18.098 34.3109 18.3467 34.3093 18.656 34.3109C19.2276 34.3075 19.4565 34.2795 19.5995 33.7471L19.6043 33.7279L19.6243 33.7312L19.7764 33.7707L19.7721 33.7903C19.7105 34.0414 19.6539 34.2924 19.611 34.5436L19.6074 34.5605H19.591ZM19.5734 34.5195C19.6149 34.2795 19.669 34.0398 19.7272 33.8009L19.6338 33.7773C19.4917 34.3082 19.2162 34.3557 18.656 34.3521C18.3569 34.3521 18.0579 34.3521 18.0563 34.0224V32.8964H18.6465C18.978 32.893 19.0114 33.0928 19.0351 33.3628L19.1376 33.3418C19.1284 33.1668 19.1237 32.9911 19.1237 32.8172C19.1237 32.639 19.1284 32.4611 19.1376 32.282H19.0351C19.0084 32.5299 18.9309 32.7029 18.6417 32.6999H18.0563V31.4151H18.7371C19.2306 31.4111 19.3124 31.6666 19.3339 31.9652L19.4362 31.9374C19.4279 31.8035 19.4223 31.6314 19.4223 31.4729C19.4223 31.3917 19.4245 31.3146 19.4272 31.2474C19.1047 31.2489 18.6233 31.2661 18.2331 31.2661C17.8431 31.2661 17.363 31.2489 17.0725 31.2474V31.3484H17.1185C17.2873 31.3488 17.4893 31.3781 17.4904 31.6406V34.1271C17.4893 34.3891 17.2873 34.418 17.1185 34.4193H17.0725V34.5195C17.3488 34.5186 17.8975 34.5008 18.3145 34.5008C18.7335 34.5008 19.2675 34.5186 19.5734 34.5195Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M20.3932 31.7298C20.3932 31.3837 20.2031 31.3695 20.0558 31.3695H19.9701V31.2271C20.1221 31.2271 20.4164 31.2459 20.7062 31.2459C20.9904 31.2459 21.2186 31.2271 21.4701 31.2271C22.0673 31.2271 22.6001 31.3882 22.6001 32.0627C22.6001 32.4896 22.3151 32.7503 21.9403 32.8983L22.7515 34.1127C22.8848 34.3135 22.979 34.3698 23.2122 34.3976V34.5403C23.0552 34.5403 22.9033 34.522 22.7472 34.522C22.6001 34.522 22.4475 34.5403 22.3011 34.5403C21.9353 34.0611 21.6218 33.5487 21.3135 33.002H21.0007V34.0184C21.0007 34.3838 21.1712 34.3976 21.3887 34.3976H21.4748V34.5403C21.2037 34.5403 20.9295 34.522 20.6584 34.522C20.4306 34.522 20.2074 34.5403 19.9701 34.5403V34.3976H20.0558C20.232 34.3976 20.3932 34.3173 20.3932 34.142V31.7298ZM21.0007 32.8308H21.2326C21.7078 32.8308 21.9637 32.6509 21.9637 32.0905C21.9637 31.6685 21.6931 31.3979 21.2702 31.3979C21.1277 31.3979 21.067 31.4125 21.0007 31.4171V32.8308Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M23.2122 34.5605C23.053 34.5605 22.9021 34.5415 22.746 34.5415C22.6013 34.5415 22.4495 34.5605 22.2842 34.5526C21.92 34.0747 21.608 33.5651 21.3015 33.0233H21.021V34.0174C21.0262 34.3747 21.1694 34.372 21.3888 34.3771H21.4953V34.5605H21.4743C21.203 34.5605 20.9272 34.5415 20.6582 34.5415C20.4315 34.5415 20.2085 34.5605 19.9701 34.5605H19.9495V34.3771H20.0558C20.2265 34.3758 20.3708 34.3014 20.3715 34.1419V31.7297C20.3679 31.3932 20.2032 31.3948 20.0558 31.3901H19.9495V31.2063H19.9701C20.1237 31.2063 20.4168 31.2248 20.7062 31.2248C20.9896 31.2248 21.2172 31.2063 21.4702 31.2063C22.0686 31.2076 22.6193 31.3723 22.6207 32.0619C22.6207 32.4902 22.3376 32.7579 21.9716 32.9072L22.7686 34.1013C22.9014 34.2982 22.984 34.3474 23.2149 34.3771L23.2322 34.3798V34.5605H23.2122ZM21.0005 32.9814H21.3248L21.3307 32.992C21.6398 33.5373 21.9517 34.0499 22.3011 34.5199C22.4456 34.5199 22.5981 34.5008 22.746 34.5008C22.8974 34.5008 23.044 34.5174 23.1914 34.5195V34.4153C22.9689 34.3882 22.8644 34.321 22.7348 34.1243L21.9085 32.8887L21.9319 32.8792C22.3036 32.7327 22.5791 32.4792 22.5792 32.0619C22.5791 31.4034 22.0668 31.2507 21.4702 31.2474C21.2202 31.2474 20.9921 31.2667 20.7062 31.2667C20.4274 31.2667 20.1457 31.2489 19.9904 31.2474V31.3484H20.0558C20.2032 31.3488 20.4128 31.3732 20.4128 31.7297V34.1419C20.4128 34.3323 20.2344 34.4189 20.0558 34.4193H19.9904V34.5195C20.2186 34.5186 20.4353 34.5008 20.6582 34.5008C20.9233 34.5008 21.1913 34.5186 21.4538 34.5195V34.4193H21.3888C21.1726 34.4189 20.9795 34.3921 20.9795 34.0174V32.9814H21.0005ZM21.0005 32.8511H20.9795V31.3978L20.9976 31.3964C21.0627 31.3912 21.1266 31.3781 21.2702 31.3781C21.7025 31.3781 21.984 31.6589 21.9844 32.0917C21.9831 32.6584 21.7115 32.851 21.2326 32.8511H21.0005ZM21.2326 32.8107C21.7025 32.8061 21.9393 32.6431 21.9439 32.0917C21.9411 31.677 21.6836 31.4197 21.2702 31.4179C21.1421 31.4179 21.0815 31.4298 21.021 31.4357V32.8107H21.2326Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M26.4347 33.6048L26.443 33.5954V31.816C26.443 31.4265 26.1733 31.3695 26.0308 31.3695H25.9268V31.2271C26.1499 31.2271 26.3675 31.2459 26.5912 31.2459C26.7863 31.2459 26.9794 31.2271 27.1755 31.2271V31.3695H27.104C26.9045 31.3695 26.6816 31.4074 26.6816 31.9723V34.1319C26.6816 34.2983 26.6862 34.4643 26.7096 34.6116H26.5299L24.0857 31.8866V33.8426C24.0857 34.2559 24.1659 34.3976 24.5313 34.3976H24.6122V34.5403C24.4082 34.5403 24.2038 34.5218 23.9998 34.5218C23.7855 34.5218 23.5676 34.5403 23.3541 34.5403V34.3976H23.4201C23.7478 34.3976 23.848 34.1745 23.848 33.7959V31.7961C23.848 31.5305 23.6294 31.3695 23.4159 31.3695H23.3541V31.2271C23.5338 31.2271 23.7203 31.2459 23.9003 31.2459C24.0414 31.2459 24.1797 31.2271 24.3224 31.2271L26.4347 33.6048"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M26.7094 34.6315L26.5145 34.6248L24.1053 31.9404V33.8424C24.1109 34.2558 24.1734 34.3726 24.5313 34.3771H24.6319V34.5605H24.6113C24.4061 34.5605 24.2024 34.5407 23.999 34.5407C23.7871 34.5407 23.5678 34.5605 23.354 34.5605H23.3328V34.3771H23.4201C23.7336 34.3758 23.8234 34.1737 23.8265 33.7946V31.796C23.8259 31.543 23.619 31.3901 23.4159 31.3901H23.3328V31.2063H23.354C23.5352 31.2063 23.721 31.2248 23.9002 31.2248C24.0396 31.2248 24.177 31.2063 24.3362 31.2124L26.4229 33.5617V31.8159C26.4216 31.439 26.1688 31.3923 26.0308 31.3901H25.9056V31.2063H25.9263C26.1505 31.2063 26.3693 31.2248 26.5912 31.2248C26.7845 31.2248 26.9789 31.2063 27.1746 31.2063H27.1956V31.3901H27.104C26.9081 31.3948 26.7064 31.4124 26.7017 31.9722V34.1318C26.7017 34.298 26.7058 34.4626 26.7301 34.6081L26.7324 34.6315H26.7094ZM26.5298 34.5901H26.6853C26.6645 34.4482 26.6604 34.2897 26.6604 34.1318V31.9722C26.6607 31.4025 26.9008 31.3497 27.104 31.3484H27.1539V31.2474C26.9671 31.2489 26.7795 31.2661 26.5912 31.2661C26.3731 31.2661 26.1616 31.2489 25.9469 31.2474V31.3484H26.0308C26.1771 31.3497 26.4645 31.4136 26.4645 31.8159L26.4577 33.6102L26.4491 33.6194L26.4342 33.635L24.3224 31.2474C24.1812 31.2474 24.0435 31.2661 23.9002 31.2661C23.7241 31.2661 23.5467 31.2489 23.3743 31.2474V31.3484H23.4159C23.6393 31.3497 23.8676 31.518 23.8676 31.796V33.7946C23.8676 34.1755 23.7604 34.418 23.4201 34.4193L23.3743 34.4189V34.5197C23.5793 34.5183 23.7907 34.5008 23.999 34.5008C24.198 34.5008 24.3953 34.5183 24.5915 34.5197V34.4193H24.5313C24.1578 34.4189 24.0647 34.2558 24.0636 33.8424V31.8341L26.5298 34.5901ZM26.4342 33.6047L26.4496 33.591L26.4342 33.6047ZM26.4229 33.5953V33.5941L26.4194 33.5905L26.4229 33.5953Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M27.9385 33.8616C27.8907 34.0224 27.8334 34.1471 27.8334 34.2314C27.8334 34.3742 28.0334 34.3977 28.1895 34.3977H28.2425V34.5402C28.0519 34.53 27.8582 34.5219 27.6672 34.5219C27.4963 34.5219 27.3264 34.53 27.155 34.5402V34.3977H27.1839C27.3686 34.3977 27.5258 34.2883 27.5962 34.0889L28.3557 31.911C28.4177 31.7349 28.5032 31.4977 28.5321 31.3217C28.683 31.2697 28.8737 31.1754 28.9635 31.1177C28.9782 31.1129 28.987 31.108 29.0014 31.108C29.0158 31.108 29.0246 31.108 29.035 31.1229C29.049 31.1605 29.0628 31.2033 29.0776 31.2412L29.9513 33.724C30.0083 33.8896 30.0647 34.0652 30.1254 34.2084C30.1833 34.3415 30.283 34.3977 30.4402 34.3977H30.4686V34.5402C30.2548 34.53 30.0406 34.5219 29.8139 34.5219C29.5812 34.5219 29.3431 34.53 29.1011 34.5402V34.3977H29.1534C29.2619 34.3977 29.4482 34.3789 29.4482 34.2601C29.4482 34.1988 29.4053 34.0706 29.3523 33.918L29.1674 33.3677H28.0901L27.9385 33.8616ZM28.6315 31.7588H28.6216L28.1805 33.1022H29.0673L28.6315 31.7588Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M30.4672 34.5605C30.2539 34.5514 30.0399 34.5408 29.8139 34.5408C29.5812 34.5408 29.3444 34.5514 29.1022 34.5605L29.0803 34.5616V34.3762H29.1534C29.2634 34.3762 29.4265 34.3516 29.4269 34.2601C29.428 34.206 29.3854 34.076 29.3331 33.925L29.1524 33.388H28.1054L27.9578 33.8677C27.91 34.0291 27.8523 34.1545 27.8532 34.2317C27.8548 34.3476 28.032 34.3762 28.1895 34.3762H28.2625V34.5616L28.2409 34.5605C28.0512 34.5514 27.8575 34.5408 27.6676 34.5408C27.4982 34.5408 27.3266 34.5514 27.1566 34.5605L27.1345 34.5616V34.3762H27.1838C27.3602 34.3758 27.5075 34.275 27.5761 34.0822L28.3363 31.9036C28.3976 31.7279 28.4838 31.4918 28.5248 31.3021C28.6737 31.2516 28.8647 31.1558 28.9558 31.0985C28.9691 31.0938 28.9822 31.0877 29.0013 31.0877C29.0129 31.087 29.0385 31.0901 29.0539 31.1149C29.0674 31.1539 29.0825 31.1964 29.0968 31.2347L29.9707 33.7172C30.0266 33.8834 30.0834 34.0587 30.1456 34.1994C30.2005 34.3259 30.2877 34.3758 30.4402 34.3762H30.4882V34.5616L30.4672 34.5605ZM29.1218 34.5183C29.3566 34.51 29.5872 34.5009 29.8139 34.5009C30.034 34.5009 30.241 34.51 30.4472 34.5183V34.4189H30.4402C30.2774 34.42 30.1655 34.3561 30.1073 34.2161C30.0455 34.0727 29.9878 33.8965 29.9318 33.7303L29.0579 31.2476C29.0435 31.2097 29.03 31.1673 29.0176 31.1336C29.0129 31.1289 29.014 31.1289 29.0102 31.1289H29.0013C28.9917 31.1289 28.986 31.1318 28.9738 31.1348C28.8825 31.1941 28.6922 31.2877 28.551 31.3247C28.5221 31.5046 28.4366 31.7417 28.3749 31.9176L27.6155 34.0957C27.5433 34.302 27.3764 34.4193 27.1838 34.4189H27.1758V34.5183C27.3386 34.51 27.5028 34.5009 27.6676 34.5009C27.8512 34.5009 28.0384 34.51 28.2201 34.5183V34.4189H28.1895C28.0345 34.4168 27.8185 34.3999 27.8131 34.2317C27.8135 34.1376 27.8717 34.0161 27.9182 33.8557L27.9384 33.8616L27.9182 33.8551L28.0745 33.3479H29.1813L29.3714 33.9116C29.4247 34.0643 29.4679 34.1908 29.4679 34.2601C29.4608 34.4055 29.2611 34.4162 29.1534 34.4189H29.1218V34.5183ZM28.1516 33.1226L28.606 31.7378H28.6315V31.7588L28.6265 31.7602L28.6315 31.7588V31.7378H28.6457L29.0968 33.1226H28.1516ZM28.2084 33.0811H29.0393L28.6263 31.8093L28.2084 33.0811ZM28.6108 31.7649L28.6218 31.7615L28.6108 31.7649Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M30.6772 31.4643C30.3212 31.4643 30.3069 31.5502 30.2354 31.8962H30.0927C30.1114 31.7633 30.1357 31.6305 30.1504 31.4929C30.1689 31.3594 30.1781 31.227 30.1781 31.0897H30.2929C30.3301 31.2322 30.449 31.227 30.5771 31.227H33.0267C33.1542 31.227 33.2728 31.2223 33.2822 31.0798L33.3957 31.0992C33.3781 31.227 33.3592 31.3553 33.3443 31.4837C33.3339 31.6118 33.3339 31.7396 33.3339 31.8677L33.1921 31.9205C33.1837 31.7451 33.1598 31.4643 32.8411 31.4643H32.0628V33.9895C32.0628 34.3557 32.2291 34.3976 32.4566 34.3976H32.5473V34.5402C32.3619 34.5402 32.0302 34.5219 31.7733 34.5219C31.4891 34.5219 31.156 34.5402 30.9709 34.5402V34.3976H31.0613C31.3229 34.3976 31.4553 34.3742 31.4553 33.9994V31.4643H30.6772"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M32.5474 34.5605C32.3609 34.5605 32.0281 34.5417 31.773 34.5417C31.4895 34.5417 31.1571 34.5605 30.9711 34.5605H30.9501V34.3771H31.0613C31.3231 34.371 31.428 34.3676 31.4343 33.9994L31.434 31.4847H30.6772V31.4431H31.4758V33.9994C31.4758 34.3805 31.322 34.4181 31.0613 34.419H30.9914V34.5199C31.179 34.5183 31.4979 34.5009 31.773 34.5009C32.0211 34.5009 32.3388 34.5183 32.5261 34.5199V34.419H32.4564C32.2277 34.4181 32.0428 34.3631 32.0425 33.9896V31.4431H32.8411C33.16 31.4444 33.2015 31.715 33.2107 31.8916L33.3138 31.8537C33.3138 31.7297 33.3145 31.6056 33.3242 31.4814C33.337 31.3591 33.355 31.2376 33.3722 31.1165L33.3005 31.1039C33.2788 31.2421 33.1447 31.2498 33.0267 31.2477H30.5529C30.4409 31.2489 30.3198 31.2425 30.2767 31.1097H30.1991C30.198 31.241 30.1887 31.3686 30.17 31.4951C30.1571 31.626 30.1342 31.7516 30.1161 31.8765H30.2182C30.2805 31.5454 30.3216 31.4379 30.6772 31.4431V31.4847C30.3252 31.4908 30.333 31.5504 30.2555 31.9011L30.2521 31.9173H30.0688L30.0717 31.8938C30.0917 31.7603 30.115 31.6269 30.1289 31.4902C30.1483 31.3574 30.1571 31.2258 30.1571 31.0897V31.0687H30.3078L30.3118 31.0836C30.345 31.2033 30.4314 31.2042 30.5529 31.2063H33.0267C33.158 31.2042 33.2538 31.2024 33.2622 31.0786L33.263 31.0558L33.2851 31.0601L33.4198 31.0813L33.4166 31.1023C33.397 31.2297 33.379 31.3574 33.3647 31.4847C33.355 31.6119 33.355 31.7396 33.355 31.8677V31.8821L33.3411 31.8876L33.1731 31.9491L33.1724 31.9216C33.16 31.743 33.1411 31.4847 32.8411 31.4847H32.0833V33.9896C32.0881 34.3475 32.2302 34.3726 32.4564 34.3771H32.5671V34.5605H32.5474"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M33.5714 34.3976H33.6379C33.8089 34.3976 33.9886 34.3743 33.9886 34.1272V31.6406C33.9886 31.3932 33.8089 31.3697 33.6379 31.3697H33.5714V31.2271C33.7566 31.2271 34.0409 31.2459 34.2732 31.2459C34.5111 31.2459 34.796 31.2271 35.0195 31.2271V31.3697H34.9529C34.7813 31.3697 34.6009 31.3932 34.6009 31.6406V34.1272C34.6009 34.3743 34.7813 34.3976 34.9529 34.3976H35.0195V34.5403C34.7915 34.5403 34.5064 34.522 34.2694 34.522C34.0364 34.522 33.7566 34.5403 33.5714 34.5403V34.3976"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M35.0196 34.5605C34.7901 34.5605 34.5063 34.5407 34.2695 34.5407C34.0371 34.5407 33.7569 34.5605 33.5714 34.5605H33.5511V34.3771H33.6381C33.8091 34.3742 33.9669 34.3591 33.968 34.1271V31.6406C33.9669 31.4086 33.8091 31.3932 33.6381 31.3901H33.5511V31.2063H33.5714C33.7569 31.2063 34.0424 31.2248 34.2732 31.2248C34.5098 31.2248 34.7946 31.2063 35.0196 31.2063H35.0393V31.3901H34.9531C34.7793 31.3932 34.6232 31.4086 34.6216 31.6406V34.1271C34.6232 34.3591 34.7793 34.3742 34.9531 34.3771H35.0393V34.5605H35.0196ZM34.998 34.5195V34.4189H34.9531C34.7828 34.4189 34.5814 34.3891 34.5814 34.1271V31.6406C34.5814 31.3781 34.7828 31.3488 34.9531 31.3484H34.998V31.2474C34.7792 31.2489 34.5043 31.2661 34.2732 31.2661C34.0479 31.2661 33.7763 31.2489 33.5921 31.2474V31.3484H33.6381C33.8066 31.3488 34.0089 31.3781 34.0095 31.6406V34.1271C34.0089 34.3891 33.8066 34.4189 33.6381 34.4189H33.5921V34.5195C33.775 34.5174 34.0434 34.5008 34.2695 34.5008C34.4996 34.5008 34.7741 34.5183 34.998 34.5195Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M36.9122 31.1559C37.9241 31.1559 38.7306 31.7831 38.7306 32.7941C38.7306 33.8859 37.9472 34.6116 36.9366 34.6116C35.9299 34.6116 35.1613 33.928 35.1613 32.9073C35.1613 31.9205 35.9253 31.1559 36.9122 31.1559ZM36.9839 34.4026C37.905 34.4026 38.0656 33.5904 38.0656 32.8983C38.0656 32.2046 37.6916 31.3648 36.9032 31.3648C36.0728 31.3648 35.8257 32.1054 35.8257 32.7409C35.8257 33.5904 36.2152 34.4026 36.9839 34.4026Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M35.1401 32.9073C35.1421 31.9091 35.9148 31.1369 36.9119 31.1353V31.1768C35.9362 31.1768 35.1814 31.931 35.1803 32.9073C35.1823 33.9165 35.9398 34.5899 36.9367 34.5902C37.9371 34.5899 38.7092 33.8746 38.7104 32.7934C38.7095 31.795 37.9157 31.1777 36.9119 31.1768V31.1353C37.931 31.1363 38.749 31.7697 38.7508 32.7934C38.7498 33.8966 37.9571 34.6298 36.9367 34.6316C35.9214 34.6298 35.1421 33.9393 35.1401 32.9073ZM35.8048 32.7409C35.8063 32.1022 36.0555 31.3437 36.903 31.3437C37.709 31.3455 38.0848 32.2009 38.0864 32.8983C38.0848 33.5904 37.922 34.4221 36.984 34.4221V34.3818C37.8865 34.3811 38.0433 33.5904 38.0447 32.8983C38.0447 32.2107 37.6745 31.3868 36.903 31.3855C36.0887 31.3864 35.8481 32.1087 35.846 32.7409C35.8463 33.5864 36.2323 34.3806 36.984 34.3818V34.4221C36.1962 34.4214 35.8063 33.5954 35.8048 32.7409Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M41.929 33.6048L41.9389 33.5954V31.816C41.9389 31.4265 41.6674 31.3695 41.5251 31.3695H41.4218V31.2271C41.6442 31.2271 41.8631 31.2459 42.0855 31.2459C42.2806 31.2459 42.4752 31.2271 42.67 31.2271V31.3695H42.5986C42.3997 31.3695 42.1757 31.4074 42.1757 31.9723V34.1319C42.1757 34.2983 42.1807 34.4643 42.2048 34.6116H42.0242L39.5793 31.8866V33.8426C39.5793 34.2559 39.6604 34.3976 40.0251 34.3976H40.1065V34.5403C39.9022 34.5403 39.6985 34.5218 39.4944 34.5218C39.2805 34.5218 39.0621 34.5403 38.8484 34.5403V34.3976H38.9151C39.2432 34.3976 39.3422 34.1745 39.3422 33.7959V31.7961C39.3422 31.5305 39.1246 31.3695 38.9099 31.3695H38.8484V31.2271C39.0288 31.2271 39.2137 31.2459 39.3945 31.2459C39.5366 31.2459 39.6735 31.2271 39.8165 31.2271L41.929 33.6048"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M42.205 34.6315L42.0086 34.6248L39.5998 31.9404V33.8425C39.6054 34.2558 39.6681 34.372 40.0245 34.3762H40.1268V34.5605H40.1066C39.9011 34.5605 39.6974 34.5415 39.4943 34.5415C39.2816 34.5415 39.0631 34.5605 38.8479 34.5605H38.8285V34.3762H38.9149C39.2277 34.3753 39.3179 34.1737 39.3217 33.7957V31.796C39.3215 31.543 39.114 31.3901 38.9101 31.3901H38.8285V31.2063H38.8479C39.0299 31.2063 39.215 31.2248 39.3943 31.2248C39.5351 31.2248 39.6715 31.2063 39.8325 31.2137L41.918 33.5617V31.8159C41.9164 31.439 41.6636 31.3932 41.5251 31.3901H41.4001V31.2063H41.4218C41.6448 31.2063 41.8638 31.2248 42.085 31.2248C42.2792 31.2248 42.4729 31.2063 42.6701 31.2063H42.6901V31.3901H42.5984C42.4028 31.3951 42.2008 31.4131 42.1969 31.9722V34.1318C42.1969 34.298 42.2007 34.4637 42.2237 34.6081L42.2278 34.6315H42.205ZM42.0242 34.5901H42.1798C42.1597 34.4473 42.155 34.2897 42.155 34.1318V31.9722C42.155 31.4016 42.3947 31.3497 42.5984 31.3484H42.6498V31.2474C42.4614 31.2489 42.2747 31.2661 42.085 31.2661C41.8688 31.2661 41.6566 31.2489 41.4417 31.2474V31.3484H41.5251C41.6717 31.3497 41.9583 31.4145 41.9583 31.8159L41.9533 33.6102L41.9441 33.6194L41.929 33.635L39.8167 31.2474C39.6762 31.2474 39.538 31.2661 39.3943 31.2661C39.2193 31.2661 39.041 31.2489 38.8684 31.2474V31.3484H38.9101C39.1332 31.3497 39.3625 31.518 39.3625 31.796V33.7957C39.3625 34.1755 39.2565 34.418 38.9149 34.4193L38.8684 34.4189V34.5197C39.0745 34.5183 39.2857 34.5008 39.4943 34.5008C39.6923 34.5008 39.8891 34.5183 40.0858 34.5197V34.4193H40.0245C39.6521 34.4189 39.5587 34.2558 39.5587 33.8425V31.8333L42.0242 34.5901ZM41.929 33.6047L41.9441 33.591L41.929 33.6047ZM41.918 33.5953V33.5941L41.9143 33.5905L41.918 33.5953Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M43.4324 33.8616C43.3859 34.0224 43.3286 34.1471 43.3286 34.2314C43.3286 34.3742 43.5285 34.3977 43.6841 34.3977H43.7371V34.5402C43.547 34.53 43.3523 34.5219 43.1622 34.5219C42.9913 34.5219 42.8207 34.53 42.6505 34.5402V34.3977H42.6775C42.8636 34.3977 43.0208 34.2883 43.0902 34.0889L43.8512 31.911C43.9125 31.7349 43.9984 31.4977 44.0257 31.3217C44.1782 31.2697 44.3676 31.1754 44.459 31.1177C44.4723 31.1129 44.4819 31.108 44.4966 31.108C44.5104 31.108 44.5194 31.108 44.5291 31.1229C44.5435 31.1605 44.5577 31.2033 44.572 31.2412L45.4454 33.724C45.502 33.8896 45.5593 34.0652 45.6213 34.2084C45.6783 34.3415 45.7778 34.3977 45.9343 34.3977H45.9636V34.5402C45.7496 34.53 45.5358 34.5219 45.3078 34.5219C45.0757 34.5219 44.838 34.53 44.5956 34.5402V34.3977H44.6482C44.7567 34.3977 44.9429 34.3789 44.9429 34.2601C44.9429 34.1988 44.9003 34.0706 44.8473 33.918L44.6622 33.3677H43.585L43.4324 33.8616ZM44.1265 31.7588H44.117L43.6744 33.1022H44.5634L44.1265 31.7588Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M45.9614 34.5605C45.7475 34.552 45.5344 34.5414 45.308 34.5414C45.0764 34.5414 44.8385 34.552 44.5967 34.5605L44.5757 34.5616V34.3771H44.6479C44.7582 34.3771 44.9217 34.3515 44.9219 34.2601C44.9231 34.206 44.8802 34.0765 44.8268 33.925L44.6468 33.388H43.599L43.4524 33.8677C43.4046 34.0303 43.3485 34.1544 43.3491 34.2313C43.3491 34.3476 43.5271 34.3771 43.684 34.3771H43.7566V34.5616L43.7352 34.5605C43.5456 34.552 43.3512 34.5414 43.1622 34.5414C42.9921 34.5414 42.8218 34.552 42.6505 34.5605L42.6299 34.5616V34.3771H42.6775C42.8545 34.3762 43.0025 34.2748 43.072 34.0822L43.8311 31.9036C43.892 31.7279 43.9777 31.4918 44.0194 31.3028C44.1685 31.251 44.3592 31.1558 44.4515 31.0985C44.4637 31.0938 44.477 31.0881 44.4964 31.0881C44.5087 31.087 44.5336 31.09 44.5482 31.1159C44.5626 31.1533 44.5766 31.1964 44.592 31.2347L45.4648 33.7171C45.522 33.8833 45.5786 34.0587 45.6402 34.2003C45.6961 34.3258 45.782 34.3758 45.9338 34.3771H45.9828V34.5616L45.9614 34.5605ZM44.6159 34.5186C44.8507 34.51 45.0816 34.5008 45.308 34.5008C45.5286 34.5008 45.7351 34.51 45.9422 34.5183L45.9417 34.4189H45.9338C45.773 34.4193 45.661 34.356 45.6018 34.2161C45.5392 34.0727 45.4828 33.8964 45.4259 33.7308L44.5525 31.2476C44.5385 31.2097 44.5234 31.1673 44.5123 31.1344C44.5083 31.1289 44.5087 31.1289 44.5058 31.1289H44.4964C44.4862 31.1289 44.481 31.1321 44.4697 31.1353C44.3768 31.1934 44.1869 31.2886 44.0467 31.3247C44.0173 31.5045 43.931 31.7413 43.8699 31.9176L43.1098 34.0957C43.0375 34.302 42.8717 34.4193 42.6775 34.4189H42.6705V34.5183C42.834 34.51 42.9971 34.5008 43.1622 34.5008C43.346 34.5008 43.5338 34.51 43.7161 34.5183V34.4189H43.684C43.5297 34.4168 43.3133 34.4004 43.3072 34.2313C43.3085 34.1376 43.3669 34.0165 43.4134 33.8557L43.4325 33.8616L43.4134 33.8551L43.5695 33.3479H44.6759L44.8666 33.9115C44.9188 34.0643 44.9621 34.1907 44.9621 34.2601C44.9553 34.4054 44.7557 34.4162 44.6479 34.4189H44.6159V34.5186ZM43.6461 33.1224L44.1019 31.7377H44.1265V31.7588L44.1211 31.7602L44.1265 31.7588V31.7377H44.1409L44.5897 33.1224H43.6461ZM43.7034 33.0811H44.5338L44.1209 31.81L43.7034 33.0811ZM44.1067 31.7649L44.1161 31.7615L44.1067 31.7649Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M47.1591 34.0748C47.1591 34.2656 47.291 34.3218 47.4433 34.3416C47.6376 34.3558 47.8514 34.3558 48.0704 34.3315C48.2695 34.3076 48.4403 34.1944 48.5255 34.0748C48.6009 33.9706 48.6437 33.8376 48.6728 33.7334H48.8101C48.7578 34.004 48.6915 34.2701 48.6345 34.5403C48.2177 34.5403 47.7987 34.522 47.3817 34.522C46.9636 34.522 46.5463 34.5403 46.1287 34.5403V34.3976H46.1945C46.3657 34.3976 46.5515 34.3743 46.5515 34.08V31.6406C46.5515 31.3932 46.3657 31.3695 46.1945 31.3695H46.1287V31.2271C46.3799 31.2271 46.6271 31.2459 46.8783 31.2459C47.1208 31.2459 47.3576 31.2271 47.6004 31.2271V31.3695H47.4811C47.3007 31.3695 47.1591 31.3746 47.1591 31.6261V34.0748"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M48.6347 34.5605C48.2161 34.5605 47.798 34.5415 47.3817 34.5415C46.9641 34.5415 46.5464 34.5605 46.1278 34.5605H46.1078V34.3771H46.1944C46.366 34.3729 46.529 34.3609 46.531 34.0799V31.6397C46.529 31.4086 46.3667 31.3932 46.1944 31.3901H46.1078V31.2063H46.1278C46.3806 31.2063 46.6276 31.2248 46.8779 31.2248C47.1196 31.2248 47.356 31.2063 47.6003 31.2063H47.6194V31.3901H47.481C47.2969 31.3948 47.1826 31.3865 47.1785 31.626V34.0747C47.1797 34.2522 47.296 34.2996 47.4444 34.3208C47.5279 34.3266 47.6163 34.3296 47.7076 34.3296C47.8237 34.3296 47.9442 34.3242 48.0669 34.3113C48.2603 34.2883 48.4266 34.1765 48.5087 34.0634C48.582 33.9618 48.6234 33.8318 48.6521 33.7285L48.6561 33.7128H48.835L48.8309 33.7378C48.7772 34.0091 48.7118 34.2739 48.6543 34.5445L48.6505 34.5605H48.6347ZM48.6173 34.5195C48.6722 34.2617 48.7342 34.0096 48.7856 33.7536H48.6877C48.6586 33.8569 48.6162 33.9843 48.5418 34.0876C48.453 34.2105 48.2773 34.3266 48.0714 34.3521C47.9473 34.3647 47.8238 34.3711 47.7076 34.3711C47.6156 34.3711 47.5269 34.367 47.4404 34.3609C47.2861 34.344 47.1368 34.2777 47.137 34.0747V31.626C47.137 31.3621 47.3039 31.3484 47.481 31.3484H47.5788V31.2474C47.345 31.2489 47.1142 31.2667 46.8779 31.2667C46.6327 31.2667 46.3921 31.2489 46.1492 31.2474V31.3484H46.1944C46.3637 31.3484 46.5709 31.3781 46.5709 31.6397V34.0799C46.5709 34.3871 46.3646 34.4189 46.1944 34.4189H46.1492V34.5195C46.5592 34.5186 46.9695 34.5008 47.3817 34.5008C47.7944 34.5008 48.2064 34.5186 48.6173 34.5195Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.1061 14.47C19.1061 10.0302 22.7052 6.43115 27.1447 6.43115C31.5845 6.43115 35.1836 10.0302 35.1836 14.47C35.1836 18.9097 31.5845 22.509 27.1447 22.509C22.7052 22.509 19.1061 18.9097 19.1061 14.47"
                                            fill="#FFFFFE"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M32.0064 14.3117C32.0031 12.2531 30.7164 10.4974 28.9032 9.80211V18.821C30.7164 18.1248 32.0031 16.3707 32.0064 14.3117ZM25.4442 18.8192V9.80301C23.6326 10.5005 22.3478 12.2537 22.343 14.3117C22.3478 16.3693 23.6326 18.1223 25.4442 18.8192ZM27.1746 6.68866C22.9646 6.69028 19.5538 10.1018 19.5531 14.3117C19.5538 18.5212 22.9646 21.9321 27.1746 21.9328C31.3845 21.9321 34.7961 18.5212 34.7971 14.3117C34.7961 10.1018 31.3845 6.69028 27.1746 6.68866ZM27.1559 22.6522C22.5491 22.6742 18.7574 18.9419 18.7574 14.3987C18.7574 9.43343 22.5491 5.9991 27.1559 6H29.3148C33.8672 5.9991 38.022 9.43182 38.022 14.3987C38.022 18.9403 33.8672 22.6522 29.3148 22.6522H27.1559Z"
                                            fill="#0069AA"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.02069 34.3976H8.08735C8.25803 34.3976 8.43842 34.3743 8.43842 34.1272V31.6406C8.43842 31.3932 8.25803 31.3697 8.08735 31.3697H8.02069V31.2271C8.20575 31.2271 8.49052 31.2459 8.72373 31.2459C8.96089 31.2459 9.2453 31.2271 9.46845 31.2271V31.3697H9.40143C9.23147 31.3697 9.05072 31.3932 9.05072 31.6406V34.1272C9.05072 34.3743 9.23147 34.3976 9.40143 34.3976H9.46845V34.5403C9.24081 34.5403 8.95532 34.522 8.71888 34.522C8.48585 34.522 8.20575 34.5403 8.02069 34.5403V34.3976"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.46842 34.5605C9.2388 34.5605 8.95475 34.5415 8.71849 34.5415C8.48618 34.5415 8.20698 34.5605 8.02066 34.5605H8V34.3771H8.08696C8.25926 34.3729 8.41593 34.3591 8.41737 34.1271V31.6406C8.41593 31.4082 8.25926 31.3932 8.08696 31.3901H8V31.2063H8.02066C8.20698 31.2063 8.49157 31.2248 8.7237 31.2248C8.95978 31.2248 9.24401 31.2063 9.46842 31.2063H9.48962V31.3901H9.4023C9.22982 31.3932 9.07225 31.4082 9.07135 31.6406V34.1271C9.07225 34.3591 9.22982 34.3729 9.4023 34.3771H9.48962V34.5605H9.46842ZM9.44793 34.5199L9.44811 34.4189H9.4023C9.23251 34.4189 9.03075 34.3891 9.02967 34.1271V31.6406C9.03075 31.3781 9.23251 31.3488 9.4023 31.3488H9.44793V31.2474C9.22892 31.2476 8.95385 31.2667 8.7237 31.2667C8.49822 31.2667 8.2253 31.2489 8.0415 31.2474V31.3488H8.08696C8.2562 31.3488 8.45833 31.3781 8.45833 31.6406V34.1271C8.45833 34.3891 8.2562 34.4189 8.08696 34.4189H8.0415V34.5199C8.2253 34.5183 8.49336 34.5008 8.71849 34.5008C8.94972 34.5008 9.22407 34.5186 9.44793 34.5199Z"
                                            fill="#1A1919"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M48.7522 31.0924C49.0386 31.0924 49.2522 31.3123 49.2522 31.5933C49.2522 31.8741 49.0386 32.0917 48.7522 32.0917C48.4665 32.0917 48.2526 31.8741 48.2526 31.5933C48.2526 31.3123 48.4665 31.0924 48.7522 31.0924ZM48.7522 31.9988C48.9764 31.9988 49.1477 31.8082 49.1477 31.5933C49.1477 31.3781 48.9784 31.186 48.7522 31.186C48.5273 31.186 48.3562 31.3781 48.3562 31.5933C48.3562 31.8082 48.5273 31.9988 48.7522 31.9988ZM48.5037 31.8569V31.8326C48.5648 31.8238 48.5763 31.8254 48.5763 31.7881V31.4176C48.5763 31.3655 48.5711 31.3475 48.5057 31.3504V31.3249H48.7616C48.8494 31.3249 48.9304 31.3669 48.9304 31.4578C48.9304 31.5321 48.8816 31.5872 48.8122 31.6086L48.8945 31.7232C48.9328 31.775 48.9764 31.8238 49.0045 31.8411V31.8569H48.9073C48.8606 31.8569 48.8192 31.7588 48.7276 31.6271H48.6723V31.7927C48.6723 31.8254 48.6838 31.8238 48.7452 31.8326V31.8569H48.5037ZM48.6723 31.5933H48.7312C48.7957 31.5933 48.8255 31.5446 48.8255 31.4658C48.8255 31.3863 48.7795 31.3581 48.728 31.3581H48.6723V31.5933Z"
                                            fill="#1A1919"
                                          />
                                        </svg>
                                      )}
                                      {item?.str?.brand === "amex" && (
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-6 h-7"
                                          width="800px"
                                          height="248px"
                                          viewBox="-150 -249.37925 1300 1496.2755"
                                        >
                                          <path
                                            d="M0 0h997.517v538.49l-49.375 77.147 49.375 68.661v313.219H0v-507.63l30.859-35.488L0 420.454z"
                                            fill="#016fd0"
                                          />
                                          <path
                                            d="M193.64 695.099v-156.61h165.82l17.791 23.193 18.38-23.193h601.886V684.3s-15.74 10.643-33.945 10.8H630.295l-20.058-24.688V695.1h-65.73v-42.142s-8.979 5.882-28.39 5.882h-22.373v36.26h-99.52l-17.766-23.69-18.038 23.69zM0 420.454l37.393-87.177h64.668l21.22 48.833v-48.833h80.388l12.633 35.295 12.247-35.295h360.858v17.744s18.97-17.744 50.146-17.744l117.085.41 20.854 48.193v-48.603h67.273l18.515 27.683v-27.683h67.89v156.61h-67.89l-17.744-27.774v27.773h-98.838l-9.94-24.687h-26.57l-9.779 24.687h-67.028c-26.826 0-43.974-17.381-43.974-17.381v17.381H488.343L468.285 465.2v24.687H92.481L82.548 465.2H56.06l-9.86 24.686H0z"
                                            fill="#fff"
                                          />
                                          <path
                                            d="M50.628 352.584L.193 469.848h32.836l9.306-23.482h54.1l9.257 23.482h33.56L88.863 352.584zm18.66 27.29l16.49 41.034H52.75zm73.435 89.954V352.564l46.661.173 27.14 75.605 26.49-75.778h46.289v117.264h-29.316v-86.405l-31.076 86.405h-25.71l-31.162-86.405v86.405zm166.638 0V352.564h95.663v26.23h-66.038v20.058h64.495v24.688h-64.495v20.83h66.038v25.458zm112.636-117.244v117.264h29.316v-41.66h12.343l35.15 41.66h35.826l-38.574-43.203c15.831-1.336 32.161-14.923 32.161-36.018 0-24.676-19.368-38.043-40.984-38.043zm29.316 26.23h33.51c8.04 0 13.887 6.288 13.887 12.343 0 7.79-7.577 12.344-13.452 12.344h-33.945zm118.807 91.014h-29.933V352.564h29.933zm70.975 0h-6.46c-31.262 0-50.243-24.63-50.243-58.15 0-34.349 18.768-59.114 58.246-59.114h32.402v27.773h-33.586c-16.026 0-27.36 12.507-27.36 31.63 0 22.71 12.96 32.248 31.63 32.248h7.715zm63.792-117.244l-50.435 117.264h32.836l9.305-23.482h54.1l9.258 23.482h33.559l-50.387-117.264zm18.66 27.29l16.49 41.034h-33.029zm73.386 89.954V352.564h37.272l47.59 73.676v-73.676h29.317v117.264h-36.067l-48.796-75.604v75.604zM213.699 675.04V557.776h95.662v26.23h-66.038v20.059h64.495v24.687h-64.495v20.83h66.038v25.458zm468.748 0V557.776h95.662v26.23h-66.038v20.059h64.187v24.687H712.07v20.83h66.038v25.458zm-369.373 0l46.578-57.908-47.687-59.356H348.9l28.4 36.693 28.497-36.693h35.488l-47.06 58.632 46.663 58.632H403.96l-27.576-36.114-26.905 36.114zM444.37 557.796V675.06h30.087v-37.03h30.859c26.111 0 45.903-13.853 45.903-40.792 0-22.317-15.523-39.442-42.094-39.442zm30.087 26.52h32.498c8.436 0 14.465 5.17 14.465 13.5 0 7.826-5.999 13.501-14.561 13.501h-32.402zm89.491-26.54V675.04h29.316v-41.66h12.344l35.15 41.66h35.825l-38.573-43.202c15.83-1.336 32.16-14.924 32.16-36.019 0-24.676-19.368-38.043-40.984-38.043zm29.316 26.23h33.511c8.039 0 13.887 6.288 13.887 12.344 0 7.79-7.577 12.343-13.453 12.343h-33.945zm198.423 91.034v-25.458h58.671c8.681 0 12.44-4.692 12.44-9.837 0-4.93-3.747-9.913-12.44-9.913h-26.513c-23.045 0-35.88-14.04-35.88-35.121 0-18.803 11.753-36.935 46-36.935h57.088l-12.343 26.385h-49.375c-9.438 0-12.343 4.952-12.343 9.682 0 4.86 3.59 10.222 10.8 10.222h27.773c25.69 0 36.838 14.572 36.838 33.655 0 20.517-12.422 37.32-38.236 37.32zm107.597 0v-25.458h58.67c8.682 0 12.44-4.692 12.44-9.837 0-4.93-3.746-9.913-12.44-9.913h-26.512c-23.046 0-35.88-14.04-35.88-35.121 0-18.803 11.753-36.935 45.999-36.935h57.089l-12.344 26.385h-49.374c-9.438 0-12.344 4.952-12.344 9.682 0 4.86 3.59 10.222 10.801 10.222h27.773c25.69 0 36.838 14.572 36.838 33.655 0 20.517-12.422 37.32-38.236 37.32z"
                                            fill="#016fd0"
                                          />
                                        </svg>
                                      )}
                                      {item?.str?.brand === "mastercard" && (
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
                                      {/* <ActionPopup></ActionPopup> */}
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
                                          className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800  focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
                                          className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-8 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
