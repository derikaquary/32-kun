import Image from "next/image";
import page1 from "@/public/page 1_25.png";
import kunImage from "@/public/logo_mainn.png";
import lingkaran from "@/public/lingkaran.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page1Company() {
  return (
    <div>
      {/* Big Screen */}
      <div className="relative hidden h-[100vh] w-full flex-col items-center justify-center sm:flex gap-10 border-b-2 border-white/30">
        {" "}
        <Image
          src={page1}
          alt="background page 1"
          fill
          className="z-[-50] object-cover"
        />
        <p className="text-center text-7xl font-[900] w-[400px] text-secondary">
          OUR COMPANY
        </p>
        <div className="flex gap-[100px] items-center">
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
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center sm:hidden border-b-2 border-white/30 pt-[50px]">
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
          <p className="px-3 py-2 mt-1 text-lg text-white rounded-lg bg-black/30">Scroll down</p>
        </div>
      </div>
    </div>
  );
}

export default Page1Company;
