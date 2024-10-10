import Image from "next/image";
import page from "@/public/page 1_7.png";
import Link from "next/link";
import vr from "@/public/vr.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page7Service() {
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
        <div className="flex h-[70px] w-full items-center pl-[200px] text-[35px] font-[700] text-secondary">
          VIDEO PRODUCTION
        </div>
        <div className="flex gap-9 justify-center">
          {/* One and Only box */}
          <div>
            <Link
              href="https://www.instagram.com/reel/C7YFPrPPi4i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-[250px] w-[450px]">
                <Image
                  src={vr}
                  alt="gambar YouTube vr"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <p className={`${outfit.className} text-3xl text-white`}>
              VIDEO TRANSFORMASI BULOG
            </p>
            <ul
              className={`${outfit.className} flex list-disc flex-col gap-1 pl-11 text-xl font-[200] text-white`}
            >
              <li>
                Pre&#45;Production &#40;Concepting and Script Writing&#41;
              </li>
              <li>Production &#40;Shooting&#44; Directing and Briefing&#41;</li>
              <li>Post&#45;Production &#40;Editing Motion&#41; </li>
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
        </div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-6 items-center px-2 w-full bg-black/10 sm:hidden">
        <div className="w-full h-400px">
          <Link
            href="https://www.instagram.com/reel/C7YFPrPPi4i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[240px] w-full">
              <Image
                src={vr}
                alt="gambar YouTube vr"
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <p className={`${outfit.className} text-xl text-white text-center mt-2`}>
            VIDEO TRANSFORMASI BULOG
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
                href="https://www.instagram.com/reel/C7YFPrPPi4i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
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

export default Page7Service;
