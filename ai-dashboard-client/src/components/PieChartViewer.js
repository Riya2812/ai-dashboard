import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PieChartViewer = ({ data }) => {
  if (!data || data.length === 0) return null;

  const column = Object.keys(data[0])[0];
  const groupedData = {};

  data.forEach((item) => {
    const key = item[column];
    if (groupedData[key]) {
      groupedData[key] += 1;
    } else {
      groupedData[key] = 1;
    }
  });

  const chartData = Object.entries(groupedData).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1'];

  return (
    <div className="h-[400px] mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Pie Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={130}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartViewer;
