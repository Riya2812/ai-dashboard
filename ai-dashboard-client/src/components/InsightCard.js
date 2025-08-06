import React, { useEffect, useState } from "react";
import Skeleton from "./SkeletonLoader";

const InsightCard = ({ data, loading }) => {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (loading || data.length === 0) return;

    const fetchSummary = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/summary", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data }),
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const result = await response.json();
        setSummary(result);
      } catch (err) {
        console.error("Error fetching summary:", err);
        setError("⚠️ Failed to fetch insights from backend.");
      }
    };

    fetchSummary();
  }, [data, loading]);

  if (loading || data.length === 0) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow rounded p-4 mt-6 transition-all duration-300">
      <h2 className="text-lg font-semibold mb-2">🧠 AI Summary</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : summary ? (
        <div className="space-y-2">
          <p><strong>Row Count:</strong> {summary.rowCount}</p>
          <p><strong>Column Count:</strong> {summary.colCount}</p>
          <p><strong>Columns:</strong> {summary.columns.join(", ")}</p>
          <p className="text-blue-600 dark:text-blue-400">{summary.message}</p>
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">Analyzing...</p>
      )}
    </div>
  );
};

export default InsightCard;
