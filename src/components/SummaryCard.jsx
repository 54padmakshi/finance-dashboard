export default function SummaryCard({ title, amount, color }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className={`text-2xl font-bold ${color}`}>₹{amount}</h2>
    </div>
  );
}