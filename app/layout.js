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
  description:
    "Welcome to Kreator Utama Nusantara.We provide promotional videos, company profiles, managing social media both personal or company account, event organizing and also as media consulting for goverment and multinational company in our regional area",
  keywords:
    "Kreator Utama Nusantara, promotional videos, company profiles, managing social media, event organizing, media consulting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="KUN" />
        <meta
          property="og:description"
          content="Kreator Utama Nusantara is a company that provides promotional videos, company profiles, managing social media both personal or company account, event organizing and also as media consulting for goverment and multinational company in our regional area"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kun1.vercel.app" />
        <meta
          property="og:image"
          content="https://kun1.vercel.app/logo_mainn.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Kreator Utama Nusantara" />

        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TWSWLM8Z');
          `,
          }}
        />
      </head>
      <body className={`overflow-x-hidden antialiased ${openSans.className} `}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWSWLM8Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}{" "}
        {/* Prevent horizontal overflow */}
        <Header />
        {children}
        {/*  <Footer/> */}
      </body>
    </html>
  );
}
