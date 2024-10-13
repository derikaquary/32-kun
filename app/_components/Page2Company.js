import Image from "next/image";
import page1 from "@/public/page 1_25.png";
import kunImage from "@/public/logo_mainn.png";
import lingkaran from "@/public/lingkaran.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page2Company() {
  return (
    <div>
      {/* Big Screen */}
      <div className="relative hidden h-[100vh] w-full flex-col items-center justify-center gap-10 border-b-2 border-white/30 sm:flex">
        {" "}
        <Image
          src={page1}
          alt="background page 1"
          fill
          className="z-[-50] object-cover"
        />
        <p className="w-[400px] text-center text-7xl font-[900] text-secondary">
          OUR COMPANY
        </p>
        <div className="flex items-center gap-[100px]">
          <div className="relative h-[250px] w-[320px]">
            <Image src={kunImage} alt="kun logo" fill className="object-fit" />
          </div>
          <div className="relative h-[250px] w-[320px]">
            <Image
              src={lingkaran}
              alt="lingkaran logo"
              fill
              className="object-fit"
            />
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center border-b-2 border-white/30 sm:hidden">
        {" "}
        <Image
          src={page1}
          alt="background page 1"
          fill
          className="z-[-50] object-cover"
        />
        <div className="flex flex-col gap-4 items-center">
          <p className="text-center text-6xl font-[900] text-secondary">
            OUR COMPANY
          </p>
          <div className="relative h-[200px] w-[270px]">
            <Image src={kunImage} alt="kun logo" fill className="object-fit" />
          </div>
          <div className="relative h-[200px] w-[270px]">
            <Image
              src={lingkaran}
              alt="lingkaran logo"
              fill
              className="object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2Company;
