import Image from "next/image";
import page from "@/public/page 1_14.png";

import hut from "@/public/hut.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page6Brand() {
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center ${outfit.className}`}
    >
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className=" hidden h-[100vh] w-full max-w-7xl flex-col items-center sm:flex pt-[70px]">
        <div className="flex h-[70px] w-[850px] items-center text-[35px] font-[700] text-secondary">
          EVENT
        </div>
        <div className="w-[850px]">
          <p className="mb-2 text-2xl font-[800] leading-[1.2] text-tertiery">
            HUT BULOG 53 &#45; 55 TAHUN &#40;Virtual Event&#41;
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="text-sm">
            <p className={`mt-2 font-[200] text-white ${outfit.className}`}>
              Pre&#45;Production
            </p>
            <ul
              className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 font-[200] text-white ${outfit.className}`}
            >
              <li>Concepting</li>
              <li>Rundown and Script Writing</li>
              <li>Stage Design</li>
              <li>Property</li>
              <li>Location</li>
            </ul>
            <p className={`mt-2 font-[200] text-white ${outfit.className}`}>
              Production
            </p>
            <ul
              className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 font-[200] text-white ${outfit.className}`}
            >
              <li>Live Streaming system on YouTube and Instagram</li>
              <li>Talent Brief</li>
              <li>Shoot all VT Content</li>
              <li>Techincal System</li>
            </ul>
            <p className={`mt-2 font-[200] text-white ${outfit.className}`}>
              Post Production
            </p>
            <ul
              className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 font-[200] text-white ${outfit.className}`}
            >
              <li>Editing &#38; Motion</li>
            </ul>
          </div>
          {/* Right Box */}

          <div className="relative h-full w-[455px]">
            <Image
              src={hut}
              alt="gambar YouTube hut"
              fill
              className="object-fit"
            />
          </div>

          <div className="flex justify-center"></div>
        </div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-3 justify-center px-2 py-8 w-full border-t-2 border-white/40 sm:hidden">
        <p className="text-center text-3xl font-[700] leading-[1.0] text-tertiery">
          HUT BULOG 53 &#45; 55 TAHUN &#40;Virtual Event&#41;
        </p>
        <div className="w-full">
          
            <div className="relative h-[260px] w-full">
              <Image
                src={hut}
                alt="gambar YouTube hut"
                fill
                className="object-fit"
              />
            </div>
          
          <p
            className={`mt-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            Pre&#45;Production
          </p>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>Concepting</li>
            <li>Rundown and Script Writing</li>
            <li>Stage Design</li>
            <li>Property</li>
            <li>Location</li>
          </ul>
          <p
            className={`mt-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            Production
          </p>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>Live Streaming system on YouTube and Instagram</li>
            <li>Talent Brief</li>
            <li>Shoot all VT Content</li>
            <li>Techincal System</li>
          </ul>
          <p
            className={`mt-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            Post Production
          </p>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>Editing &#38; Motion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page6Brand;
