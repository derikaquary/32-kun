import Image from "next/image";
import page3 from "@/public/page 1_3.png";
import kunImage from "@/public/logo_mainn.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function About() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center">
      <Image
        src={page3}
        alt="background page 1"
        fill
        className="z-[-50] object-cover"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center p-4 w-full">
          <div className="sm:w-2/5"></div>
          <p className="sm:w-3/5 p-2 text-3xl font-[900] text-secondary">
            About Company
          </p>
          
        </div>
        <div className="flex flex-row justify-center p-4 w-full">
          <div className="sm:w-2/5"></div>
          <p className={`p-2 text-xl text-white ${outfit.className} sm:w-3/5 font-[200]`}>
            Kreator utama nusantara is a creative and digital services company
            that provides promotional videos, company profiles, managing social
            media both personal or company account, event organizing and also as
            media consulting for goverment and multinational company in our
            regional area.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default About;
