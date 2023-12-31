import { BsViewList } from "react-icons/bs";

const DashBooking = () => {
    return (
      <div className="flex-1">
        <>
          {/* Table Section */}
          <div className="xl:max-w-[35rem] 2xl:max-w-[150rem] px-4 py-10 sm:px-6 lg:px-0 lg:py-0 mx-auto">
            {/* Card */}
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
                    {/* Header */}
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                      {/* Input */}
                      <div className="sm:col-span-1">
                        <div className="relative">
                          <h1 className="text-xl font-bold">
                            Booking Management
                          </h1>
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
                                  htmlFor="hs-as-filters-dropdown-all"
                                  className="flex py-2.5 px-3"
                                >
                                  <input
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    id="hs-as-filters-dropdown-all"
                                    defaultChecked=""
                                  />
                                  <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                                    All
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
                                    Confirm
                                  </span>
                                </label>
                                <label
                                  htmlFor="hs-as-filters-dropdown-declined"
                                  className="flex py-2.5 px-3"
                                >
                                  <input
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    id="hs-as-filters-dropdown-declined"
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
                        <tr>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="pl-6 py-2">
                              <label
                                htmlFor="hs-at-with-checkboxes-3"
                                className="flex"
                              >
                                <input
                                  type="checkbox"
                                  className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-at-with-checkboxes-3"
                                />
                                <span className="sr-only">Checkbox</span>
                              </label>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="pr-6 py-2">
                              <a
                                className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                                href="#"
                              >
                                #12453
                              </a>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Aug 17, 2020, 1:54 (ET)
                              </span>
                            </div>
                          </td>

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
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
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
                              <div className="flex items-center gap-x-2">
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
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  •••• 3535
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
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
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
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
                                          Confirm
                                        </span>
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
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
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
                                      >
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
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="pl-6 py-2">
                              <label
                                htmlFor="hs-at-with-checkboxes-4"
                                className="flex"
                              >
                                <input
                                  type="checkbox"
                                  className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-at-with-checkboxes-4"
                                />
                                <span className="sr-only">Checkbox</span>
                              </label>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="pr-6 py-2">
                              <a
                                className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                                href="#"
                              >
                                #84223
                              </a>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Aug 17, 2020, 1:04 (ET)
                              </span>
                            </div>
                          </td>

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
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
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
                              <div className="flex items-center gap-x-2">
                                <svg
                                  className="w-5 h-5"
                                  width={400}
                                  height={400}
                                  viewBox="0 0 400 400"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip2)">
                                    <path
                                      d="M127.346 386.446L134.276 342.434L118.841 342.076H45.1374L96.3574 17.3073C96.5099 16.315 97.0139 15.4105 97.7775 14.7588C98.5411 14.107 99.5136 13.7514 100.518 13.7567H224.792C266.048 13.7567 294.52 22.3419 309.385 39.2872C316.354 47.2365 320.793 55.5435 322.939 64.6852C325.191 74.2773 325.231 85.7376 323.032 99.7151L322.873 100.735V109.691L329.842 113.64C335.162 116.335 339.944 119.981 343.952 124.398C349.914 131.194 353.769 139.833 355.399 150.074C357.081 160.607 356.525 173.14 353.769 187.33C350.589 203.652 345.449 217.868 338.506 229.501C332.381 239.921 324.145 248.947 314.327 255.998C305.106 262.543 294.149 267.512 281.762 270.691C269.758 273.818 256.072 275.395 241.061 275.395H231.39C224.474 275.395 217.756 277.885 212.483 282.35C207.218 286.863 203.725 293.098 202.626 299.945L201.898 303.906L189.656 381.478L189.099 384.327C188.953 385.227 188.702 385.678 188.331 385.983C187.971 386.277 187.523 386.44 187.059 386.446H127.346Z"
                                      fill="#253B80"
                                    />
                                    <path
                                      d="M336.44 101.769C336.069 104.14 335.645 106.565 335.168 109.056C318.779 193.199 262.71 222.267 191.1 222.267H154.639C145.882 222.267 138.502 228.626 137.137 237.265L118.47 355.656L113.183 389.216C112.973 390.547 113.053 391.908 113.419 393.205C113.785 394.502 114.428 395.704 115.303 396.729C116.178 397.754 117.265 398.577 118.488 399.142C119.712 399.707 121.044 399.999 122.391 400H187.059C194.717 400 201.222 394.436 202.428 386.884L203.064 383.598L215.239 306.331L216.021 302.091C217.213 294.513 223.732 288.948 231.39 288.948H241.061C303.715 288.948 352.762 263.511 367.097 189.9C373.086 159.15 369.986 133.473 354.14 115.415C349.118 109.829 343.12 105.205 336.44 101.769V101.769Z"
                                      fill="#179BD7"
                                    />
                                    <path
                                      d="M319.295 94.9324C314.063 93.4186 308.739 92.2371 303.357 91.3949C292.723 89.7606 281.975 88.9764 271.215 89.0499H173.81C170.103 89.047 166.517 90.3704 163.701 92.7809C160.885 95.1913 159.024 98.5298 158.455 102.193L137.733 233.436L137.137 237.265C137.783 233.087 139.902 229.278 143.113 226.527C146.323 223.776 150.411 222.265 154.639 222.267H191.1C262.71 222.267 318.779 193.186 335.168 109.056C335.658 106.565 336.069 104.14 336.439 101.769C332.115 99.5009 327.608 97.5997 322.965 96.085C321.748 95.6812 320.525 95.2969 319.295 94.9324V94.9324Z"
                                      fill="#222D65"
                                    />
                                    <path
                                      d="M158.455 102.193C159.019 98.5287 160.879 95.1887 163.697 92.7795C166.515 90.3702 170.103 89.0516 173.81 89.0631H271.216C282.755 89.0631 293.527 89.8183 303.357 91.4082C310.01 92.4537 316.57 94.0174 322.979 96.085C327.815 97.6881 332.306 99.5827 336.453 101.769C341.328 70.6737 336.413 49.5021 319.6 30.331C301.065 9.22565 267.612 0.189941 224.805 0.189941H100.531C91.7866 0.189941 84.3275 6.54938 82.9761 15.2009L31.2129 343.308C30.9718 344.832 31.0635 346.389 31.4818 347.874C31.9 349.358 32.6349 350.734 33.6358 351.908C34.6367 353.081 35.8799 354.024 37.2799 354.671C38.6799 355.318 40.2034 355.654 41.7457 355.656H118.47L137.734 233.436L158.455 102.193Z"
                                      fill="#253B80"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip2">
                                      <rect
                                        width={400}
                                        height={400}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  ••••@gmail.com
                                </span>
                              </div>
                            </div>
                          </td>

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
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
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
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
                                          Confirm
                                        </span>
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
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
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
                                      >
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
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
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
                              <a
                                className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                                href="#"
                              >
                                #35463
                              </a>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Aug 20, 2020, 6:48 (ET)
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
                                Paid
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
                              <div className="flex items-center gap-x-2">
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
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  •••• 6542
                                </span>
                              </div>
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
                                Confirm
                              </span>
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
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
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
                                          Confirm
                                        </span>
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
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
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
                                      >
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
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
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
                              <a
                                className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                                href="#"
                              >
                                #35463
                              </a>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Aug 20, 2020, 7:48 (ET)
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
                                Paid
                              </span>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
                              <div className="flex items-center gap-x-2">
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
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  •••• 5423
                                </span>
                              </div>
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
                                Confirm
                              </span>
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
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
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
                                          Confirm
                                        </span>
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
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
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
                                      >
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
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
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
                              <a
                                className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                                href="#"
                              >
                                #35463
                              </a>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Aug 20, 2020, 7:48 (ET)
                              </span>
                            </div>
                          </td>
                          {/* Payment Status  */}
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
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
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
                              <div className="flex items-center gap-x-2">
                                <svg
                                  className="w-5 h-5"
                                  width={400}
                                  height={400}
                                  viewBox="0 0 400 400"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip2)">
                                    <path
                                      d="M127.346 386.446L134.276 342.434L118.841 342.076H45.1374L96.3574 17.3073C96.5099 16.315 97.0139 15.4105 97.7775 14.7588C98.5411 14.107 99.5136 13.7514 100.518 13.7567H224.792C266.048 13.7567 294.52 22.3419 309.385 39.2872C316.354 47.2365 320.793 55.5435 322.939 64.6852C325.191 74.2773 325.231 85.7376 323.032 99.7151L322.873 100.735V109.691L329.842 113.64C335.162 116.335 339.944 119.981 343.952 124.398C349.914 131.194 353.769 139.833 355.399 150.074C357.081 160.607 356.525 173.14 353.769 187.33C350.589 203.652 345.449 217.868 338.506 229.501C332.381 239.921 324.145 248.947 314.327 255.998C305.106 262.543 294.149 267.512 281.762 270.691C269.758 273.818 256.072 275.395 241.061 275.395H231.39C224.474 275.395 217.756 277.885 212.483 282.35C207.218 286.863 203.725 293.098 202.626 299.945L201.898 303.906L189.656 381.478L189.099 384.327C188.953 385.227 188.702 385.678 188.331 385.983C187.971 386.277 187.523 386.44 187.059 386.446H127.346Z"
                                      fill="#253B80"
                                    />
                                    <path
                                      d="M336.44 101.769C336.069 104.14 335.645 106.565 335.168 109.056C318.779 193.199 262.71 222.267 191.1 222.267H154.639C145.882 222.267 138.502 228.626 137.137 237.265L118.47 355.656L113.183 389.216C112.973 390.547 113.053 391.908 113.419 393.205C113.785 394.502 114.428 395.704 115.303 396.729C116.178 397.754 117.265 398.577 118.488 399.142C119.712 399.707 121.044 399.999 122.391 400H187.059C194.717 400 201.222 394.436 202.428 386.884L203.064 383.598L215.239 306.331L216.021 302.091C217.213 294.513 223.732 288.948 231.39 288.948H241.061C303.715 288.948 352.762 263.511 367.097 189.9C373.086 159.15 369.986 133.473 354.14 115.415C349.118 109.829 343.12 105.205 336.44 101.769V101.769Z"
                                      fill="#179BD7"
                                    />
                                    <path
                                      d="M319.295 94.9324C314.063 93.4186 308.739 92.2371 303.357 91.3949C292.723 89.7606 281.975 88.9764 271.215 89.0499H173.81C170.103 89.047 166.517 90.3704 163.701 92.7809C160.885 95.1913 159.024 98.5298 158.455 102.193L137.733 233.436L137.137 237.265C137.783 233.087 139.902 229.278 143.113 226.527C146.323 223.776 150.411 222.265 154.639 222.267H191.1C262.71 222.267 318.779 193.186 335.168 109.056C335.658 106.565 336.069 104.14 336.439 101.769C332.115 99.5009 327.608 97.5997 322.965 96.085C321.748 95.6812 320.525 95.2969 319.295 94.9324V94.9324Z"
                                      fill="#222D65"
                                    />
                                    <path
                                      d="M158.455 102.193C159.019 98.5287 160.879 95.1887 163.697 92.7795C166.515 90.3702 170.103 89.0516 173.81 89.0631H271.216C282.755 89.0631 293.527 89.8183 303.357 91.4082C310.01 92.4537 316.57 94.0174 322.979 96.085C327.815 97.6881 332.306 99.5827 336.453 101.769C341.328 70.6737 336.413 49.5021 319.6 30.331C301.065 9.22565 267.612 0.189941 224.805 0.189941H100.531C91.7866 0.189941 84.3275 6.54938 82.9761 15.2009L31.2129 343.308C30.9718 344.832 31.0635 346.389 31.4818 347.874C31.9 349.358 32.6349 350.734 33.6358 351.908C34.6367 353.081 35.8799 354.024 37.2799 354.671C38.6799 355.318 40.2034 355.654 41.7457 355.656H118.47L137.734 233.436L158.455 102.193Z"
                                      fill="#253B80"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip2">
                                      <rect
                                        width={400}
                                        height={400}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  ••••@gmail.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-2">
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
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
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
                                          Confirm
                                        </span>
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
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
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                        href="#"
                                      >
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
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Table */}
                    {/* Footer */}
                    <div className="px-6 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            5
                          </span>{" "}
                          results of 12 entries
                        </p>
                      </div>
                      <div className="px-0 py-4 grid gap-3 md:flex md:justify-center md:items-center border-t border-gray-200 dark:border-gray-700">
                        <div className="inline-flex gap-x-2">
                          <a
                            type="button"
                            href="dashboard/booking"
                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                          >
                            <BsViewList />
                            View All
                          </a>
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

export default DashBooking;