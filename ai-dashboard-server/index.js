const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());

// Set higher size limit (e.g., 10mb)
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.get("/", (req, res) => {
  res.send("AI Dashboard Backend is running!");
});

app.post("/api/summary", (req, res) => {
  const data = req.body.data;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: "Invalid data" });
  }

  const rowCount = data.length;
  const columns = Object.keys(data[0] || {});
  const colCount = columns.length;

  // Basic numeric stats (optional enhancement)
  const numericCol = columns.find((col) => !isNaN(parseFloat(data[0][col])));
  let avg = 0, min = 0, max = 0;

  if (numericCol) {
    const values = data.map(row => parseFloat(row[numericCol])).filter(val => !isNaN(val));
    if (values.length) {
      avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
      min = Math.min(...values).toFixed(2);
      max = Math.max(...values).toFixed(2);
    }
  }

  res.json({
    rowCount,
    colCount,
    columns,
    message: `CSV has ${rowCount} rows and ${colCount} columns.`,
    stats: numericCol
      ? { column: numericCol, avg, min, max }
      : null,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
