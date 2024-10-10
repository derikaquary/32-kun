import Image from "next/image";
import page from "@/public/page 1_14.png";
import Link from "next/link";
import employee from "@/public/employee.png";
import gong from "@/public/gong.png";
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
      <div className="hidden h-[100vh] w-full max-w-7xl flex-col pt-[50px] sm:flex">
        <div className="flex h-[100px] w-full items-center text-[55px] font-[800] text-secondary">
          EVENT
        </div>
        <p className="mb-2 w-[700px] text-[35px] font-[800] leading-[1.2] text-tertiery">
          Opening Ceremony Rakernis Kementerian Ketenagakerjaan RI
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex h-[330px] w-full max-w-7xl gap-3">
            {/* Left box */}
            <div className="flex-1 h-200px">
              <div className="relative h-[330px] w-full">
                <Image
                  src={employee}
                  alt="gambar YouTube employee"
                  fill
                  className="object-fit"
                />
              </div>
            </div>
            {/* Right Box */}
            <div className="flex-1 h-200px">
              <div className="relative h-[330px] w-full">
                <Image
                  src={gong}
                  alt="gambar YouTube gong"
                  fill
                  className="object-fit"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <ul
              className={`${outfit.className} flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white`}
            >
              <li>
                Pre&#45;Production &#40;Concepting and Script Writing&#41;
              </li>
              <li>Production &#40;Shooting&#44; Directing and Briefing&#41;</li>
              <li>Post&#45;Production &#40;Editing Motion&#41; </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-3 justify-center px-2 pt-8 w-full border-t-2 border-white/40 bg-black/10 sm:hidden">
        <p className=" text-center text-3xl font-[700] leading-[1.0] text-tertiery">
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
