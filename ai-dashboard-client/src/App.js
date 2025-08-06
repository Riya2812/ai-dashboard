import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
          AI Dashboard – CSV Data Viewer
        </h1>
        <Dashboard data={data} setData={setData} />
      </div>
    </div>
  );
}

export default App;
