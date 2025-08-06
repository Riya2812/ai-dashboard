import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const BarChartViewer = ({ data }) => {
  if (!data || data.length === 0) return null;

  const numericColumns = Object.keys(data[0]).filter(
    (key) => !isNaN(parseFloat(data[0][key]))
  );

  return (
    <div className="h-[400px] mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Bar Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={Object.keys(data[0])[0]} />
          <YAxis />
          <Tooltip />
          <Legend />
          {numericColumns.map((col) => (
            <Bar key={col} dataKey={col} fill="#8884d8" />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartViewer;
