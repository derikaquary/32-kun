import Image from "next/image"; // Correctly import Image from next/image
import page from "@/public/page 1_5.png"; // Ensure this is the correct path for the image

function Service() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden flex-col justify-center items-center p-2 w-full rounded-lg sm:flex">
        <div className="w-full h-[100px] text-[55px] font-[800] text-secondary flex items-center pl-[60px]">Our Services</div>
        <div className="gap-3 w-full h-[200px]  text-4xl font-[500] text-white pl-[200px] flex flex-col justify-center "><p>VIDEO PRODUCTION</p><p>BRAND ACTIVATION</p><p>CONTENT CREATOR</p></div>
        <div className="w-full h-[100px]  text-4xl font-[500] text-white  pl-[200px]"></div>
        <div className="w-full h-[100px]  text-4xl font-[500] text-white  pl-[200px]"></div>
        
        
      </div>
      {/* Small Screen */}
      <div className="flex flex-col gap-8 justify-center items-center p-2 rounded-lg sm:hidden bg-black/30">
        <p className="text-5xl font-[800] text-secondary">Our Services</p>
        <div className="flex flex-col gap-1 text-3xl font-[500] text-white">
          <p>VIDEO PRODUCTION</p>
          <p>BRAND ACTIVATION</p>
          <p>CONTENT CREATOR</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
