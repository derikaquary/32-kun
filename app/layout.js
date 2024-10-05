import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "KUN",
  description: "Kreator Utama Nusantara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden antialiased ${openSans.className}`}> {/* Prevent horizontal overflow */}
        <Header />
        {children}
      </body>
    </html>
  );
}
