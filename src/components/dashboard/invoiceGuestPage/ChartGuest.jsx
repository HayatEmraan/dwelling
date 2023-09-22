"use client";
import { guestinvoicestats } from "@/utils/async/guest/ginvoices/gstats";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";



const domNode = window.document.getElementById("root");


const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];



const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
    }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
    }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const ChartGuest = () => {
  const [chartData, setChartData] = useState();

  useEffect(() => {

    (async () => {
      const stateData = await guestinvoicestats();
      setChartData(stateData);
    })()

  }, []);

  const data = [
    {
      name: "Paid",
      value: `${chartData?.data?.total}`,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Refund",
      value: `${chartData?.data?.refund}`,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Declined",
      value: `${chartData?.data?.declined}`,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Total",
      value: `${chartData?.data?.total}`,
      pv: 3908,
      amt: 2000,
    },
  ];


  return (
    <div className="items-center dark:bg-slate-900	">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="value"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartGuest;
