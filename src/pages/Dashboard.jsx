import { useApp } from "../context/AppContext";
import { calculateSummary, getBalanceTrend, getCategoryData } from "../utils/helpers";
import SummaryCard from "../components/SummaryCard";
import Filters from "../components/Filters";
import TransactionTable from "../components/TransactionTable";
import BalanceChart from "../components/Charts/BalanceChart";
import CategoryChart from "../components/Charts/CategoryChart";
import RoleSwitcher from "../components/RoleSwitcher";
import Insights from "../components/Insights";




export default function Dashboard() {
const { transactions,role } = useApp();
const summary = calculateSummary(transactions);
const balanceData = getBalanceTrend(transactions);
const categoryData = getCategoryData(transactions);


  return (
    <div className="max-w-6xl mx-auto">
    <div className="min-h-screen bg-gray-100 p-6">
      <RoleSwitcher />
      <h1 className="text-2xl font-bold mb-6">
        Finance Dashboard
      </h1>

      {/* Sections will go here */}
      {/*  the summary */}
      <div className="space-y-6">
        
          <div className="grid grid-cols-3 gap-5 mb-6">
       <SummaryCard  title="Balance" amount={summary.balance} color="text-blue-600"/> 
       <SummaryCard  title="Income" amount={summary.income} color="text-green-600"/>
       <SummaryCard  title="Expenses" amount={summary.expenses} color="text-red-600"/>
      </div>
        </div>

        
{/* For transactions, we can show a table with filters */}
       <div className="bg-white p-4 rounded-xl shadow">
           <h2 className="font-bold mb-2">Transactions</h2>

{role === "admin" && (
  <button className="bg-blue-600 text-white px-4 py-2 rounded mb-3">
    + Add Transaction
  </button>
)}
            <Filters />

           <TransactionTable />
         </div>

{/*  charts here  */}
        
          <div className="bg-white p-4 rounded-xl shadow">
  <h2 className="font-bold mb-4">Analytics</h2>

  <div className="flex gap-6 flex-wrap">
    <BalanceChart data={balanceData} />
    <CategoryChart data={categoryData} />
  </div>
  
  {/* Insights  */}
       
        <Insights transactions={transactions} />
</div>
    </div>
    </div>
  );   
 
}