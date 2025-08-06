// src/components/SectionTitle.js
import React from "react";

const SectionTitle = ({ icon, title }) => (
  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
    <span>{icon}</span>
    <span>{title}</span>
  </h2>
);

export default SectionTitle;
