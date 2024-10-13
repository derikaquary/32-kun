import Image from "next/image";
import page from "@/public/page 1_7.png";
import Link from "next/link";
import gambars from "@/public/gambars.png";
import gambars2 from "@/public/gambars2.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page8Service() {
  return (
    <div className="relative flex w-full justify-center sm:h-[100vh] sm:pt-[50px]">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden flex-col w-full max-w-7xl items-center pt-[60px] sm:flex">
        <div className="flex h-[70px] w-full items-center pl-[200px] text-[35px] font-[700] text-secondary">
          VIDEO PRODUCTION
        </div>
        <div className="flex w-[860px] items-center justify-center gap-3">
          {/* One and Only box */}
          <div className="flex flex-col gap-3 justify-center">
            <p className={`${outfit.className} text-xl text-white`}>
              VIDEO COMPANY PROFILE PERUM BULOG
            </p>
            <ul
              className={`${outfit.className} text-md flex list-disc flex-col gap-1 pl-11 font-[200] text-white`}
            >
              <li>
                Pre&#45;Production &#40;Concepting&#44; Script Writing &#38;
                Voice Over &#41;
              </li>
              <li>Production &#40;Shooting&#44; Directing and Briefing&#41;</li>
              <li>Post&#45;Production &#40; Editing and Motion Graphic &#41; </li>
              <li className="font-semibold text-black">
                <Link
                  href="https://www.instagram.com/reel/C7YFPrPPi4i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-4 border-black" // Use border for a thicker underline
                >
                  KLIK HERE TO WATCH
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link
              href="https://www.instagram.com/reel/C7YFPrPPi4i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-[250px] w-[500px]">
                <Image
                  src={gambars}
                  alt="gambar YouTube gambars"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className="pw-full flex flex-col items-center gap-6 px-2 pb-[100px] pt-8 sm:hidden">
        <div className="w-full h-400px">
          <Link
            href="https://app.frame.io/reviews/6bbe8a95-b823-4534-8f22-afb8073b1344/af1eede6-2bba-4b6d-a5ac-1a4f9210e08c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[240px] w-full">
              <Image
                src={gambars2}
                alt="gambar YouTube gambars2"
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <p
            className={`${outfit.className} mt-2 text-center text-xl text-white`}
          >
            VIDEO COMPANY PROFILE PERUM BULOG
          </p>
          <ul
            className={`${outfit.className} ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[200] text-white`}
          >
            <li>
              Pre&#45;Production &#40;Concepting&#44; Script Writing &#38; Voice
              Over&#41;{" "}
            </li>
            <li>Production &#40;Shooting&#44; Directing and Briefing&#41;</li>
            <li>Post&#45;Production &#40;Editing and Motion Graphic&#41;</li>
            <li className="font-semibold text-black">
              <Link
                href="https://app.frame.io/reviews/6bbe8a95-b823-4534-8f22-afb8073b1344/af1eede6-2bba-4b6d-a5ac-1a4f9210e08c"
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

export default Page8Service;
