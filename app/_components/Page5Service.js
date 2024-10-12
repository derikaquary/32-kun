import Image from "next/image";
import page from "@/public/page 1_7.png";
import Link from "next/link";
import eliyas from "@/public/eliyas.png";
import kaleidoskop from "@/public/kaleidoskop.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page5Service() {
  return (
    <div className="relative flex w-full justify-center sm:h-[100vh] sm:pt-[50px]">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden h-[100vh] w-full max-w-7xl flex-col items-center justify-center  sm:flex">
        <div className="flex h-[70px] w-full items-center pl-[200px] text-[35px] font-[700] text-secondary ">
          VIDEO PRODUCTION
        </div>
        <div className="flex flex-col gap-3">
          <div className=" flex w-full max-w-7xl gap-5 px-[70px]">
            {/* Left box */}
            <div className="flex-1 h-400px">
              <Link
                href="https://www.youtube.com/watch?si=cphQ2t2hhxbaryqj&v=pJ5cXFuxyQE&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-[200px] w-[350px]">
                  <Image
                    src={eliyas}
                    alt="gambar YouTube eliyas"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <ul
                className={`${outfit.className} ml-10 mt-5 flex list-disc flex-col gap-1 text-md font-[200] text-white`}
              >
                <li className="font-semibold text-black">
                  <Link
                    href="https://www.youtube.com/watch?si=cphQ2t2hhxbaryqj&v=pJ5cXFuxyQE&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-4 border-black" // Use border for a thicker underline
                  >
                    KLIK HERE TO WATCH
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Box */}
            <div className="flex-1 h-400px">
              <Link
                href="https://www.youtube.com/watch?si=CXhz-VlYUf5N2eOC&v=fvKT7lSJarc&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-[200px] w-[350px]">
                  <Image
                    src={kaleidoskop}
                    alt="gambar YouTube kaleidoskop"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <ul
                className={`ml-10 mt-5 flex list-disc flex-col gap-1 text-md font-[200] text-white ${outfit.className}`}
              >
                <li className="font-semibold text-black">
                  <Link
                    href="https://www.youtube.com/watch?si=CXhz-VlYUf5N2eOC&v=fvKT7lSJarc&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-4 border-black"
                  >
                    KLIK HERE TO WATCH
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <ul
              className={`${outfit.className} flex list-disc flex-col gap-1 px-2 text-mdS font-[200] text-white`}
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
      <div className="flex flex-col gap-6 items-center px-2 w-full sm:hidden">
        <div className="w-full h-400px">
          <Link
            href="https://www.youtube.com/watch?si=cphQ2t2hhxbaryqj&v=pJ5cXFuxyQE&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[240px] w-full">
              <Image
                src={eliyas}
                alt="gambar YouTube granit"
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <ul
            className={`${outfit.className} ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white`}
          >
            <li>
              Pre&#45;Production &#40;Concepting&#44; Script Writing &#38; Voice
              Over&#41;{" "}
            </li>
            <li>Production &#40;Shooting&#44; Directing and Briefing&#41;</li>
            <li>Post&#45;Production &#40;Editing Motion&#41;</li>
            <li className="font-semibold text-black">
              <Link
                href="https://www.youtube.com/watch?si=cphQ2t2hhxbaryqj&v=pJ5cXFuxyQE&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-4 border-black"
              >
                KLIK HERE TO WATCH
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 mt-3 h-400px">
          <Link
            href="https://www.youtube.com/watch?si=CXhz-VlYUf5N2eOC&v=fvKT7lSJarc&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[240px] w-full">
              <Image
                src={kaleidoskop}
                alt="gambar YouTube kaleidoskop"
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>
              Pre&#45;Production &#40;Concepting&#44; Script Writing &#38; Voice
              Over&#41;{" "}
            </li>
            <li>Production &#40;Shooting&#44; Directing and Briefing&#41;</li>
            <li>Post&#45;Production &#40;Editing Motion&#41;</li>
            <li className="font-semibold text-black">
              <Link
                href="https://www.youtube.com/watch?si=CXhz-VlYUf5N2eOC&v=fvKT7lSJarc&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-4 border-black"
              >
                KLIK HERE TO WATCH
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page5Service;
