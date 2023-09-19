import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import SearchAddress from "../SearchScheduler/SearchAddress";
import SearchBeds from "../SearchScheduler/SearchBeds";
import { userAppStore } from "@/store/store";
import useClickOutside from "@/hooks/useClickOutside";
import Calender from "./Calender";
import Calender2 from "./Calender2";
import Link from "next/link";

export default function Schedule() {
  const {
    selectionType,
    setSelectionType,
    setShowScheduleBar,
    showScheduleBar,
  } = userAppStore();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(null);

  const start = new Date(state[0]?.startDate);
  const end = new Date(state[0]?.endDate);
  const formattedEndDate = end.toISOString().split("T")[0];
  const formattedStartDate = start.toISOString().split("T")[0];
  function formatDate(dateString) {
    const options = { month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  const handleSearch = () => {
    setSelectionType(undefined);
    if (showScheduleBar) {
      setShowScheduleBar();
    }
  };

  const [containerRef] = useClickOutside(true);
  const sliceDateStart = formatDate(state[0]?.startDate).split(" ");
  const sliceStart = sliceDateStart[0].slice(0, 3);
  const sliceDateEnd = formatDate(state[0]?.endDate).split(" ");
  const sliceEnd = sliceDateEnd[0].slice(0, 3);
  return (
    <div
      className="flex justify-center items-center rounded-full border border-gray-300 text-airbnb-light-black relative my-4 gap-1 "
      ref={containerRef}
    >
      <div
        className="flex flex-col hover:bg-gray-100 dark:hover:bg-gray-950 px-4 lg:px-10 py-4 rounded-full cursor-pointer relative"
        onClick={() => setSelectionType("where")}
      >
        <SearchAddress setLocation={setLocation} />
      </div>
      <div
        onClick={() => setSelectionType("check-in")}
        className="flex flex-col hover:bg-gray-100 dark:hover:bg-gray-950 px-2 lg:px-10 py-4 rounded-full cursor-pointer items-center justify-center"
      >
        <label htmlFor="" className="text-xs font-semibold lg:flex flex-col hidden     ">
          Check in
        </label>
        <label htmlFor="" className="text-xs font-semibold lg:hidden flex flex-col    ">
          In
        </label>
        <span>{sliceStart + " " + sliceDateStart[1]}</span>
        {selectionType === "check-in" && (
          <>
            <div className="lg:hidden block absolute top-[6.5rem] scale-[115%] left-4 shadow-xl z-[400]">
              <Calender2 state={state} setState={setState} />
            </div>
            <div className="hidden lg:block absolute top-[4.7rem] -left-16 shadow-xl 0]">
              <Calender state={state} setState={setState} />
            </div>
          </>
        )}
      </div>
      <div
        className="flex flex-col hover:bg-gray-100 dark:hover:bg-gray-950 px-2 lg:px-10 py-4 rounded-full cursor-pointer items-center justify-center"
        onClick={() => setSelectionType("check-out")}
      >
        <label htmlFor="" className="text-xs hidden lg:block font-semibold">
          Check out
        </label>
        <label htmlFor="" className="text-xs lg:hidden font-semibold">
          Out
        </label>
        <span>{sliceEnd + " " + sliceDateEnd[1]}</span>
        {selectionType === "check-out" && (
          <>
            <div className="lg:hidden block absolute top-[6.5rem] scale-[115%] left-4 shadow-xl z-[400]">
              <Calender2 state={state} setState={setState} />
            </div>
            <div className="hidden lg:block absolute top-[4.7rem] -left-16 shadow-xl 0]">
              <Calender state={state} setState={setState} />
            </div>
          </>
        )}
      </div>
      <div
        className="flex hover:bg-gray-100 dark:hover:bg-gray-950 justify-between text-xs lg:text-base px-2 lg:px-4 py-4 pl-7 rounded-full cursor-pointer gap-2 lg:gap-7"
        onClick={() => setSelectionType("who")}
      >
        <SearchBeds setGuests={setGuests} />
        <Link
          href={`/search/query?dwl=bright&ling=coders&${
            location?.address !== undefined
              ? "location=" + location?.address + "&"
              : ""
          }start=${formattedStartDate}&end=${formattedEndDate}${
            guests?.adults !== 0 ? "&adults=" + guests?.adults : ""
          }${guests?.childrens !== 0 ? "&childrens=" + guests?.childrens : ""}${
            guests?.infants !== 0 ? "&infants=" + guests?.infants : ""
          }`}
          className="bg-airbnb-theme-color bg-rose-500 text-white p-3 rounded-full flex items-center justify-center text-lg"
          onClick={handleSearch}
        >
          <BiSearch />
        </Link>
      </div>
    </div>
  );
}
