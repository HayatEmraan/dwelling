'use client'
import React, { useState } from 'react';
import Chart from "react-apexcharts";
const PropertyFinanceLineChart = () => {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ['Approved', 'Declined', 'Pending']
            }
        },
        series: [
            {
                name: "series-1",
                data: [40, 65, 50]
            }
        ]
    })
    return (
        <div className='shadow-md rounded-sm border-t-8'>
            <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="500"
                height="200"
            />
        </div>
    );
};

export default PropertyFinanceLineChart;