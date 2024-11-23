import "./_style/globals.css";
import { Open_Sans } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "KUN",
    template: "%s - KUN",
  },
  description: "Welcome to Kreator Utama Nusantara.We provide promotional videos, company profiles, managing social media both personal or company account, event organizing and also as media consulting for goverment and multinational company in our regional area",
  keywords:
    "Kreator Utama Nusantara, promotional videos, company profiles, managing social media, event organizing, media consulting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden antialiased ${openSans.className} `}>
        {" "}
        {/* Prevent horizontal overflow */}
        <Header />
        {children}
       {/*  <Footer/> */}
      </body>
    </html>
  );
}
