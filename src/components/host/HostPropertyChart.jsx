"use client";
import { getroomstats } from "@/utils/async/host/getroomstats";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
const HostPropertyChart = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getroomstats();
      setState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: ["Approved", "Declined", "Pending", "Total"],
          },
        },
        series: [
          {
            name: "series-1",
            data: [
              res?.data?.approved,
              res?.data?.declined,
              res?.data?.pending,
              res?.data?.total,
            ],
          },
        ],
      });
    })();
  }, []);

  return (
    <div>
      {state && (
        <Chart
          options={state?.options}
          series={state?.series}
          type="bar"
          width="1580"
          height="200"
        />
      )}
    </div>
  );
};

export default HostPropertyChart;
