"use client";
import { LineChart, Line } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 600, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
];

const renderLineChart = () => {
  return (
    <section>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </section>
  );
};

export default renderLineChart;
