import React, { useState } from "react";
import { DateRange} from "react-date-range";



const DatePicker = ({ handleSelect}) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  
  return (
    <div className="date-range-picker">
      <DateRange
        ranges={[selectionRange]}
        onChange={(ranges) => handleSelect(ranges.selection)}
      />
    </div>
  );
};

export default DatePicker;
