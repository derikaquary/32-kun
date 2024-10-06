import "./_style/globals.css";
import { Open_Sans } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";


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
        <Footer/>
      </body>
    </html>
  );
}
