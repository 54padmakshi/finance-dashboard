# 💰 Finance Dashboard (React)

##  Live Demo

https://finance-dashboard-chi-gray.vercel.app/

---

##  Overview

A clean and interactive **Finance Dashboard** built using React.
This application helps users track financial activity, explore transactions, and understand spending patterns through visual insights.

---

##  Features

###  Dashboard Overview

* Total Balance, Income, and Expenses summary
* Dynamic calculations based on transactions
* Clean card-based UI

###  Analytics

* **Balance Trend Chart** (time-based visualization)
* **Category Breakdown** (spending insights using pie chart)

### Transactions

* List of transactions with:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)
  *  Search/filter by category
  * Handles empty states gracefully

### Role-Based UI (Frontend Simulation)

* **Viewer**

  * Can only view data
* **Admin**

  * Can see "Add Transaction" button (UI simulation)

###  Insights

* Identifies highest spending category
* Helps users understand spending behavior

---

##  Tech Stack

* ⚛️ React (Vite)
* 🎨 Tailwind CSS
* 📊 Recharts
* 🧠 Context API (State Management)

---

##  Project Structure

```
src/
 ├── components/
 │    ├── SummaryCard.jsx
 │    ├── TransactionTable.jsx
 │    ├── Filters.jsx
 │    ├── RoleSwitcher.jsx
 │    ├── Insights.jsx
 │    └── Charts/
 │         ├── BalanceChart.jsx
 │         └── CategoryChart.jsx
 │
 ├── context/
 │    └── AppContext.jsx
 │
 ├── data/
 │    └── mockData.js
 │
 ├── utils/
 │    └── helpers.js
 │
 ├── pages/
 │    └── Dashboard.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

##  Setup Instructions

### 1️.Clone the repository

```bash
git clone https://github.com/54padmakshi/finance-dashboard.git
cd finance-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3️. Run the app

```bash
npm run dev
```

---

##  Approach

* Used **Context API** for global state management
* Separated logic using utility functions for:

  * Summary calculations
  * Chart data preparation
* Built reusable components for scalability
* Focused on clean UI and responsive layout using Tailwind

---

## Responsiveness

* Works across different screen sizes
* Uses flexible layouts (`flex`, `grid`)
* Charts adjust to layout

---

##  Future Improvements

* Add/Edit/Delete transactions (with modal)
* Backend integration (API + database)
* Authentication system
* Dark mode support
* Advanced analytics (monthly trends, forecasts)

---

##  Screenshots

*screenshots of finance-dashboard project are here*
<img width="1920" height="1036" alt="Screenshot (78)" src="https://github.com/user-attachments/assets/309c889a-de51-4aed-8690-d6236db317b0" />

---<img width="1650" height="978" alt="Screenshot (79)" src="https://github.com/user-attachments/assets/4ef6da60-4e9d-403d-9f5e-5fc7bda6ea79" />


##  Acknowledgements

* Recharts for visualization
* Tailwind CSS for styling

---

##  Contact

If you liked this project or have feedback, feel free to connect!
email : pallavi.huilgol@gmail.com

---
