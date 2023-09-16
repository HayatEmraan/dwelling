import React from "react";
import { BsViewList } from "react-icons/bs";

import FilterInvoice from "../invoicePage/filterInvoice";
import InvoiceModal from "../invoicePage/invoicemodal";

const DashInvoice = () => {
  return (
    <div className="flex-1">
      <>
        {/* Table Section */}
        <div className="xl:max-w-[35rem] 2xl:max-w-[150rem] px-4 py-10 sm:px-6 lg:px-0 lg:py-14 mx-auto">
          {/* Card */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                  {/* Header */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Invoices
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        View invoices, filter, download and more.
                      </p>
                    </div>

                    <div className="inline-flex gap-x-4 items-center">
                      <FilterInvoice />
                    </div>
                  </div>
                  {/* End Header */}
                  {/* Accordion */}

                  {/* End Accordion */}
                  {/* Table */}
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-slate-900">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Invoice number
                            </span>
                            <div className="hs-tooltip">
                              <div className="hs-tooltip-toggle">
                                <svg
                                  className="w-3.5 h-3.5 text-gray-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                </svg>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                                  role="tooltip"
                                >
                                  Invoice number related popup
                                </span>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Amount
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
                              Due
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Created
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-right" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                                #ADUQ218F94-0061
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                US $994.00
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
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
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                01 Jan 2023
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                14 Dec, 09:45
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-1.5">
                              <div className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                                <svg
                                  className="w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                View
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                                #ADUQ2138R2-0012
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                US $2,489.00
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
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
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                29 Dec
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                01 Dec, 16:59
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-1.5">
                              <div className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                                <svg
                                  className="w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                View
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                                #ADUQ288UUE-3892
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                US $2,220.00
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
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
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                24 Dec
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                20 Dec, 09:27
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-1.5">
                              <div className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                                <svg
                                  className="w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                View
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                                #ADUQ2189C7-3822
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                US $80.00
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
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
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                29 Nov
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                28 Nov, 12:04
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-1.5">
                              <div className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                                <svg
                                  className="w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                View
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                                #ADUQ2138F2-0099
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                US $1,249.00
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
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
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                29 Nov
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                01 Nov, 14:32
                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <a
                            className="block"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-1.5">
                              <div className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                                <svg
                                  className="w-4 h-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                View
                              </div>
                            </div>
                          </a>
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
                          href="dashboard/invoice"
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
        {/* Modal */}
        <InvoiceModal />
        {/* End Modal */}
      </>
    </div>
  );
};

export default DashInvoice;
