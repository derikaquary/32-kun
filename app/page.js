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
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main
      className={`${openSans.className} relative flex h-[100vh] w-full flex-col items-center justify-center gap-3`}
    >
      {" "}
      <Image
        src={page1}
        alt="background page 1"
        fill
        className="z-[-50] object-cover"
      />
      <div className="w-full flex-1"></div>
      <div className="flex flex-col items-center">
        <div className="flex h-[200px] w-[250px] items-center justify-center rounded-xl bg-[#dfdfdf] p-2">
          <div className="relative h-full w-full">
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
      <div className="flex w-full flex-1 flex-col items-center justify-end">
        <div className="w-full flex-1"></div>
        <div className="w-full flex-1"></div>
        {/* Footer */}
        <div
          className={`flex w-full flex-1 flex-row items-center justify-between gap-7 ${outfit.className} max-w-7xl`}
        >
          <p className="flex-0.7 text-center text-white sm:text-3xl">01/29</p>
          <div className="h-[2px] w-full flex-1 bg-white"></div>
          <p className="flex-0.7 text-center text-white sm:text-3xl">
            <span className="sm:hidden">KUN</span>
            <span className="hidden sm:block">Kreator Utama Nusantara</span>
          </p>
        </div>
      </div>
    </main>
  );
}
