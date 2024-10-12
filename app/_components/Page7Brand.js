import Image from "next/image";
import page from "@/public/page 1_14.png";
import Link from "next/link";
import festive from "@/public/festive.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page7Brand() {
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
      <div className=" hidden h-[100vh] w-full max-w-7xl flex-col items-center pt-[70px] sm:flex">
        <div className="flex h-[70px] w-[910px] items-center text-[35px] font-[700] text-secondary">
          EVENT
        </div>
        <div className="w-[910px]">
          <p className="mb-2 text-2xl font-[800] leading-[1.2] text-tertiery">
            HUT BULOG 56 TAHUN
          </p>
        </div>
        <div className="flex gap-9 justify-center items-center">
          <div className="flex text-[15px]">
            <div className="flex flex-col">
              <p className={`mt-2 font-[200] text-white ${outfit.className}`}>
                Pre&#45;Production
              </p>
              <ul
                className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 font-[200] text-white ${outfit.className}`}
              >
                <li>Event Concept</li>
                <li>Rundown and Script Writing</li>
                <li>Stage Design</li>
                <li>Property</li>
                <li>Location</li>
                <li>Motion Graphic</li>
              </ul>
              <p className={`mt-2 font-[200] text-white ${outfit.className}`}>
                Production
              </p>
              <ul
                className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 font-[200] text-white ${outfit.className}`}
              >
                <li>Manpower Team</li>
                <li>Show Directing</li>
                <li>Live Streaming system on YouTube</li>
                <li>Talent Brief</li>
                <li>Technical System</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p className={`mt-2 font-[200] text-white ${outfit.className}`}>
                Post Production
              </p>
              <ul
                className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 font-[200] text-white ${outfit.className}`}
              >
                <li>Aftermovie</li>
              </ul>
            </div>
          </div>
          {/* Right Box */}

          <div className="relative h-full w-[250px]">
            <Image
              src={festive}
              alt="gambar YouTube festive"
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
          HUT BULOG 56 TAHUN
        </p>
        <div className="w-full">
          <Link
            href="https://www.youtube.com/watch?v=sljShumOgOE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative mx-auto h-[260px] w-[150px]">
              <Image
                src={festive}
                alt="gambar YouTube festive"
                fill
                className="object-fit"
              />
            </div>
          </Link>
          <p
            className={`mt-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            Pre&#45;Production
          </p>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>Event Concept</li>
            <li>Rundown and Script Writing</li>
            <li>Stage Design</li>
            <li>Property</li>
            <li>Location</li>
            <li>Motion Graphic</li>
          </ul>
          <p
            className={`mt-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            Production
          </p>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>Manpower Team</li>
            <li>Show Directing</li>
            <li>Live Streaming system on YouTube</li>
            <li>Talent Brief</li>
            <li>Technical System</li>
            <li>Documentation</li>
          </ul>
          <p
            className={`mt-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            Post Production
          </p>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>Aftermovie</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page7Brand;
