"use client";
import { gbookings } from "@/utils/async/guest/gbookings/gbookings";
import { useEffect, useState } from "react";

const BookingHistory = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await gbookings();
      setData(res);
    })();
  }, []);
  console.log(data);

  return (
    <div className="flex-1">
      {/* Table Section */}
      <div className="max-w-[35rem] 2xl:max-w-[150rem] py-10 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-mx-2 overflow-x-auto">
            <div className="px-2 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      History
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      All Booking info, approved, reject and more.
                    </p>
                  </div>
                  {/* filter and search */}
                  <div className="inline-flex gap-x-4 items-center">
                    <div className="grid gap-3 md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                      {/* Input */}
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="hs-as-table-product-review-search"
                          className="sr-only"
                        >
                          Search
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="hs-as-table-product-review-search"
                            name="hs-as-table-product-review-search"
                            className="py-2 px-3 pl-11 block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Search"
                          />
                          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                            <svg
                              className="h-4 w-4 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline">
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
                            width="16"
                            height="16"
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
                              htmlFor="hs-as-filters-dropdown-all"
                              className="flex py-2.5 px-3"
                            >
                              <input
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-as-filters-dropdown-all"
                                defaultValue={"checked"}
                              />
                              <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                                Approved
                              </span>
                            </label>
                            <label
                              htmlFor="hs-as-filters-dropdown-published"
                              className="flex py-2.5 px-3"
                            >
                              <input
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-as-filters-dropdown-published"
                              />
                              <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                                Pending
                              </span>
                            </label>
                            <label
                              htmlFor="hs-as-filters-dropdown-pending"
                              className="flex py-2.5 px-3"
                            >
                              <input
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-as-filters-dropdown-pending"
                              />
                              <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                                Rejected
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
                <table className="min-w-full divide-y  divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-slate-800">
                    <tr>
                      <th
                        scope="col"
                        className="pl-6 lg:pl-6 pr-6 py-3 text-left"
                      >
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Resort Name
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Country
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
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Check In Date
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex  gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Total Paid
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {/* data mapping */}

                    {data?.data?.slice(0, 5).map((book, index) => {
                      return (
                        <tr key={index}>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="pl-6 lg:pl-6 pr-6 py-3">
                              <div className="flex items-center gap-x-3">
                                <div className="grow">
                                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    {book?.name}
                                  </span>
                                  <span className="block text-sm text-gray-500">
                                    {"City: Tropical Paradise Island"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="h-px w-72 whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200 ">
                                {"Thailand"}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-72 whitespace-nowrap">
                            <div className="px-6 py-3">
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
                            </div>
                          </td>
                          {/* <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              {book?.blocked === false && (
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
                                  Active
                                </span>
                              )}
                              {book?.blocked === true && (
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
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
                                  Blocked
                                </span>
                              )}
                            </div>
                          </td> */}

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-500">
                                {book?.data?.checkIn?.split("T")[0]}
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-500">
                                {book?.price * 5 + " " + "USD"}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    {/* End Data Mapping */}
                  </tbody>
                </table>
                {/* End Table */}
                {/* Pagination */}
                <nav
                  className="px-6 py-3 bg-white border-t border-gray-200 dark:bg-slate-900 dark:border-gray-700"
                  aria-label="Pagination"
                >
                  <ul className="inline-flex space-x-3">
                    <li>
                      {/* <button
                        className="flex items-center justify-center text-gray-400 rounded-md hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => {
                          // Handle previous page click
                        }}
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 9.293a1 1 0 011.414 0L11 11.586V6a1 1 0 112 0v5.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button> */}
                    </li>
                    <li>
                      {/* <button
                        className="flex items-center justify-center text-blue-600 bg-blue-100 rounded-md hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => {
                          // Handle next page click
                        }}
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 10.293a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L13 13.414V19a1 1 0 11-2 0v-5.586l-2.293 2.293a1 1 0 11-1.414-1.414l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button> */}
                    </li>
                  </ul>
                </nav>
                {/* End Pagination */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Table Section */}
    </div>
  );
};

export default BookingHistory;
