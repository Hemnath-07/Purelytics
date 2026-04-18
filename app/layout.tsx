import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6d4" />
      </head>

      <body className="light flex">
        {children}
      </body>
    </html>
  );
}
