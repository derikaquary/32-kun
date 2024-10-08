import Image from "next/image";
import page from "@/public/page 1_5.png";

function Page2Service() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden flex-col justify-center items-center p-2 w-full rounded-lg sm:flex">
        <div className="flex h-[100px] w-full items-center pl-[60px] text-[55px] font-[800] text-secondary">
          Our Services
        </div>
        <div className="flex h-[200px] w-full flex-col justify-center gap-3 pl-[200px] text-4xl font-[500] text-white">
          <p>VIDEO PRODUCTION</p>
          <p>BRAND ACTIVATION</p>
          <p>CONTENT CREATOR</p>
        </div>
        <div className="h-[100px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
        <div className="h-[100px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-6 justify-center items-center p-2 py-4 bg-black/30 sm:hidden">
        <p className="text-center text-5xl font-[800] text-secondary">
          Video Production
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