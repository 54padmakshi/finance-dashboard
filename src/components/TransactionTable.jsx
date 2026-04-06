import { useApp } from "../context/AppContext";

export default function TransactionTable() {
  const { transactions, filter } = useApp();

  const filteredTransactions = transactions.filter((t) =>
    t.category.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredTransactions.length === 0) {
    return <p className="text-gray-500">No transactions found</p>;
  }

  return (
    <table className="w-full mt-4 border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Date</th>
          <th className="p-2 text-left">Category</th>
          <th className="p-2 text-left">Amount</th>
          <th className="p-2 text-left">Type</th>
        </tr>
      </thead>

      <tbody>
        {filteredTransactions.map((t) => (
          <tr key={t.id} className="border-t">
            <td className="p-2">{t.date}</td>
            <td className="p-2">{t.category}</td>
          <td className={`p-2 font-semibold ${t.type === "income" ? "text-green-600" : "text-red-600"}`}> ₹{t.amount}</td>
            <td className="p-2 capitalize">{t.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}