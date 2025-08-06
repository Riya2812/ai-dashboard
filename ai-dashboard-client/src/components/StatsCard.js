// src/components/StatsCard.js
import React from "react";
import Skeleton from "./SkeletonLoader";

const StatsCard = ({ label, value, loading = false }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{label}</div>
      {loading ? (
        <Skeleton className="h-6 w-20" />
      ) : (
        <div className="text-xl font-semibold text-gray-800 dark:text-white">{value}</div>
      )}
    </div>
  );
};

export default StatsCard;
