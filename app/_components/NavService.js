"use client"

import { useState } from "react";
import Image from "next/image";
import page from "@/public/page 1_5.png";
import Link from "next/link";

function NavService() {
  // State to track the active service
  const [activeService, setActiveService] = useState("");

  // Function to update the active service
  const handleClick = (service) => {
    setActiveService(service);
  };

  // Define button styles for active and inactive states
  const buttonClass = (service) =>
    `px-3 py-2 rounded-full border-2 transition-all ${
      activeService === service
        ? "bg-yellow-600 text-black" // Darker style for active button
        : "bg-yellow-500 text-black hover:bg-yellow-600"
    }`;

  return (
    <div className="flex bg-backgr sm:h-[100vh] w-full flex-col items-center sm:justify-center border-white/30 sm:fixed sm:w-[282px] sm:border-r-2">
      <Image
        src={page}
        alt="background page 5"
        fill
        className="z-[-50] object-cover"
      />
      {/* Big Screen */}
      <div className="hidden flex-col justify-center items-center p-2 max-w-7xl backdrop-blur-md sm:flex">
        <div className="px-auto text-[35px] font-[700] text-secondary">
          <p>Our Services</p>
        </div>
        <nav className="flex h-[200px] w-full flex-col items-center justify-center gap-3 text-lg font-[500] text-white">
          <Link href="/service/video_production">
            <button
              onClick={() => handleClick("video_production")}
              className={buttonClass("video_production")}
            >
              VIDEO PRODUCTION
            </button>
          </Link>
          <Link href="/service/brand_activation">
            <button
              onClick={() => handleClick("brand_activation")}
              className={buttonClass("brand_activation")}
            >
              BRAND ACTIVATION
            </button>
          </Link>
          <Link href="/service/content_creator">
            <button
              onClick={() => handleClick("content_creator")}
              className={buttonClass("content_creator")}
            >
              CONTENT CREATOR
            </button>
          </Link>
        </nav>
      </div>
      {/* Small Screen */}
      <div className="z-[1000] flex fixed flex-col gap-8 items-center px-2 py-3 bg-black/50 backdrop-blur-md sm:hidden w-full">
        <p className="text-5xl font-[800] text-secondary">Our Services</p>
        <div className="flex gap-3 text-xs font-[500] text-white">
          <Link href="/service/video_production">
            <button
              onClick={() => handleClick("video_production")}
              className={buttonClass("video_production")}
            >
              VIDEO PRODUCTION
            </button>
          </Link>
          <Link href="/service/brand_activation">
            <button
              onClick={() => handleClick("brand_activation")}
              className={buttonClass("brand_activation")}
            >
              BRAND ACTIVATION
            </button>
          </Link>
          <Link href="/service/content_creator">
            <button
              onClick={() => handleClick("content_creator")}
              className={buttonClass("content_creator")}
            >
              CONTENT CREATOR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavService;
