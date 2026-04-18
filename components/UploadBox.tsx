"use client";
import { useStore } from "../store/useStore";
import { parseFile } from "../lib/fileParser";
export default function UploadBox() {
  const { setData } = useStore();

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];

    parseFile(file, async (rows: any[]) => {
      const updated = await Promise.all(
        rows.map(async (row) => {
          const res = await fetch("/api/predict", {
            method: "POST",
            body: JSON.stringify({
              pH: Number(row.pH),
              turbidity: Number(row.turbidity),
              temperature: Number(row.temperature),
            }),
          });

          const data = await res.json();
          return { ...row, prediction: data.prediction };
        })
      );

      setData(updated);
    });
  };

  return (
    <div className="border-dashed border-2 p-10 text-center rounded-xl">
      <input
        type="file"
        accept=".csv,.xlsx,.json"
        onChange={handleUpload}
      />
      <p>Upload CSV / Excel / JSON</p>
    </div>
  );
}
