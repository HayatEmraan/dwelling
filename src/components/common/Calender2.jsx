import React from 'react';
import { useState } from 'react'
import { DateRange } from 'react-date-range';


const Calender2 = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    return (
        <div>
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                className='rounded-2xl'
            />
        </div>
    );
};

export default Calender2;


