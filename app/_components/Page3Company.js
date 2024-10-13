import Image from "next/image";
import page1 from "@/public/page 1_27.png";
import lingkaran from "@/public/lingkaran.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page3Company() {
  return (
    <div>
      {/* Big Screen */}
      <div className="relative hidden h-[100vh] w-full flex-col items-center justify-center gap-10 border-b-2 border-white/30 pt-[50px] sm:flex">
        {" "}
        <Image
          src={page1}
          alt="background page 1"
          fill
          className="z-[-50] object-cover"
        />
        <div className="flex flex-col gap-5 items-center">
          <div className="relative h-[200px] w-[300px]">
            <Image src={lingkaran} alt="kun logo" fill className="object-fit" />
          </div>
          <p className="text-center text-4xl font-[500] text-primary">
            LINGKARAN KREASI INOVASI &#40;CIRCLE&#41;
          </p>
          <p className="w-[700px] text-center text-xl font-[700] text-primary">
            Merupakan Sister Company dari Kreator Utama Nusantara yang juga
            bergerak di bidang Jasa Periklanan, Special Event dan Event
            Organizer. Lingkaran Kreasi Inovasi (Circle) hadir di tahun 2023
            dengan status Pajak PKP
          </p>
        </div>
      </div>

      {/* Small Screen */}
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center border-b-2 border-white/30 px-3 sm:hidden">
        {" "}
        <Image
          src={page1}
          alt="background page 1"
          fill
          className="z-[-50] object-cover"
        />
        <div className="flex flex-col gap-4 items-center">
          <div className="relative h-[200px] w-[270px]">
            <Image src={lingkaran} alt="kun logo" fill className="object-fit" />
          </div>
          <p className="text-center text-4xl font-[500] text-primary">
          LINGKARAN KREASI INOVASI &#40;CIRCLE&#41;
          </p>
          <p className="text-justify text-lg font-[600] text-primary">
            Merupakan Sister Company dari Kreator Utama Nusantara yang juga
            bergerak di bidang Jasa Periklanan, Special Event dan Event
            Organizer. Lingkaran Kreasi Inovasi (Circle) hadir di tahun 2023
            dengan status Pajak PKP
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page3Company;
