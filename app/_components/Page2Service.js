import Image from "next/image";
import page from "@/public/page 1_6.png";

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
      <div className="hidden flex-col p-2 w-full max-w-7xl rounded-lg sm:flex">
        <div className="flex h-[130px] w-full items-center pl-[60px] text-[55px] font-[800] text-secondary ">
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
