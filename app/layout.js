import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: "KUN",
  description: "Kreator Utama Nusantara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="overflow-x-hidden antialiased"> {/* Prevent horizontal overflow */}
        <Header />
        {children}
      </body>
    </html>
  );
}
