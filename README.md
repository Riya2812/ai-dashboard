
markdown
Copy
Edit
# 🧠 AI Analytics Dashboard

A modern, responsive AI-powered dashboard that analyzes CSV data, displays visualizations, and extracts insights — inspired by Power BI and ObservableHQ.

## 🔥 Features
- 📤 Upload CSV and instantly view metrics
- 📈 Interactive Charts: Line, Bar, Pie
- 📑 AI Insight Summary
- 📊 Data Table with Pagination
- 🌗 Dark/Light Mode toggle
- 💾 Export to PDF/CSV
- ⚡ Built with React, Tailwind, and Express.js

## 📸 Screenshots
| Light Mode | Dark Mode |
|------------|-----------|
| ![Light](screenshots/light.png) | ![Dark](screenshots/dark.png) |

## 🚀 Tech Stack
- Frontend: React + TailwindCSS
- Backend: Node.js + Express
- Charts: Recharts
- Export: jsPDF + autoTable
- CSV: PapaParse

## 📁 Folder Structure
/client
└── src
├── components/
├── utils/
├── App.js
/server
└── index.js


## 💡 How to Run Locally
```bash
# Install dependencies
cd ai-dashboard-client
npm install

# Start client
npm start

# In another terminal
cd ai-dashboard-server
npm install
node index.js
