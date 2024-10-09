import Image from "next/image";
import page from "@/public/page 1_5.png";
import Link from "next/link";

function Page1Service() {
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
          <Link href="/service/videoproduction">VIDEO PRODUCTION</Link>
          <p>BRAND ACTIVATION</p>
          <p>CONTENT CREATOR</p>
        </div>
        <div className="h-[100px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
        <div className="h-[100px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-8 justify-center items-center p-2 rounded-lg bg-black/40 sm:hidden">
        <p className="text-5xl font-[800] text-secondary">Our Services</p>
        <div className="flex flex-col gap-1 text-3xl font-[500] text-white">
          <Link href="/service/videoproduction">VIDEO PRODUCTION</Link>
          <p>BRAND ACTIVATION</p>
          <p>CONTENT CREATOR</p>
        </div>
      </div>
    </div>
  );
}

export default Page1Service;
