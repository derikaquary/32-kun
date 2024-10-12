import Image from "next/image";
import page from "@/public/page 1_7.png";
import Link from "next/link";
import granit from "@/public/granit.png";
import hijabi from "@/public/hijabi.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page4Service() {
  return (
    <div className="flex relative flex-col justify-center items-center w-full">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden h-[100vh] w-full max-w-7xl flex-col items-center justify-center  sm:flex">
        <div className="flex h-[70px] w-full items-center pl-[200px] text-[35px] font-[700] text-secondary">
          VIDEO PRODUCTION
        </div>
        <div className=" mx-auto flex w-full max-w-7xl px-[70px]">
          {/* Left box */}
          <div className="flex flex-col flex-1 items-end">
            <Link
              href="https://www.youtube.com/watch?si=xwPYzpq2QzZzjpv_&v=dIh2hts7FlU&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative mb-4 h-[200px] w-[350px]">
                <Image
                  src={granit}
                  alt="gambar YouTube granit"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <ul
              className={`${outfit.className} ml-5 flex list-disc flex-col gap-1 px-2 text-md font-[200] text-white`}
            >
              <li>
                Pre&#45;Production &#40;Concepting and Script Writing&#41;
              </li>
              <li>Production &#40;Directing and Briefing&#41;</li>
              <li>Post&#45;Production &#40;Editing&#41;</li>
              <li className="font-semibold text-black">
                <Link
                  href="https://www.youtube.com/watch?si=xwPYzpq2QzZzjpv_&v=dIh2hts7FlU&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-4 border-black" // Use border for a thicker underline
                >
                  KLIK HERE TO WATCH
                </Link>
              </li>
            </ul>
          </div>
          {/* Yellow line */}
          <div className="flex h-full w-[30px] items-end justify-center">
            <div className="h-full w-[2px] bg-yellow-400"></div>
          </div>

          {/* Right Box */}
          <div className="flex-1">
            <ul
              className={`ml-5 flex list-disc flex-col gap-1 text-md font-[200] text-white ${outfit.className}`}
            >
              <li>Production &#40;Directing and Briefing&#41;</li>
              <li>Post&#45;Production &#40;Editing&#41;</li>
              <li className="font-semibold text-black">
                <Link
                  href="https://www.youtube.com/watch?si=Q0ha_5b3lt0GpX_r&v=gJq8tcmKXvI&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-4 border-black"
                >
                  KLIK HERE TO WATCH
                </Link>
              </li>
            </ul>
            <Link
              href="https://www.youtube.com/watch?si=Q0ha_5b3lt0GpX_r&v=gJq8tcmKXvI&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative mt-4 h-[200px] w-[350px]">
                <Image
                  src={hijabi}
                  alt="gambar YouTube hijabi"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-3 items-center px-2 py-8 w-full sm:hidden">
        <div className="w-full h-400px">
          <Link
            href="https://www.youtube.com/watch?si=xwPYzpq2QzZzjpv_&v=dIh2hts7FlU&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[240px] w-full">
              <Image
                src={granit}
                alt="gambar YouTube granit"
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <ul
            className={`${outfit.className} ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white`}
          >
            <li>Pre&#45;Production &#40;Concepting and Script Writing&#41;</li>
            <li>Production &#40;Directing and Briefing&#41;</li>
            <li>Post&#45;Production &#40;Editing&#41;</li>
            <li className="font-semibold text-black">
              <Link
                href="https://www.youtube.com/watch?si=xwPYzpq2QzZzjpv_&v=dIh2hts7FlU&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-4 border-black"
              >
                KLIK HERE TO WATCH
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 mt-5 h-400px">
          <Link
            href="https://www.youtube.com/watch?si=Q0ha_5b3lt0GpX_r&v=gJq8tcmKXvI&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[240px] w-full">
              <Image
                src={hijabi}
                alt="gambar YouTube hijabi"
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <ul
            className={`ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white ${outfit.className}`}
          >
            <li>Pre&#45;Production &#40;Concepting and Script Writing&#41;</li>
            <li>Production &#40;Directing and Briefing&#41;</li>
            <li>Post&#45;Production &#40;Editing&#41;</li>
            <li className="font-semibold text-black">
              <Link
                href="https://www.youtube.com/watch?si=Q0ha_5b3lt0GpX_r&v=gJq8tcmKXvI&feature=youtu.be"
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

export default Page4Service;
