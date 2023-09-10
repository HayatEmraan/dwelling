"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { AiFillPieChart } from "react-icons/ai";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

import React from "react";

const Example = () => {
  return (
    <div className="me-5">
      <h2 className="font-semibold p-2">Total state</h2>
      <hr />
      <div>
        <ResponsiveContainer width="95%" height={320}>
          <PieChart width={200} height={260}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
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
      <div>
        <div className="flex items-center  justify-between">
          <p className="p-2 flex items-center gap-2">
            <AiFillPieChart className="text-xl text-blue-500"></AiFillPieChart>
            Total
          </p>
          <p>100%</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="p-2 flex items-center gap-2">
            <AiFillPieChart className="text-xl text-green-500"></AiFillPieChart>
            Active
          </p>
          <p>25%</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="p-2 flex items-center gap-2">
            <AiFillPieChart className="text-xl text-yellow-500"></AiFillPieChart>
            Pending
          </p>
          <p>25%</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="p-2 flex items-center gap-2">
            <AiFillPieChart className="text-xl text-red-500"></AiFillPieChart>
            Blocked
          </p>
          <p>25%</p>
        </div>
      </div>
    </div>
  );
};

export default Example;
