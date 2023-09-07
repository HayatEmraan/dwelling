"use client"
import React from 'react';
// import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { hydrateRoot } from 'react-dom/client';


const domNode = document.getElementById('root');
const root = hydrateRoot;

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: "Paid",
    value: 24000,
    pv: 2400,
    amt: 2400,
   
  },
  {
    name: "Refund",
    value: 13000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Declined",
    value: 10000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Total",
    value: 40000,
    pv: 3908,
    amt: 2000,
  },

];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const ChartGuest = () => {
    return (
      <div className='items-center	'>
          <BarChart  className='m-20'
        width={900}
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
        <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
      </div>

    );
};

export default ChartGuest;





