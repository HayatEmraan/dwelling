"use client"
import React from "react";
// import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
const data = [
  {
    name: "Paid",
    value: 10000,
  },
  {
    name: "Refund",
    value: 5000,
  },
  {
    name: "Declined",
    value: 12000,
  },
  {
    name: "Total",
    value: 12000,
  },
];
const Barchart = () => {
  return (
    <div>
      <h4>Barchart</h4>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
