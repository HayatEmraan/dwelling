'use client'
import React, { useState } from 'react';
import Chart from "react-apexcharts";
const PropertyFinanceBarChart = () => {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            theme: {
                monochrome: {
                  enabled: true,
                  color: '#255aee',
                  shadeTo: 'light',
                  shadeIntensity: 0.65
                }
              },
            xaxis: {
                categories: ['Approved', 'Declined', 'Pending']
            }
        },
        series: [
            {
                name: "series-1",
                data: [45, 65, 50]
            }
        ]
    })
    return (
        <div className='shadow-md rounded-sm border-t-8'>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
                height="200"
            />
        </div>
    );
};

export default PropertyFinanceBarChart;