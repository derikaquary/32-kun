import Image from "next/image";
import page1 from "@/public/page 1_28.png";
import person1 from "@/public/person1.png";
import person2 from "@/public/person2.png";
import person3 from "@/public/person3.png";
import person4 from "@/public/person4.png";
import person5 from "@/public/person5.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Team() {
  return (
    <div>
      {/* Big Screen */}
      <div className="relative hidden h-[100vh] w-full flex-col items-center justify-center gap-[10px] border-b-2 border-white/30 pt-[20px] sm:flex">
        {" "}
        <Image
          src={page1}
          alt="background page 1"
          fill
          className="z-[-50] object-cover"
        />
        <p className="w-[400px] text-center text-5xl font-[900] text-primary">
          OUR TEAM
        </p>
        <div className="flex flex-col">
          <div className="flex flex-col mb-6">
            <div className="relative mx-auto h-[190px] w-[155px]">
              <Image
                src={person1}
                alt="person1 logo"
                fill
                className="object-fit"
              />
            </div>
            <p className="w-full text-center font-[600] text-primary">
              M&#46; RIZKI ARIA BIMA
            </p>
            <p className="text-sm font-bold text-center text-black">CEO</p>
          </div>
          <div className="mt-[-80px] flex items-center gap-[160px]">
            <div className="flex flex-col">
              <div className="relative mx-auto h-[190px] w-[155px]">
                <Image
                  src={person2}
                  alt="person2 logo"
                  fill
                  className="object-fit"
                />
              </div>
              <p className="w-full text-center font-[600] text-primary">
                DEA DESTRIANA
              </p>
              <p className="text-sm font-bold text-center text-black">
                CREATIVE DIRECTOR
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative mx-auto h-[190px] w-[155px]">
                <Image
                  src={person4}
                  alt="person4 logo"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="w-full text-center font-[600] text-primary">
                WISNU TRESNA NUGRAHA
              </p>
              <p className="text-sm font-bold text-center text-black">
                DIRECTOR OF PHOTOGRAPHY
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative mx-auto h-[190px] w-[155px]">
                <Image
                  src={person5}
                  alt="person5 logo"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="w-full text-center font-[600] text-primary">
                M&#46; FATAN HAKIKI
              </p>
              <p className="text-sm font-bold text-center text-black">
                COMMISSIONER
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative mx-auto h-[190px] w-[155px]">
                <Image
                  src={person3}
                  alt="person3 logo"
                  fill
                  className="object-fit"
                />
              </div>
              <p className="w-full text-center font-[600] text-primary">
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
      <div className="relative flex w-full flex-col items-center justify-center border-b-2 border-white/30 pb-4 pt-[80px] sm:hidden">
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
            <p className="w-full text-center font-[600] text-primary">
              M&#46; RIZKI ARIA BIMA
            </p>
            <p className="font-bold text-center text-black">CEO</p>
          </div>
          <div className="flex flex-col">
            <div className="relative h-[300px] w-[270px]">
              <Image
                src={person5}
                alt="kun logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="w-full text-center font-[600] text-primary">
              M&#46; FATAN HAKIKI
            </p>
            <p className="font-bold text-center text-black">COMMISSIONER</p>
          </div>
          <div className="flex flex-col">
            <div className="relative h-[300px] w-[270px]">
              <Image
                src={person4}
                alt="kun logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="w-full text-center font-[600] text-primary">
              WISNU TRESNA NUGRAHA
            </p>
            <p className="font-bold text-center text-black">
              DIRECTOR OF PHOTOGRAPHY
            </p>
          </div>
          <div className="flex flex-col">
            <div className="relative h-[300px] w-[270px]">
              <Image src={person2} alt="kun logo" fill className="object-fit" />
            </div>
            <p className="w-full text-center font-[600] text-primary">
              DEA DESTRIANA
            </p>
            <p className="font-bold text-center text-black">
              CREATIVE DIRECTOR
            </p>
          </div>
          <div className="flex flex-col">
            <div className="relative h-[300px] w-[270px]">
              <Image src={person3} alt="kun logo" fill className="object-fit" />
            </div>
            <p className="w-full text-center font-[600] text-primary">
              FERDY AL&#39;AMIN
            </p>
            <p className="font-bold text-center text-black">
              TECHNICAL DIRECTOR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
