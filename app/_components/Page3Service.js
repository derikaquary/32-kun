import Image from "next/image";
import page from "@/public/page 1_7.png";
import Link from "next/link";
import ikkubaru from "@/public/ikkubaruImage1.png";
import panganan from "@/public/panganan.png"
function Page3Service() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden flex-col px-2 w-full sm:flex">
        <div className="flex h-[130px] w-full items-center pl-[60px] text-[55px] font-[800] text-secondary">
          VIDEO PRODUCTION
        </div>
        <div className="flex h-[400px] w-full bg-green-400 px-[70px]">
          <div className="flex-1 bg-red-400 h-400px">
            <ul className="ml-5 flex list-disc flex-col gap-1 px-2 text-lg font-[300] text-white">
              <li>
                Pre&#45;Production &#40;Concepting and Script Writing&#41;
              </li>
              <li>Production &#40;Directing and Briefing&#41;</li>
              <li>Post&#45;Production &#40;Editing&#41;</li>
              <li className="font-semibold text-black">
                <Link href="https://www.youtube.com/watch?v=7ihGgcnKido" target="_blank" rel="noopener noreferrer">
                  KLIK HERE TO WATCH
                </Link>
              </li>
            </ul>
            <Link href="https://www.youtube.com/watch?v=7ihGgcnKido" target="_blank" rel="noopener noreferrer">
              <div className="relative mt-4 h-[260px] w-full bg-purple-400">
                <Image
                  src={ikkubaru}
                  alt="gambar YouTube Ikkubaru"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
          <div className="flex-1 bg-yellow-400 h-400px">
            <Link href="https://www.youtube.com/watch?si=b7ROcQx00tfIpj-m&v=Sd9-5sCeTVk&feature=youtu.be" target="_blank" rel="noopener noreferrer">
              <div className="relative h-[260px] w-full ">
                <Image
                  src={panganan}
                  alt="gambar YouTube Ikkubaru"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <ul className="ml-5 flex list-disc flex-col gap-1 px-2 text-lg font-[300] text-white">
              <li>
                Pre&#45;Production &#40;Concepting and Script Writing&#41;
              </li>
              <li>Production &#40;Directing and Briefing&#41;</li>
              <li>Post&#45;Production &#40;Editing&#41;</li>
              <li className="font-semibold text-black">
                <Link href="https://www.youtube.com/watch?si=b7ROcQx00tfIpj-m&v=Sd9-5sCeTVk&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                  KLIK HERE TO WATCH
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[50px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
        <div className="h-[50px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-6 justify-center items-center px-3 py-4 sm:hidden">
        <p className="text-center text-5xl font-[800] text-secondary">
          VIDEO PRODUCTION
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

export default Page3Service;
