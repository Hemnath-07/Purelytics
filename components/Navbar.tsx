"use client";
import { useStore } from "@/store/useStore";

export default function Navbar() {
  const { setTheme } = useStore();

  return (
    <div className="flex justify-between p-4 bg-white shadow">
      <h1>Smart Water System</h1>

      <select onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="ocean">Ocean</option>
        <option value="forest">Forest</option>
        <option value="sunset">Sunset</option>
        <option value="neon">Neon</option>
      </select>
    </div>
  );
}
