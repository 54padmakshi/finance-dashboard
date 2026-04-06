import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#22c55e", "#ef4444", "#3b82f6", "#f59e0b"];

export default function CategoryChart({ data }) {
  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" nameKey="category" outerRadius={100}>
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}