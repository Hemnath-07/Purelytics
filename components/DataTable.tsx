"use client";
import { useStore } from "@/store/useStore";

export default function DataTable() {
  const { data } = useStore();

  return (
    <table className="w-full mt-6">
      <thead>
        <tr>
          <th>pH</th>
          <th>Turbidity</th>
          <th>Temp</th>
          <th>Prediction</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row: any, i: number) => (
          <tr key={i}>
            <td>{row.pH}</td>
            <td>{row.turbidity}</td>
            <td>{row.temperature}</td>
            <td>
              <span className={`px-2 py-1 rounded ${
                row.prediction === "SAFE"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}>
                {row.prediction}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
