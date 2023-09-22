"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";
const HostPropertyChart = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Approved", "Declined", "Pending"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [60, 65, 50],
      },
    ],
  });
  return (
    <div>
      <h2 className="font-semibold ms-5">Properties State</h2>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="1000"
        height="200"
      />
    </div>
  );
};

export default HostPropertyChart;
