import Image from "next/image";
import page from "@/public/page 1_14.png";
import Link from "next/link";
import binis1 from "@/public/binis1.png";
import binis2 from "@/public/binis2.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page5Brand() {
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
      <div className="hidden h-[100vh] w-full max-w-7xl flex-col items-center justify-center sm:flex">
        <div className="flex h-[70px] w-[850px] items-center text-[35px] font-[700] text-secondary">
          EVENT
        </div>
        <div className="w-[850px]">
          <p className="mb-2 text-2xl font-[800] leading-[1.2] text-tertiery">
          Opening Ceremony and Documentation Bimbingan Teknis Tenaga Kerja
          Mandiri Kementerian Ketenagakerjaan RI
          </p>
        </div>
        <div className="flex gap-5 justify-center items-center w-full h-[250px]">
          {/* Left Box */}
          <div className="relative h-full w-[400px]">
            <Image
              src={binis1}
              alt="gambar YouTube binis1"
              fill
              className="object-fit"
            />
          </div>
          {/* Right Box */}
          <div className="relative h-full w-[400px]">
            <Image
              src={binis2}
              alt="gambar YouTube binis2"
              fill
              className="object-fit"
            />
          </div>

          <div className="flex justify-center"></div>
        </div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-3 justify-center px-2 py-8 w-full border-t-2 border-white/40 bg-black/10 sm:hidden">
        <p className="text-center text-3xl font-[700] leading-[1.0] text-tertiery">
          Opening Ceremony and Documentation Bimbingan Teknis Tenaga Kerja
          Mandiri Kementerian Ketenagakerjaan RI
        </p>
        <div className="flex flex-col gap-3 w-full">
          <Link
            href="https://www.youtube.com/watch?v=sljShumOgOE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[230px] w-full">
              <Image
                src={binis1}
                alt="gambar YouTube binis1"
                fill
                className="object-fit"
              />
            </div>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=sljShumOgOE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[230px] w-full">
              <Image
                src={binis2}
                alt="gambar YouTube binis2"
                fill
                className="object-fit"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page5Brand;
