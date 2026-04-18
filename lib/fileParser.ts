import Papa from "papaparse";
import * as XLSX from "xlsx";

export const parseFile = (file: File, callback: any) => {
  const type = file.name.split(".").pop()?.toLowerCase();

  // CSV
  if (type === "csv") {
    Papa.parse(file, {
      header: true,
      complete: (res) => callback(res.data),
    });
  }

  // Excel
  else if (type === "xlsx" || type === "xls") {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);

      callback(json);
    };

    reader.readAsArrayBuffer(file);
  }

  // JSON
  else if (type === "json") {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      callback(JSON.parse(e.target.result));
    };

    reader.readAsText(file);
  }

  else {
    alert("Unsupported file ❌");
  }
};
