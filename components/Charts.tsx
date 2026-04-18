"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { useStore } from "@/store/useStore";

export default function Charts() {
  const { data } = useStore();

  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="pH" />
      <YAxis />
      <Tooltip />
      <Line dataKey="temperature" />
    </LineChart>
  );
}
