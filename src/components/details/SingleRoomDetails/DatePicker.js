import useDateStore from "@/store/datestore";
import React, { useCallback, useState } from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DatePicker = ({ handleSelect }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const { setDate } = useDateStore();




  return (
    <div className="date-range-picker">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => {
          setState([item.selection]);
          setDate(item.selection);
        }}
        moveRangeOnFirstSelection={false}
        ranges={state}
        className="rounded-2xl"
      />
    </div>
  );
};

export default DatePicker;
