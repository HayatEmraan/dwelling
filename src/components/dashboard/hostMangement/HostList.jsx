"use client";
import { useState } from "react";
import HostModal from "./HostModal";
import { FcApproval, FcCancel, FcViewDetails, FcManager } from "react-icons/fc";
import { getsearchhost } from "@/utils/async/admin/hosts/getsearchhost";
import { gethosts } from "@/utils/async/admin/hosts/gethosts";

const HostList = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumber = async (page) => {
    const res = await gethosts(page);
    setData(res);
  };
  const handleInput = async (e) => {
    const value = e.target.value;
    const res = await getsearchhost(value);
    setData(res);
  };
  console.log(initialData);
  return (
    <div className="max-w-[150rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
      {/* Card */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              {/* Header */}

              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Host
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    View Host, filter, download and more.
                  </p>
                </div>

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
                          onChange={handleInput}
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
                </div>
              </div>
              <div className="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-gray-700">
                <button
                  type="button"
                  className="hs-collapse-toggle py-4 px-6 w-full flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-200"
                  id="hs-basic-collapse"
                  data-hs-collapse="#hs-as-table-collapse"
                >
                  <svg
                    className="hs-collapse-open:rotate-90 w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.50598 2L10.1524 7.64645C10.3477 7.84171 10.3477 8.15829 10.1524 8.35355L4.50598 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  Insights
                </button>
                <div
                  id="hs-as-table-collapse"
                  className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-collapse"
                >
                  <div className="pb-4 px-6">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="flex-shrink-0 h-5 w-5"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                          fill="currentColor"
                          className="fill-blue-500"
                        />
                        <path
                          d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                          fill="currentColor"
                          className="fill-white"
                        />
                      </svg>
                      <span className="text-sm text-gray-800 dark:text-gray-400">
                        There are no insights for this period.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <table className="p-2 min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr className="">
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Host ID
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Name
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
                          Email
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
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {data?.data?.map((item, index) => {
                    return (
                      <tr>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-2 text-left">
                            <p className="text-sm text-blue-600 decoration-2 dark:text-blue-500">
                              #{item?._id.slice(0, 5)}
                            </p>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap ">
                          <div className="px-6 py-2">
                            <span className="rounded-full bg-green-50 inline-flex items-center gap-1.5 py-0.5 px-2  text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200 mx-auto justify-center text-center">
                              <FcManager className="text-sm" />
                              <b>
                                {item?.name?.firstName} {item?.name?.lastName}
                              </b>
                            </span>
                          </div>
                        </td>
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
                              Host
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-2">
                            <span className="rounded-full bg-green-50 inline-flex items-center gap-1.5 py-0.5 px-2  text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200 mx-auto justify-center text-center">
                              <b>{item?.email}</b>
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-2">
                            <span className="rounded-full bg-green-50 inline-flex items-center gap-1.5 py-0.5 px-2  text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200 mx-auto justify-center text-center">
                              <b>{item?.country}</b>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* End Table */}
              {/* Footer */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {data?.startView}
                    </span>{" "}
                    results of {data?.totalView} entries
                  </p>
                </div>
                <div>
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
  );
};

export default HostList;
