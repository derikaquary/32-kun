import Image from "next/image";
import page1 from "@/public/1.png";
import kunImage from "@/public/logo_mainn.png";
import { Open_Sans } from "next/font/google";
import { Outfit } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100","200","300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`${openSans.className} relative flex h-[100vh] w-full flex-col items-center justify-center gap-3`}>
      {" "}
      <Image
        src={page1}
        alt="background page 1"
        fill
        className="z-[-50] object-cover"
      />
      <div className="flex-1 w-full"></div>
      <div className="flex flex-col items-center">
        <div className="flex h-[200px] w-[250px] items-center justify-center rounded-xl bg-[#dfdfdf] p-2">
          <div className="relative w-full h-full">
            <Image
              src={kunImage}
              alt="kun logo"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <p className="text-6xl font-[900] text-secondary">COMPANY</p>
        <p className="text-6xl font-[900] text-white">PROFILE</p>
      </div>
      <div className="flex flex-col flex-1 justify-end items-center w-full">
        <div className="flex-1 w-full"></div>
        <div className="flex-1 w-full"></div>
        <div className={`flex flex-row flex-1 gap-3 justify-between items-center w-full ${outfit.className}`}>
          <p className="flex-1 text-center text-white">01/29</p>
          <div className="h-[2px] w-full flex-1 bg-white"></div>
          <p className="flex-1 text-center text-white"><span className="sm:hidden">KUN</span><span className="hidden">Kreator Utama Nusantara</span></p>
        </div>
      </div>
    </main>
  );
}
