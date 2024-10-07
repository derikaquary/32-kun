"use client"

import Image from "next/image";
import image4 from "@/public/page 1_4.png";
import bulog from "@/public/bulog.png";
import boxes from "@/public/boxes.png";
import pgn from "@/public/pgn.png";
import jasa from "@/public/jasa.png";
import bumn from "@/public/bumn.png";
import roman from "@/public/roman.png";
import ikku from "@/public/ikku.png";
import water from "@/public/water.png";
import { useState, useEffect } from "react";

function Client() {
  // State for carousel index
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: bulog, alt: "bulog logo" },
    { src: boxes, alt: "boxes logo" },
    { src: pgn, alt: "pgn logo" },
    { src: jasa, alt: "jasa logo" },
    { src: bumn, alt: "bumn logo" },
    { src: roman, alt: "roman logo" },
    { src: ikku, alt: "ikku logo" },
    { src: water, alt: "water logo" },
  ];

  // Auto-slide after every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup
  }, [images.length]);

  // Function for manual navigation
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Big Screen */}
      <div className="hidden relative sm:flex h-[100vh] w-full flex-col items-center justify-center gap-7">
        <Image
          src={image4}
          alt="background"
          fill
          className="z-[-50] object-cover"
        />
        <div className="flex pl-5 w-full">
          <p className="text-6xl font-bold text-white">Our Client</p>
        </div>

        <div className="flex flex-col gap-7 justify-center items-center w-full">
          <div className="flex h-[100px] w-full flex-row items-center justify-center gap-[40px]">
            <div className="relative h-[80px] w-[340px]">
              <Image src={bulog} alt="bulog logo" fill className="object-fit" />
            </div>
            <div className="relative h-[130px] w-[133px]">
              <Image src={boxes} alt="bulog logo" fill className="object-fit" />
            </div>
            <div className="relative h-[150px] w-[150px]">
              <Image src={pgn} alt="bulog logo" fill className="object-fit" />
            </div>
            <div className="relative h-[150px] w-[210px]">
              <Image src={jasa} alt="bulog logo" fill className="object-fit" />
            </div>
          </div>

          <div className="flex h-[100px] w-full flex-row items-center justify-center gap-[30px]">
            <div className="relative h-[350px] w-[460px]">
              <Image src={bumn} alt="bulog logo" fill className="object-fit" />
            </div>
            <div className="relative h-[100px] w-[290px]">
              <Image src={roman} alt="bulog logo" fill className="object-fit" />
            </div>
            <div className="relative h-[100px] w-[250px]" />
          </div>

          <div className="flex h-[100px] w-full flex-row items-center justify-center gap-[30px]">
            <div className="h-[50px] w-[20px]" />
            <div className="relative h-[70px] w-[250px]">
              <Image src={ikku} alt="bulog logo" fill className="object-fit" />
            </div>
            <div className="relative h-[170px] w-[300px]">
              <Image src={water} alt="bulog logo" fill className="object-fit" />
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen Carousel */}
      <div className="sm:hidden relative flex h-[100vh] w-full flex-col items-center justify-center gap-7">
        <Image
          src={image4}
          alt="background"
          fill
          className="z-[-50] object-cover"
        />
        <div className="flex pl-5 w-full">
          <p className="text-6xl font-bold text-white">Our Client</p>
        </div>

        <div className="flex items-center justify-center relative w-full h-[150px]">
          {/* Left Arrow */}
          <button
            className="absolute left-5 z-10 p-2 bg-white rounded-full"
            onClick={prevSlide}
          >
            &lt;
          </button>

          {/* Carousel */}
          <div className="overflow-hidden w-[80%] h-full relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center min-w-full"
                >
                  <div className="relative h-[150px] w-[150px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-fit"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-5 z-10 p-2 bg-white rounded-full"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default Client;
