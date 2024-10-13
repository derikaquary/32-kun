import Image from "next/image";
import page1 from "@/public/page 1_26.png";
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
      <div className="relative hidden h-[100vh] w-full flex-col items-center justify-center gap-10 border-b-2 border-white/30 sm:flex pt-[50px]">
        {" "}
        <Image
          src={page1}
          alt="background page 1"
          fill
          className="z-[-50] object-cover"
        />
        <div className="flex flex-col gap-5 items-center">
          <div className="relative h-[200px] w-[300px]">
            <Image src={kunImage} alt="kun logo" fill className="object-fit" />
          </div>
          <p className="text-center text-4xl font-[500] text-primary">
            KREATOR UTAMA NUSANTARA
          </p>
          <p className="w-[700px] text-center text-xl font-[600] text-[rgb(25,49,186)]">
            Merupakan Perusahaan yang bergerak di bidang Jasa Periklanan,
            Fotografi, Platform digital dan Event organizer yang sudah hadir
            sejak tahun 2019 hingga saat ini, dengan status Pajak Non PKP
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
            <Image src={kunImage} alt="kun logo" fill className="object-fit" />
          </div>
          <p className="text-center text-4xl font-[500] text-primary">
            KREATOR UTAMA NUSANTARA
          </p>
          <p className="text-justify text-lg font-[600] text-primary">
            Merupakan Perusahaan yang bergerak di bidang Jasa Periklanan,
            Fotografi, Platform digital dan Event organizer yang sudah hadir
            sejak tahun 2019 hingga saat ini, dengan status Pajak Non PKP
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page2Company;
