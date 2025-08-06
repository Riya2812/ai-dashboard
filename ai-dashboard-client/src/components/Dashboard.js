// src/components/Dashboard.js
import React from "react";
import FileUpload from "./FileUpload";
import DataTable from "./DataTable";
import ChartViewer from "./ChartViewer";
import StatsCard from "./StatsCard";
import BarChartViewer from "./BarChartViewer";
import PieChartViewer from "./PieChartViewer";
import InsightCard from "./InsightCard";
import SectionTitle from "./SectionTitle";
import Tile from "./Tile";
import { exportToCSV, exportToPDF } from "./utils/exportUtils";

const Dashboard = ({ data, setData }) => {
  const isLoading = data.length === 0;

  const totalRows = data.length;
  const columns = data[0] ? Object.keys(data[0]) : [];
  const columnCount = columns.length;

  const numericCols = columns.filter(
    (col) => data[0] && !isNaN(parseFloat(data[0][col]))
  );
  const numericStat = numericCols[0];

  let min = 0, max = 0, avg = 0;
  if (numericStat && totalRows > 0) {
    const values = data
      .map((row) => parseFloat(row[numericStat]))
      .filter((val) => !isNaN(val));
    min = Math.min(...values).toFixed(2);
    max = Math.max(...values).toFixed(2);
    avg = (values.reduce((sum, val) => sum + val, 0) / values.length).toFixed(2);
  }

  return (
    <div className="p-6 space-y-10 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Upload Tile - NO heading */}
      <Tile title="📁 Upload Data">
        <FileUpload onDataLoaded={setData} />
      </Tile>

      {/* Overview Stats - KEEP heading */}
      <SectionTitle icon="📊" title="Overview Stats" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard label="Total Rows" value={totalRows} loading={isLoading} />
        <StatsCard label="Column Count" value={columnCount} loading={isLoading} />
        <StatsCard label="First Numeric Column" value={numericStat || "-"} loading={isLoading} />
        <StatsCard label={`Avg ${numericStat}`} value={avg} loading={isLoading} />
        <StatsCard label={`Min ${numericStat}`} value={min} loading={isLoading} />
        <StatsCard label={`Max ${numericStat}`} value={max} loading={isLoading} />
      </div>

      {/* Export Section */}
      {!isLoading && (
        <>
          <SectionTitle icon="📤" title="Export Data" />
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => exportToCSV(data)}
              className="transition bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
            >
              Export to CSV
            </button>
            <button
              onClick={() => exportToPDF(data)}
              className="transition bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
            >
              Export to PDF
            </button>
          </div>
        </>
      )}

      {/* AI Insights - NO heading */}
      <Tile title="🔍 AI Insights">
        <InsightCard data={data} loading={isLoading} />
      </Tile>

      {/* Charts - NO heading */}
      <div className="grid md:grid-cols-2 gap-6">
        <Tile title="📊 Line Chart">
          <ChartViewer data={data} loading={isLoading} />
        </Tile>
        <Tile title="📊 Bar Chart">
          <BarChartViewer data={data} loading={isLoading} />
        </Tile>
        <div className="md:col-span-2">
          <Tile title="📊 Pie Chart">
            <PieChartViewer data={data} loading={isLoading} />
          </Tile>
        </div>
      </div>

      {/* Data Table - NO heading */}
      <Tile title="📋 Data Table">
        <DataTable data={data} loading={isLoading} />
      </Tile>
    </div>
  );
};

export default Dashboard;
