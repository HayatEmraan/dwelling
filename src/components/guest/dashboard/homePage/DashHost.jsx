

import { FcApproval, FcCancel, FcViewDetails, FcManager } from 'react-icons/fc';
import HostModal from '../hostMangement/HostModal';
import { BsViewList } from "react-icons/bs";



const DashHost = () => {

 

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
                                 
                                    <div className="sm:col-span-2 md:grow">
                                        <div className="flex justify-end gap-x-2">
                                        
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
                                                            htmlFor="hs-as-filters-dropdown-Approved"
                                                            className="flex py-2.5 px-3"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                id="hs-as-filters-dropdown-Approved"
                                                            />
                                                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                                                                Approved
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
                                                                Pending
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
                                                                Declined
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                  

                            <table className="p-2 min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-slate-800">
                                    <tr className=''>

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
                                                    Assign By
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-left">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Host Status
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Action Host
                                                </span>
                                            </div>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                                    <tr>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2 text-left">
                                                <a
                                                    className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                                                    href="#"
                                                >
                                                    35463
                                                </a>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap ">
                                            <div className="px-6 py-2">
                                                <span className="rounded-full bg-green-50 inline-flex items-center gap-1.5 py-0.5 px-2  text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200 mx-auto justify-center text-center">
                                                    <FcManager className='text-sm' />
                                                    <b>Mr. Emraan</b>
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
                                                    Admin
                                                </span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className=" py-1.5 flex justify-center">
                                                <div className="group inline-flex items-center divide-x divide-gray-300 border border-gray-300 bg-white shadow-sm rounded-md transition-all dark:divide-gray-700 dark:bg-slate-700 dark:border-gray-700">
                                                    <div className="hs-tooltip inline-block">
                                                        <a
                                                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-l-md bg-white text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                            href="#"
                                                        >

                                                            <FcApproval className='text-xl' />
                                                            <span
                                                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                                                                role="tooltip"
                                                            >
                                                                Approved Host
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="hs-tooltip relative inline-flex">
                                                        <a
                                                            id="hs-table-dropdown-1"
                                                            type="button"
                                                            className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-r-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                            href='#'
                                                        >
                                                            <FcCancel className='text-xl' />
                                                            <span
                                                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                                                                role="tooltip"
                                                            >
                                                                Decline Host
                                                            </span>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div
                                                className="block"
                                                data-hs-overlay="#hs-ai-invoice-modal"
                                            >
                                                <div className=" px-6 py-1.5">
                                                    <div className="cursor-pointer py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                                                        <FcViewDetails />
                                                        View
                                                        <HostModal></HostModal>

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
                                                1
                                            </span>{" "}
                                            results of 12 entries
                                        </p>
                                    </div>
                                    <div className="px-0 py-4 grid gap-3 md:flex md:justify-center md:items-center border-t border-gray-200 dark:border-gray-700">
                                        <div className="inline-flex gap-x-2">
                                            <a
                                                type="button"
                                                href="dashboard/host"
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
    );
};

export default DashHost;