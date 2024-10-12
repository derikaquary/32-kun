import Image from "next/image";
import page from "@/public/page 1_13.png";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import activation from "@/public/activation.jpg"

function Page1Brand() {
  return (
    <div className=" relative flex h-[100vh] w-full flex-col items-center sm:justify-center">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden h-[100vh] w-full max-w-7xl flex-col rounded-lg pt-[100px] sm:flex">
        <div className="fixed z-[100] left-[305px] top-[250px] flex h-[100px] flex-col items-center gap-3 rounded-2xl bg-black/30 px-1 py-4 text-sm font-[200] text-white">
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
      <div className="w-full flex flex-col gap-6  px-3 pt-[20px] sm:hidden h-[100vh] border-b-2 border-white">
        
     {/*  <div className="fixed z-[100] right-2 top-[320px] flex h-[100px] flex-col items-center gap-3 rounded-2xl bg-black/30 px-1 py-3 text-sm font-[200] text-white">
          <FaArrowUp />
          <span>Scroll</span>
          <FaArrowDown />
        </div> */}
        <p className="text-center text-3xl font-[800] text-secondary ">
          Brand Activation
        </p>
        <ul className="ml-5 flex list-disc flex-col gap-1 px-2 text-xl font-[300] text-white">
          <li>EVENT</li>
          <li>DIGITAL CAMPAIGN</li>
          <li>PRODUCT CAMPAIGN</li>
          <li>FIGURE CAMPAIGN</li>
        </ul>
        <div className="relative w-full h-[500px] "><Image src={activation} alt="brand activation image" fill className="object-cover rounded-xl"/></div>
      </div>
    </div>
  );
}

export default Page1Brand;
