"use client";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
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

  // Images array with height and width for each image
  const images = [
    { src: bulog, alt: "bulog logo", height: 85, width: 250 },
    { src: boxes, alt: "boxes logo", height: 130, width: 130 },
    { src: pgn, alt: "pgn logo", height: 140, width: 140 },
    { src: jasa, alt: "jasa logo", height: 140, width: 195 },
    { src: bumn, alt: "bumn logo", height: 80, width: 300 },
    { src: roman, alt: "roman logo", height: 100, width: 290 },
    { src: ikku, alt: "ikku logo", height: 70, width: 250 },
    { src: water, alt: "water logo", height: 170, width: 300 },
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
      <div className="relative hidden h-[100vh] w-full flex-col items-center justify-center gap-7 sm:flex">
        <Image
          src={image4}
          alt="background"
          fill
          className="z-[-50] object-cover"
        />
        <div className="flex pl-[200px] w-full">
          <p className="text-4xl font-bold text-white">Our Clients</p>
        </div>

        <div className="flex flex-col gap-7 justify-center items-center w-full">
          <div className="flex h-[100px] w-full flex-row items-center justify-center gap-[40px]">
            <div className="relative h-[100px] w-[340px]">
              <Image src={bulog} alt="bulog logo" fill className="object-fit" />
            </div>
            <div className="relative h-[130px] w-[133px]">
              <Image src={boxes} alt="bulog logo" fill className="object-fit" />
            </div>
            <div className="relative h-[150px] w-[150px]">
              <Image src={pgn} alt="bulog logo" fill className="object-fit" />
            </div>
            <div className="relative h-[160px] w-[220px]">
              <Image src={jasa} alt="bulog logo" fill className="object-fit" />
            </div>
          </div>

          <div className="flex h-[100px] w-full flex-row items-center justify-center gap-[30px]">
            <div className="relative h-[110px] w-[460px]">
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
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center gap-7 sm:hidden">
        <Image
          src={image4}
          alt="background"
          fill
          className="z-[-50] object-cover"
        />
        <div className="flex justify-center w-full">
          <p className="text-6xl font-bold text-white">Our Clients</p>
        </div>

        <div className="relative flex h-[150px] w-full items-center justify-center">
          {/* Left Arrow */}
          <button
            className="absolute left-5 z-10 p-2 bg-white rounded-full"
            onClick={prevSlide}
          >
            <IoIosArrowBack />
          </button>

          {/* Carousel */}
          <div className="relative h-full w-[80%] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center min-w-full"
                >
                  <div
                    className="relative"
                    style={{
                      height: `${image.height}px`,
                      width: `${image.width}px`,
                    }}
                  >
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
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default Client;
