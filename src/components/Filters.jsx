import { useApp } from "../context/AppContext";

export default function Filters() {
  const { filter, setFilter } = useApp();

  return (
    <input
      type="text"
      placeholder="Search by category..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
}