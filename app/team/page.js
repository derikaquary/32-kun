import Image from "next/image";
import page1 from "@/public/page 1_28.png";
import person1 from "@/public/person1.png";
import person2 from "@/public/person2.png";
import person3 from "@/public/person3.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Team() {
  return (
    <div>
      {/* Big Screen */}
      <div className="relative hidden h-[100vh] w-full flex-col items-center justify-center gap-[30px] border-b-2 border-white/30 pt-[50px] sm:flex">
        {" "}
        <Image
          src={page1}
          alt="background page 1"
          fill
          className="z-[-50] object-cover"
        />
        <p className="w-[400px] text-center text-7xl font-[900] text-primary">
          OUR TEAM
        </p>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="relative mx-auto h-[210px] w-[175px]">
              <Image
                src={person1}
                alt="person1 logo"
                fill
                className="object-fit"
              />
            </div>
            <p className="w-full text-center text-lg font-[600] text-primary">
              M. RIZKI ARIA BIMA
            </p>
            <p className="text-sm font-bold text-center text-black">CEO</p>
          </div>
          <div className="mt-[-160px] flex items-center gap-[300px]">
            <div className="flex flex-col">
              <div className="relative mx-auto h-[210px] w-[175px]">
                <Image
                  src={person2}
                  alt="person2 logo"
                  fill
                  className="object-fit"
                />
              </div>
              <p className="w-full text-center text-lg font-[600] text-primary">
                DEA DESTRIANA
              </p>
              <p className="text-sm font-bold text-center text-black">
                CREATIVE DIRECTOR
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative mx-auto h-[210px] w-[175px]">
                <Image
                  src={person3}
                  alt="person3 logo"
                  fill
                  className="object-fit"
                />
              </div>
              <p className="w-full text-center text-lg font-[600] text-primary">
                FERDY AL&#39;AMIN
              </p>
              <p className="text-sm font-bold text-center text-black">
                TECHNICAL DIRECTOR
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className="relative flex w-full flex-col items-center justify-center border-b-2 border-white/30 pt-[80px] pb-4 sm:hidden">
        {" "}
        <Image
          src={page1}
          alt="background page 1"
          fill
          className="z-[-50] object-cover"
        />
        <div className="flex flex-col gap-4 items-center">
          <p className="text-center text-6xl font-[900] text-primary">
            OUR TEAM
          </p>
          <div className="flex flex-col">
            <div className="relative h-[300px] w-[270px]">
              <Image src={person1} alt="kun logo" fill className="object-fit" />
            </div>
            <p className="w-full text-center text-lg font-[600] text-primary">
              M. RIZKI ARIA BIMA
            </p>
            <p className="font-bold text-center text-black">CEO</p>
          </div>
          <div className="flex flex-col">
            <div className="relative h-[300px] w-[270px]">
              <Image src={person2} alt="kun logo" fill className="object-fit" />
            </div>
            <p className="w-full text-center text-lg font-[600] text-primary">
            DEA DESTRIANA
            </p>
            <p className="font-bold text-center text-black">CREATIVE DIRECTOR</p>
          </div>
          <div className="flex flex-col">
            <div className="relative h-[300px] w-[270px]">
              <Image src={person3} alt="kun logo" fill className="object-fit" />
            </div>
            <p className="w-full text-center text-lg font-[600] text-primary">
            FERDY AL&#39;AMIN
            </p>
            <p className="font-bold text-center text-black">TECHNICAL DIRECTOR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
