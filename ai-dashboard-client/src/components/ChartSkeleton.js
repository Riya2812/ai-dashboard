// src/components/ChartSkeleton.js
import React from "react";
import Skeleton from "./SkeletonLoader";

const ChartSkeleton = () => (
  <div className="space-y-3">
    <Skeleton className="h-6 w-32" />
    <Skeleton className="h-48 w-full" />
  </div>
);

export default ChartSkeleton;
