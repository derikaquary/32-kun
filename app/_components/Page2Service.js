import Image from "next/image";
import page from "@/public/page 1_6.png";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import vidprod from "@/public/vidprod.jpg"

function Page2Service() {
  return (
    <div className="relative flex flex-col items-center pt-[10px] sm:h-[100vh] sm:justify-center sm:pt-[75px] ">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden w-full max-w-7xl flex-col rounded-lg p-2 pt-[100px] sm:flex">
        <div className="fixed left-[305px] top-[250px] flex h-[100px] flex-col items-center gap-3 rounded-2xl bg-black/30 px-1 py-4 text-sm font-[200] text-white">
          <FaArrowUp />
          <span className="text-xs">Scroll</span>
          <FaArrowDown />
        </div>
        <div className="flex h-[70px] w-full items-center pl-[60px] text-[45px] font-[800] text-secondary">
          VIDEO PRODUCTION
        </div>
        <ul className="ml-[190px] flex list-disc flex-col gap-1 text-[30px] font-[300] text-white">
          <li>TVC</li>
          <li>FILLER</li>
          <li>COVERAGE MULTICAM SYSTEM</li>
          <li>VIDEO COMPANY PROFILE</li>
          <li>TV PROGRAM</li>
          <li>MUSIC VIDEO</li>
          <li>LIVE STREAMING</li>
        </ul>
        <div className="h-[100px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
        <div className="h-[100px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
      </div>
      {/* Small Screen */}
      <div className="pt-[10px] flex flex-col gap-3 items-center px-3 pb-4 sm:hidden h-[100vh] ">
        {/* <div className="fixed right-2 top-[250px] z-[100] flex h-[100px] flex-col items-center gap-3 rounded-2xl bg-black/40 px-1 py-3 text-sm font-[200] text-white">
          <FaArrowUp />
          <span>Scroll</span>
          <FaArrowDown />
        </div> */}
        <p className="text-center text-3xl font-[800] text-secondary">
          VIDEO PRODUCTION
        </p>
        <ul className="ml-5 flex list-disc flex-col gap-1 px-2 text-xl font-[300] text-white">
          <li>TVC</li>
          <li>FILLER</li>
          <li>COVERAGE MULTICAM SYSTEM</li>
          <li>VIDEO COMPANY PROFILE</li>
          <li>TV PROGRAM</li>
          <li>MUSIC VIDEO</li>
          <li>LIVE STREAMING</li>
        </ul>
        <div className="relative h-[450px] w-full flex flex-col items-center ">
          <Image src={vidprod} alt="video production image" fill className="object-cover rounded-xl"/>
        </div>
        <p className="px-3 py-2 text-white rounded-lg bg-black/30">Scroll down</p>
          <FaArrowDown />
      </div>
    </div>
  );
}

export default Page2Service;
