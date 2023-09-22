"use client"
import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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
      }
  ];
const Chart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
