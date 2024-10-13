import Image from "next/image";
import page from "@/public/page 1_29.png";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import kun from "@/public/logo_mainn.png";
import lingkaran from "@/public/lingkaran.png";
import Link from "next/link";

function Contact() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center sm:justify-center">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden h-[100vh] w-full max-w-7xl flex-col rounded-lg pt-[100px] sm:flex gap-4">
        <div className="flex pl-[150px] h-[70px] w-full items-center text-[45px] font-[800] text-secondary">
          LET&#39;S BE A PARTNER
        </div>
        <div className="flex gap-8 justify-center">
          <div className="flex flex-col gap-3 h-full">
            <div className="relative h-[150px] w-[250px]">
              <Image
                src={kun}
                alt="brand content image"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[150px] w-[250px]">
              <Image
                src={lingkaran}
                alt="brand content image"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-[400] text-secondary">
                PHONE NUMBER
              </h2>
              <ul className="ml-6 flex flex-col gap-1 text-xl font-[300] text-white">
                <li>Abe &#40;0811-163-143&#41;</li>
                <li>Dhea &#40;0821-2810-1918&#41;</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-[400] text-secondary">EMAIL</h2>
              <ul className="ml-2 flex flex-col gap-1 px-2 text-xl font-[300] text-white">
                <li>kreatorutama&#46;nusantara&#64;gmail&#46;com</li>
                <li>lingkarankreasi&#46;inovasi&#64;gmail&#46;com</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-[400] text-secondary">SOCIAL MEDIA</h2>
              <ul className="ml-2 flex flex-col gap-1 px-2 text-xl font-[300] text-white">
                <Link
                  href="https://www.instagram.com/kreatorutamanusantara/?locale=en_US%2Cen_US&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>IG &#58; &#64;kreatorutamanusantara</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className="mt-[78px] flex h-[100vh] w-full flex-col gap-6 border-b-2 border-white px-3 py-4 sm:hidden">
        {/*  <div className="fixed z-[100] right-2 top-[320px] flex h-[100px] flex-col items-center gap-3 rounded-2xl bg-black/30 px-1 py-3 text-sm font-[200] text-white">
      <FaArrowUp />
      <span>Scroll</span>
      <FaArrowDown />
    </div> */}
        <p className="text-center text-3xl font-[800] text-secondary">
          LET&#39;S BE A PARTNER
        </p>
        <div className="flex gap-2">
          <div className="relative h-[100px] w-full">
            <Image
              src={kun}
              alt="brand content image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[100px] w-full">
            <Image
              src={lingkaran}
              alt="brand content image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-secondary">PHONE NUMBER</h2>
          <ul className="ml-2 flex flex-col gap-1 px-2 text-xl font-[300] text-white">
            <li>Abe &#40;0811-163-143&#41;</li>
            <li>Dhea &#40;0821-2810-1918&#41;</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-secondary">EMAIL</h2>
          <ul className="ml-2 flex flex-col gap-1 px-2 text-xl font-[300] text-white">
            <li>kreatorutama&#46;nusantara&#64;gmail&#46;com</li>
            <li>lingkarankreasi&#46;inovasi&#64;gmail&#46;com</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-secondary">SOCIAL MEDIA</h2>
          <ul className="ml-2 flex flex-col gap-1 px-2 text-xl font-[300] text-white">
            <Link
              href="https://www.instagram.com/kreatorutamanusantara/?locale=en_US%2Cen_US&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>IG &#58; &#64;kreatorutamanusantara</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
