// src/components/DataTable.js
import React from "react";
import Skeleton from "./SkeletonLoader";

const DataTable = ({ data }) => {
  const columns = data && data.length > 0 ? Object.keys(data[0]) : ["Column 1", "Column 2", "Column 3"];

  return (
    <div className="overflow-x-auto mt-4 bg-white dark:bg-gray-800 rounded shadow">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            [...Array(5)].map((_, i) => (
              <tr
                key={i}
                className={`transition-colors duration-200 ${
                  i % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-900"
                }`}
              >
                {columns.map((_, j) => (
                  <td key={j} className="px-4 py-2">
                    <Skeleton className="h-4 w-full" />
                  </td>
                ))}
              </tr>
            ))
          ) : (
            data.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors duration-200 ${
                  idx % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-900"
                } hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer`}
              >
                {columns.map((col) => (
                  <td
                    key={col}
                    className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
