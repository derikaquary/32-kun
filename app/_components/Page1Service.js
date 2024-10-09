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
      <div className="hidden flex-col gap-3 justify-center items-center p-2 w-full rounded-lg sm:flex">
        <div className="flex h-[100px] w-full items-center pl-[60px] text-[55px] font-[800] text-secondary">
          Our Services
        </div>
        <div className="flex h-[200px] w-full flex-col justify-center gap-3 pl-[200px] text-4xl font-[500] text-white">
          <Link href="/service/video_production">
            <button className="px-6 py-3 text-black bg-yellow-500 rounded-full transition-all hover:bg-yellow-600">
              VIDEO PRODUCTION
            </button>
          </Link>
          <Link href="/service/brand_activation">
            <button className="px-6 py-3 text-black bg-yellow-500 rounded-full transition-all hover:bg-yellow-600">
              BRAND ACTIVATION
            </button>
          </Link>
          <Link href="/service/content_creator">
            <button className="px-6 py-3 text-black bg-yellow-500 rounded-full transition-all hover:bg-yellow-600">
              CONTENT CREATOR
            </button>
          </Link>
        </div>
        <div className="h-[100px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
        <div className="h-[100px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-8 justify-center items-center px-2 py-3 rounded-lg bg-black/40 sm:hidden">
        <p className="text-5xl font-[800] text-secondary">Our Services</p>
        <div className="flex flex-col gap-3 text-xl font-[500] text-white">
          <Link href="/service/video_production">
            <button className="px-6 py-3 text-black bg-yellow-500 rounded-full transition-all hover:bg-yellow-600">
              VIDEO PRODUCTION
            </button>
          </Link>
          <Link href="/service/brand_activation">
            <button className="px-6 py-3 text-black bg-yellow-500 rounded-full transition-all hover:bg-yellow-600">
              BRAND ACTIVATION
            </button>
          </Link>
          <Link href="/service/content_creator">
            <button className="px-6 py-3 text-black bg-yellow-500 rounded-full transition-all hover:bg-yellow-600">
              CONTENT CREATOR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page1Service;
