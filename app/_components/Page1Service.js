import Image from "next/image";
import page from "@/public/page 1_5.png";
import Link from "next/link";

function Page1Service() {
  return (
    <div className="w-full sm:fixed flex h-[100vh] sm:w-[300px] flex-col items-center justify-center sm:border-r-2 border-white/30">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3866047403. */}
      <div className="hidden flex-col justify-center items-center p-2 w-full max-w-7xl backdrop-blur-md sm:flex">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2032050689. */}
        <div className=" px-auto text-[35px] font-[700] text-secondary">
          <p>Our Services</p>
        </div>
        <nav className=" flex h-[200px] w-full flex-col justify-center items-center gap-3 text-lg font-[500] text-white">
          <Link href="/service/video_production">
            <button className="px-3 py-2 text-black bg-yellow-500 rounded-full border-2 border-white transition-all hover:bg-yellow-600">
              VIDEO PRODUCTION
            </button>
          </Link>
          <Link href="/service/brand_activation">
            <button className="px-3 py-2 text-black bg-yellow-500 rounded-full border-2 border-white transition-all hover:bg-yellow-600">
              BRAND ACTIVATION
            </button>
          </Link>
          <Link href="/service/content_creator">
            <button className="px-3 py-2 text-black bg-yellow-500 rounded-full border-2 border-white transition-all hover:bg-yellow-600">
              CONTENT CREATOR
            </button>
          </Link>
        </nav>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-8 justify-center items-center px-2 py-3 rounded-lg bg-black/50 sm:hidden">
        <p className="text-5xl font-[800] text-secondary">Our Services</p>
        <div className="flex flex-col gap-3 text-xl font-[500] text-white">
          <Link href="/service/video_production">
            <button className="px-6 py-3 text-black bg-yellow-500 rounded-full border-2 border-white transition-all hover:bg-yellow-600">
              VIDEO PRODUCTION
            </button>
          </Link>
          <Link href="/service/brand_activation">
            <button className="px-6 py-3 text-black bg-yellow-500 rounded-full border-2 border-white transition-all hover:bg-yellow-600">
              BRAND ACTIVATION
            </button>
          </Link>
          <Link href="/service/content_creator">
            <button className="px-6 py-3 text-black bg-yellow-500 rounded-full border-2 border-white transition-all hover:bg-yellow-600">
              CONTENT CREATOR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page1Service;
