export default function Insights({ transactions }) {
  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const sorted = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1]
  );

  const highest = sorted[0];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold mb-2">Insights</h2>

      {highest ? (
        <p>
          💸 Highest spending category:{" "}
          <span className="font-semibold">{highest[0]}</span>
        </p>
      ) : (
        <p>No insights available</p>
      )}
    </div>
  );
}