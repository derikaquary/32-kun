import Image from "next/image";
import service from "@/public/service.jpeg"

function Service() {
  return (
    <div className="px-2 sm:hidden bg-black/30">
      <p className="px-2 py-5 text-3xl font-[700] text-secondary text-center "> Please &#34;Click&#34; one of the option above</p>
      <div className="relative w-full h-[400px] "><Image src={service} alt="service image" fill className="object-cover rounded-xl"/></div>
    </div>
  );
}

export default Service;
