import Image from "next/image";
import page from "@/public/page 1_6.png";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

function Page2Service() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center pt-[75px] ">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden flex-col p-2 w-full max-w-7xl rounded-lg sm:flex pt-[100px]">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1608202756. */}
        <div className="bg-black/40 p-3 rounded-2xl fixed text-sm text-white font-[200] left-2 top-[250px] flex flex-col h-[100px] items-center gap-3"><FaArrowUp /><span>Scroll</span><FaArrowDown /></div>
        <div className="flex h-[70px] w-full items-center pl-[60px] text-[45px] font-[800] text-secondary ">
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
      <div className="flex flex-col gap-6 justify-center items-center px-3 py-4 sm:hidden">
        <p className="text-center text-5xl font-[800] text-secondary">
          VIDEO PRODUCTION
        </p>
        <ul className="ml-5 flex list-disc flex-col gap-1 px-2 text-3xl font-[300] text-white">
          <li>TVC</li>
          <li>FILLER</li>
          <li>COVERAGE MULTICAM SYSTEM</li>
          <li>VIDEO COMPANY PROFILE</li>
          <li>TV PROGRAM</li>
          <li>MUSIC VIDEO</li>
          <li>LIVE STREAMING</li>
        </ul>
      </div>
    </div>
  );
}

export default Page2Service;
