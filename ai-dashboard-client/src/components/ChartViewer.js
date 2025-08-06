import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ChartSkeleton from "./ChartSkeleton";

const ChartViewer = ({ data, loading }) => {
  if (loading || !data || data.length === 0) return <ChartSkeleton />;

  const numericColumns = Object.keys(data[0]).filter(
    (key) => !isNaN(parseFloat(data[0][key]))
  );

  return (
    <div className="h-[400px] mt-6 bg-white dark:bg-gray-800 p-4 rounded shadow transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Line Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={Object.keys(data[0])[0]} />
          <YAxis />
          <Tooltip />
          <Legend />
          {numericColumns.map((col) => (
            <Line
              key={col}
              type="monotone"
              dataKey={col}
              stroke="#8884d8"
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartViewer;

