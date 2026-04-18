import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white p-5">
      <h2 className="text-xl mb-6">💧 Water AI</h2>

      <nav className="space-y-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/upload">Upload</Link>
        <Link href="/results">Results</Link>
      </nav>
    </div>
  );
}
