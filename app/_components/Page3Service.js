import Image from "next/image";
import page from "@/public/page 1_7.png";
import Link from "next/link";
import ikkubaru from "@/public/ikkubaruImage1.png";
import panganan from "@/public/panganan.png";
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
      <div className=" hidden flex-col w-full sm:flex pt-[50px] max-w-7xl">
        <div className="flex h-[130px] w-full items-center pl-[60px] text-[55px] font-[800] text-secondary ">
          VIDEO PRODUCTION
        </div>
        <div className="mx-auto flex h-[500px] w-full max-w-7xl  px-[70px]">
          <div className="flex-1 h-400px">
            <ul className="flex list-disc flex-col gap-1 text-lg font-[300] text-white">
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
              <div className="relative mt-4 h-[305px] w-full">
                <Image
                  src={ikkubaru}
                  alt="gambar YouTube Ikkubaru"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
          <div className="flex-1 h-400px">
            <Link
              href="https://www.youtube.com/watch?si=b7ROcQx00tfIpj-m&v=Sd9-5sCeTVk&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative mb-4 h-[305px] w-full">
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
        <div className="h-[50px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
        <div className="h-[50px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-3 pt-8 items-center px-2 w-full sm:hidden h-[1100px] bg-black/10">
        <div className="flex h-[130px] w-full items-center justify-center text-center text-[45px] font-[700] text-secondary">
          VIDEO PRODUCTION
        </div>
        <div className="flex h-[400px] w-full  flex-col">
          <div className="w-full h-400px">
            <Link
              href="https://www.youtube.com/watch?v=7ihGgcnKido"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-[240px] w-full ">
                <Image
                  src={ikkubaru}
                  alt="gambar YouTube Ikkubaru"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <ul className="ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[300] text-white">
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
            <ul className="ml-5 mt-2 flex list-disc flex-col gap-1 px-2 text-lg font-[300] text-white">
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
        <div className="h-[50px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
        <div className="h-[50px] w-full pl-[200px] text-4xl font-[500] text-white"></div>
      </div>
    </div>
  );
}

export default Page3Service;
