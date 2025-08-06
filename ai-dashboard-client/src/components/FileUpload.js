import React from "react";
import Papa from "papaparse";

const FileUpload = ({ onDataLoaded }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        onDataLoaded(results.data);
      },
    });
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="block w-full p-2 border rounded"
      />
    </div>
  );
};

export default FileUpload;
