import DatePicker from '@/components/details/SingleRoomDetails/DatePicker';
import React, { useState } from 'react';
import './Refund.css'
import { reschedule } from '@/utils/async/guest/reschedule/reschedule';
import { BiCalendar } from 'react-icons/bi';

const ReScheduleModal = ({id}) => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [showPicker, setShowPicker] = useState(false);


    const handleDateSelect = (dateRange) => {
        if (!checkInDate) {
            setCheckInDate(dateRange.startDate);
            setShowPicker(true);
        } else if (!checkOutDate) {
            setCheckOutDate(dateRange.endDate);
            setShowPicker(false);
        } else {
            setCheckInDate(null);
            setCheckOutDate(null);
        }
    };

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };


    const handleSchedule = async () => {
        const start = checkInDate;
        const end = checkOutDate;
        console.log(start, end)
      const check =  await reschedule (id, start, end);
      console.log(check)
    }



    return (
        <>
            <button
        type="button"
        className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
        data-hs-overlay="#hs-static"
      >
        <BiCalendar />Schedule
      </button>
            <div
                id="hs-static"
                className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto [--overlay-backdrop:static]"
                data-hs-overlay-keyboard="false"
            >
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col h-[39rem] bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">

                        <div className="flex justify-end items-center py-3 px-4 dark:border-gray-700">
                            <button
                                type="button"
                                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                data-hs-overlay="#hs-static"
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

                        <h1 className='font-bold text-2xl text-center text-blue-500'>Re-schedule your booking date</h1>
                        <div className="grid grid-cols-2 gap-4 text-center my-8" >
                            <div className="border-r border-b border-t active:bg-gray-700 p-2 relative">
                                <h2>
                                    <button onClick={togglePicker}>CheckIn</button>
                                </h2>
                                <div className="absolute z-10 h-full top-[2.5rem]">
                                    {showPicker && (
                                        <DatePicker handleSelect={handleDateSelect} />
                                    )}
                                </div>
                                {checkInDate && <small>{checkInDate?.toDateString()}</small>}
                            </div>
                            <div className="border-b border-l border-t active:bg-gray-700 p-2">
                                <h2>
                                    <button onClick={togglePicker}>CheckOut</button>
                                </h2>
                                {checkOutDate && (
                                    <small>{checkOutDate?.toDateString()}</small>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={handleSchedule}
                            className="relative top-96 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-b-xl border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            href="#"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReScheduleModal;