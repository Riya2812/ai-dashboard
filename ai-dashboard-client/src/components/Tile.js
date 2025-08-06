// src/components/Tile.js
import React from "react";

const Tile = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300">
    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h3>
    {children}
  </div>
);

export default Tile;
