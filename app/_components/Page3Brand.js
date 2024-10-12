import Image from "next/image";
import page from "@/public/page 1_14.png";
import Link from "next/link";
import employee from "@/public/employee.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function PageBrand3() {
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
      <div className=" hidden h-[100vh] w-full max-w-7xl flex-col items-center justify-center sm:flex ">
        <div className="flex h-[70px] w-[1000px] items-center text-[35px] font-[700] text-secondary">
          EVENT
        </div>
        <div className="w-[1000px] ">
          <p className="mb-2 text-2xl font-[800] leading-[1.2] text-tertiery">
            Employee Gathering PGN
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="">
            <p
              className={`mt-2 text-lg font-[200] text-white ${outfit.className}`}
            >
              Pre&#45;Production
            </p>
            <ul
              className={`ml-5 mt-2 flex list-disc flex-col px-2 text-lg font-[200] text-white ${outfit.className}`}
            >
              <li>
                Concepting &#40; Rundown&#44; Script Writing and Games &#41;
              </li>
              <li>Talent Search</li>
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
              className={`ml-5 mt-2 flex list-disc flex-col px-2 text-lg font-[200] text-white ${outfit.className}`}
            >
              <li>Live Streaming system on YouTube</li>
              <li>Talent Brief</li>
              <li>Technical System</li>
              <li>Games Coordinator</li>
            </ul>
          </div>
          {/* Right Box */}
          
            <div className="relative h-[300px] w-[500px] ">
              <Image
                src={employee}
                alt="gambar YouTube employee"
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
          Employee Gathering PGN
        </p>
        <div className="w-full">
          <Link
            href="https://www.youtube.com/watch?v=sljShumOgOE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[230px] w-full">
              <Image
                src={employee}
                alt="gambar YouTube employee"
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
            <li>
              Concepting &#40; Rundown&#44; Script Writing and Games &#41;
            </li>
            <li>Talent Search</li>
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
            <li>Live Streaming system on YouTube</li>
            <li>Talent Brief</li>
            <li>Technical System</li>
            <li>Games Coordinator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageBrand3;
