// src/components/utils/exportUtils.js
import { saveAs } from "file-saver";
import Papa from "papaparse";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportToCSV(data, filename = "data.csv") {
  if (!data || data.length === 0) return;

  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, filename);
}

export function exportToPDF(data, filename = "data.pdf") {
  if (!data || data.length === 0) return;

  const doc = new jsPDF();
  const columns = Object.keys(data[0]);
  const rows = data.map((row) => columns.map((col) => row[col]));

  doc.text("Data Table", 14, 15);
  autoTable(doc, {
    startY: 20,
    head: [columns],
    body: rows,
  });

  doc.save(filename);
}
