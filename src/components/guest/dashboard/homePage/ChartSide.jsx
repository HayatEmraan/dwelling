"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { AiFillPieChart } from "react-icons/ai";


const COLORS = ["#3182ce", "#38a169", "#f6ad55", "#f56565"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

import React, { useEffect, useState } from "react";
import { guestdashstats } from "@/utils/async/guest/gdash/gdashstats";

const Example = () => {

  const [dashData, setDashData] = useState([]);

  useEffect(() => {

    (async () => {
      const gdata = await guestdashstats();
      setDashData(gdata);
    })()

  }, []);


  const data = [
    { name: "Group A", value:  parseInt(dashData?.data?.active) }, //active
    { name: "Group B", value: parseInt (dashData?.data?.approved) },  // approve
    { name: "Group C", value: parseInt(dashData?.data?.pending) }, // pending
    { name: "Group D", value: parseInt(dashData?.data?.declined)}, //rejected
  ];

  return (
    <div className="me-5">
      <h2 className="font-semibold p-2">Total state</h2>
      <hr />
      <div>
        <ResponsiveContainer width="100%" height={420}>
          <PieChart width={200} height={260}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={180}
              fill="#8884d8"
              dataKey="value"
              className="font-bold"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center items-center pb-5">
        <div className="flex items-center  justify-between">
          <p className="p-2 flex items-center gap-2">
            <AiFillPieChart className="text-xl text-blue-600"></AiFillPieChart>
            Active
          </p>
         
        </div>
        <div className="flex items-center justify-between">
          <p className="p-2 flex items-center gap-2">
            <AiFillPieChart className="text-xl text-green-600"></AiFillPieChart>
            Approved
          </p>
         
        </div>
        <div className="flex items-center justify-between">
          <p className="p-2 flex items-center gap-2">
            <AiFillPieChart className="text-xl text-orange-400"></AiFillPieChart>
            Pending
          </p>
          
        </div>
        <div className="flex items-center justify-between">
          <p className="p-2 flex items-center gap-2">
            <AiFillPieChart className="text-xl text-red-500"></AiFillPieChart>
            Rejected
          </p>
        </div>
      </div>
    </div>
  );
};

export default Example;
