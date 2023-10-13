"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { Select } from "antd";
const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 10,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 10,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 10,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 10,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 10,
  },
  {
    name: "June",
    total: Math.floor(Math.random() * 5000) + 10,
  },
];

const Graph = () => {
  return (
    <div className="flex flex-col mx-auto justify-between">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-sm">
          Analytic <span className="text-green-600">+5.4%</span>
        </h5>
        <Select
          bordered={false}
          placeholder={
            <span style={{ fontSize: 12, color: "black" }}>Month</span>
          }
          style={{ width: 80 }}
          options={[
            { value: "Oct", label: "Oct" },
            { value: "Nov", label: "Nov" },
            { value: "Decr", label: "Dec" },
          ]}
        />
      </div>
      <div className="my-4">
        <ResponsiveContainer width={300} height={100}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar dataKey="total" fill="#8150f2" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
