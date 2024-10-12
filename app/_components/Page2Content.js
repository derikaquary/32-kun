import Image from "next/image";
import page from "@/public/page 1_7.png";
import Link from "next/link";
import direktor from "@/public/direktor.png";
import tkm from "@/public/tkm.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page2Content() {
  return (
    <div className="flex relative flex-col justify-center items-center w-full">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden h-[100vh] w-full max-w-7xl flex-col items-center justify-center sm:flex px-2">
        <div className="flex h-[70px] w-full items-center pl-[150px] text-[35px] font-[700] text-secondary">
          CONTENT CREATOR
        </div>
        <div className="flex w-full max-w-7xl">
          <div className="flex flex-col flex-1 items-end h-400px">
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>
              Concepting &#40;Rundown&#44; Scripting and Briefing all
              talent&#41;
            </li>
            <li>Production &#40;Shooting and Editing&#41;</li>
            <li>
              Youtube Handling &#40;Thumbnail&#44; Descripting&#44; Optimizing
              and Uploading&#41;
            </li>
          </ul>
            
              <div className="relative mt-4 h-[140px] w-full">
                <Image
                  src={direktor}
                  alt="gambar direktor"
                  fill
                  className="object-fit"
                />
              </div>
            
          </div>
          <div className="flex h-full w-[20px] items-start justify-center">
            <div className="h-[100%] w-[2px] bg-yellow-400"></div>
          </div>
          <div className="flex-1 h-400px">
            
              <div className="relative mb-4 h-[140px] w-full">
                <Image
                  src={tkm}
                  alt="gambar tkm"
                  fill
                  className="object-fit"
                />
              </div>
            
              <p className="mt-3 text-lg font-[200] text-white">
            Instagram Handling
          </p>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>Producting All Content</li>
            <li>Design</li>
            <li>Optimizing</li>
            <li>Reporting</li>
          </ul>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-3 justify-center px-2 py-8 w-full sm:hidden">
        <div className="w-full h-400px">
          <div className="relative h-[100px] w-full">
            <Image
              src={direktor}
              alt="gambar  direktor"
              fill
              className="object-fit"
            />
          </div>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>
              Concepting &#40;Rundown&#44; Scripting and Briefing all
              talent&#41;
            </li>
            <li>Production &#40;Shooting and Editing&#41;</li>
            <li>
              Youtube Handling &#40;Thumbnail&#44; Descripting&#44; Optimizing
              and Uploading&#41;
            </li>
          </ul>
        </div>
        <div className="flex-1 mt-5 h-400px">
          <div className="relative h-[100px] w-full">
            <Image src={tkm} alt="gambar tkm" fill className="object-fit" />
          </div>
          <p className="mt-3 text-lg font-[200] text-white">
            Instagram Handling
          </p>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>Producting All Content</li>
            <li>Design</li>
            <li>Optimizing</li>
            <li>Reporting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page2Content;
