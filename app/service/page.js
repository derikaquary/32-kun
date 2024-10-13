import Image from "next/image";
import service from "@/public/service.jpeg";
import background from "@/public/page 1_4.png";

function Service() {
  return (
    <>
      <div className="hidden h-[100vh] flex-col items-center gap-3 sm:flex">
        <div className="flex relative flex-col gap-4 items-center w-full h-full pt-[90px]">
          <Image
            src={background}
            alt="background image"
            fill
            className="object-cover z-[-100]"
          />
          <p className="w-[400px] text-center text-3xl font-[700] text-secondary rounded-xl">
            {" "}
            Please &#34;Click&#34; one of the options on the left
          </p>
          <div className="relative mx-auto h-[400px] w-[500px]">
            <Image
              src={service}
              alt="service image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-[148px] bg-black/30 px-2 sm:hidden">
        <p className="px-2 py-5 text-center text-3xl font-[700] text-secondary">
          {" "}
          Please &#34;Click&#34; one of the options above
        </p>
        <div className="relative h-[400px] w-full">
          <Image
            src={service}
            alt="service image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </>
  );
}

export default Service;
