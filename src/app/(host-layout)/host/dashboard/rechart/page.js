// import React from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// const DashboardRechartHost = ({ uvData, pvData }) => {
//   return (
//     <LineChart width={600} height={400} data={uvData}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis
//         yAxisId="left"
//         label={{ value: "UV", angle: -90, position: "insideLeft" }}
//       />
//       <YAxis
//         yAxisId="right"
//         orientation="right"
//         label={{ value: "PV", angle: -90, position: "insideRight" }}
//       />
//       <Tooltip />
//       <Legend />
//       <Line
//         type="monotone"
//         dataKey="uv"
//         stroke="#8884d8"
//         yAxisId="left"
//         name="UV"
//       />
//       <Line
//         type="monotone"
//         dataKey="pv"
//         stroke="#82ca9d"
//         yAxisId="right"
//         name="PV"
//       />
//     </LineChart>
//   );
// };

// export default DashboardRechartHost;
