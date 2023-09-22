"use client";
import { getroomstats } from "@/utils/async/host/getroomstats";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
const HostPropertyChart = () => {

  const [data, setData] = useState(null);


  useEffect(() => {
    (async () => {
      const res = await getroomstats();
      setData(res);
    })();
  }, []);

  const [state, setState] = useState({

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
        data: [`${data?.data?.approved}`, `${data?.data?.declined}`, `${data?.data?.pending}`, `${data?.data?.total}`],
      },
    ],
  });
  return (
    <div>
    
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="1580"
        height="200"
      />
    </div>
  );
};

export default HostPropertyChart;
