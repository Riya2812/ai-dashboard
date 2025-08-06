// src/components/SkeletonLoader.js
import React from "react";

const Skeleton = ({ className }) => (
  <div className={`bg-gray-300 dark:bg-gray-700 animate-pulse rounded ${className}`} />
);

export default Skeleton;
