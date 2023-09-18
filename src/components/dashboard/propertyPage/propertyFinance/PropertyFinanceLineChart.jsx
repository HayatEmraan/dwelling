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
                data: [60, 65, 50]
            }
        ]
    })
    return (
        <div >
            <h2 className='font-semibold ms-5'>Properties State</h2>
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