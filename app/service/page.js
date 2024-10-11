import Image from "next/image";
import Page2Service from "../_components/Page2Service";
import service from "@/public/service.jpeg"

function Service() {
  return (
    <div className="sm:hidden">
      <p className="px-2 py-5 text-3xl font-[700] text-secondary text-center bg-black/30"> Please "Click" one of the option above</p>
      <div className="relative w-full h-[500px]"><Image src={service} alt="service image" fill className="object-cover"/></div>
    </div>
  );
}

export default Service;
