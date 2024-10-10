import Image from "next/image";
import page from "@/public/page 1_7.png";
import Link from "next/link";
import ikkubaru from "@/public/ikkubaruImage1.png";
import panganan from "@/public/panganan.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page3Service() {
  return (
    <div className="flex relative flex-col justify-center items-center w-full">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className=" hidden w-full max-w-7xl flex-col justify-center items-center sm:flex h-[100vh]">
        <div className=" flex h-[70px] w-full items-center pl-[200px] text-[35px] font-[700] text-secondary">
          VIDEO PRODUCTION
        </div>
        <div className="flex w-full max-w-7xl">
          <div className="flex flex-col flex-1 items-end h-400px">
            <ul
              className={` flex list-disc flex-col text-md font-[200] text-white ${outfit.className}`}
            >
              <li>
                Pre&#45;Production &#40;Concepting and Script Writing&#41;
              </li>
              <li>Production &#40;Directing and Briefing&#41;</li>
              <li>Post&#45;Production &#40;Editing&#41;</li>
              <li className="font-semibold text-black">
                <Link
                  href="https://www.youtube.com/watch?v=7ihGgcnKido"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KLIK HERE TO WATCH
                </Link>
              </li>
            </ul>
            <Link
              href="https://www.youtube.com/watch?v=7ihGgcnKido"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative mt-4 h-[200px] w-[350px]">
                <Image
                  src={ikkubaru}
                  alt="gambar YouTube Ikkubaru"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
          <div className="flex h-full w-[20px] items-start justify-center">
            <div className="h-[100%] w-[2px] bg-yellow-400"></div>
          </div>
          <div className="flex-1 h-400px">
            <Link
              href="https://www.youtube.com/watch?si=b7ROcQx00tfIpj-m&v=Sd9-5sCeTVk&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative mb-4 h-[200px] w-[350px]">
                <Image
                  src={panganan}
                  alt="gambar YouTube Ikkubaru"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <ul
              className={`ml-5 flex list-disc flex-col gap-1 px-2 text-md font-[200] text-white ${outfit.className}`}
            >
              <li>
                Pre&#45;Production &#40;Concepting and Script Writing&#41;
              </li>
              <li>Production &#40;Directing and Briefing&#41;</li>
              <li>Post&#45;Production &#40;Editing&#41;</li>
              <li className="font-semibold text-black">
                <Link
                  href="https://www.youtube.com/watch?si=b7ROcQx00tfIpj-m&v=Sd9-5sCeTVk&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KLIK HERE TO WATCH
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-3 justify-center px-2 pt-8 w-full bg-black/10 sm:hidden">
        <div className="w-full h-400px">
          <Link
            href="https://www.youtube.com/watch?v=7ihGgcnKido"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[240px] w-full">
              <Image
                src={ikkubaru}
                alt="gambar YouTube Ikkubaru"
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
                href="https://www.youtube.com/watch?v=7ihGgcnKido"
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
            href="https://www.youtube.com/watch?si=b7ROcQx00tfIpj-m&v=Sd9-5sCeTVk&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[240px] w-full">
              <Image
                src={panganan}
                alt="gambar YouTube Ikkubaru"
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
                href="https://www.youtube.com/watch?si=b7ROcQx00tfIpj-m&v=Sd9-5sCeTVk&feature=youtu.be"
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

export default Page3Service;
