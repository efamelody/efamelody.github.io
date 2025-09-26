---
layout: default
modal-id: 12
date: 2025-09-26
img: financial_dashboard.jpg
alt: Financial Dashboard Overview
project-date: September 2025
client: Personal/Portfolio Project
category: Web Development & Data Visualization
description: Interactive Stock & Crypto Dashboard with React and Flask
technologies:
  - react
  - recharts
  - axios
  - flask
  - yfinance
  - ccxt
  - dayjs
  - tailwindcss
---
# Technologies Used

- **React** (Frontend interface & interactivity)  
- **Recharts** (Charts & graphs)  
- **Axios** (API requests to backend)  
- **Flask** (Backend API server)  
- **yfinance** (Stock data fetching)  
- **ccxt** (Crypto exchange data fetching)  
- **Day.js** (Date manipulation & filtering)  
- **TailwindCSS** (Styling & UI components)

# Financial Dashboard – Stock & Crypto Visualizer  

This project involved designing and developing an **interactive financial dashboard** to visualize both **stock and cryptocurrency data** in real time. Users can explore historical prices, toggle data series, filter by date ranges, and view key performance indicators.

---

## Features

- **Dynamic Charts & Metrics**  
  - Multi-line charts for Open, High, Low, Close, and Volume.  
  - Interactive legends and toggle buttons for user-selected metrics.  
  - Date range filters (7D, 1M, 6M, 1Y, ALL).

- **Key Performance Indicators (KPIs)**  
  - Latest price, percentage return, volatility.  
  - Moving averages (MA7, MA20, MA50) for trend analysis.

- **Stock & Crypto Support**  
  - Fetch live stock data via Yahoo Finance (`yfinance`).  
  - Fetch live crypto prices via exchange APIs (`ccxt`).  
  - Dropdown to switch between multiple stocks (AAPL, TSLA, MSFT, etc.).

- **Frontend Interactivity**  
  - Responsive design for desktop and mobile.  
  - Toggle metrics and visualize selected data instantly.  
  - Tooltips and legends for easy data interpretation.

- **Backend API**  
  - Flask server fetches data, computes KPIs and moving averages.  
  - Returns JSON data formatted for frontend visualization.  
  - Lightweight caching to reduce API requests.

---

## Key Implementation Details

- **React & Recharts**  
  - Multi-line `LineChart` components with conditional rendering based on selected metrics.  
  - Date filtering logic handled by Day.js to update charts dynamically.

- **Flask Backend**  
  - Endpoints: `/api/stock/<ticker>` and `/api/crypto/<symbol>`.  
  - Data cleaning: flatten multi-index column names, compute moving averages.  
  - API returns KPIs and full historical data for frontend consumption.

- **Responsive UI & Styling**  
  - TailwindCSS for clean buttons, dropdowns, and chart container layouts.  
  - Color-coded metrics for intuitive visual distinction.

---

## Installation

To run locally:

1. **Backend**:  
   ```bash
   cd financial_dashboard
   python -m venv venv
   source venv/bin/activate   # Mac/Linux
   venv\Scripts\activate      # Windows
   pip install -r requirements.txt
   python app.py
````

2. **Frontend**:

   ```bash
   cd financial-dashboard-frontend
   npm install
   npm start
   ```
3. Open your browser at `http://localhost:3000` to access the dashboard.

---

## Source Code

Complete source code is available on GitHub: [Financial Dashboard](https://github.com/efamelody/financial_dashboard)


