import Image from "next/image";
import page from "@/public/page 1_13.png";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import activation from "@/public/activation.jpg";

function Page1Brand() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center sm:justify-center">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden h-[100vh] w-full max-w-7xl flex-col rounded-lg pt-[100px] sm:flex">
        <div className="fixed left-[305px] top-[250px] z-[100] flex h-[100px] flex-col items-center gap-3 rounded-2xl bg-black/30 px-1 py-4 text-sm font-[200] text-white">
          <FaArrowUp />
          <span className="text-xs">Scroll</span>
          <FaArrowDown />
        </div>
        <div className="flex h-[70px] w-full items-center pl-[60px] text-[45px] font-[800] text-secondary">
          Brand Activation
        </div>
        <ul className="ml-[190px] flex list-disc flex-col gap-1 text-[30px] font-[300] text-white">
          <li>EVENT</li>
          <li>DIGITAL CAMPAIGN</li>
          <li>PRODUCT CAMPAIGN</li>
          <li>FIGURE CAMPAIGN</li>
        </ul>
      </div>
      {/* Small Screen */}
      <div className="mt-[160px] flex h-[100vh] w-full flex-col gap-6 border-b-2 border-white px-3 pb-4 sm:hidden">
        {/*  <div className="fixed z-[100] right-2 top-[320px] flex h-[100px] flex-col items-center gap-3 rounded-2xl bg-black/30 px-1 py-3 text-sm font-[200] text-white">
          <FaArrowUp />
          <span>Scroll</span>
          <FaArrowDown />
        </div> */}
        <p className="text-center text-3xl font-[800] text-secondary">
          BRAND ACTIVATION
        </p>
        <ul className="ml-5 flex list-disc flex-col gap-1 px-2 text-xl font-[300] text-white">
          <li>EVENT</li>
          <li>DIGITAL CAMPAIGN</li>
          <li>PRODUCT CAMPAIGN</li>
          <li>FIGURE CAMPAIGN</li>
        </ul>
        <div className="relative w-full h-full">
          <Image
            src={activation}
            alt="brand activation image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="px-3 py-2 text-white rounded-lg bg-black/30">
            Scroll down
          </p>
          <FaArrowDown color="white" size={20}/>
        </div>
      </div>
    </div>
  );
}

export default Page1Brand;
