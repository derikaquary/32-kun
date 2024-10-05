"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the dropdown menu
  const buttonRef = useRef(null); // Ref for the hamburger button

  function handleSidebar() {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle menu open/close
  }

  // Close the menu if clicking outside of the dropdown menu or the hamburger button
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside both the menu and the hamburger button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close menu if clicking outside
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close the dropdown menu if the window width exceeds 640px (sm breakpoint)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 640) {
        setIsOpen(false); // Automatically close the menu on larger screens
      }
    }

    window.addEventListener("resize", handleResize);

    // Initial check for screen size on mount
    if (window.innerWidth >= 640) {
      setIsOpen(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed z-[1001] h-[74px] w-full bg-primary">
      <div className="flex flex-row justify-between items-center px-3 py-3 mx-auto border-b border-b-[#f6c34c] max-w-7xl">
        <div className="flex flex-row gap-2 items-center">
          <div className="relative h-[50px] w-[50px]">
            <Image src={logo} fill alt="Company logo" className="rounded-lg" />
          </div>
        </div>

        <button
          ref={buttonRef} // Add ref to the hamburger button
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="navigation"
          onClick={handleSidebar} // Toggle menu open/close
          className="block sm:hidden">
          <RxHamburgerMenu color="white" size={40} />
        </button>

        <nav
          ref={menuRef} // Add ref to the menu
          id="navigation"
          className={`absolute bottom-0 left-[180px] right-0 top-[75px] flex h-[100vh] transform flex-col gap-4 bg-black/60 px-3 py-3 backdrop-blur-md transition-transform duration-300 ${
            isOpen ? "scale-in-hor-right z-[100]" : "scale-out-hor-right"
          }`}
          aria-hidden={!isOpen}>
          <Link
            href="#home"
            className="text-xl text-white sm:mr-7 sm:block sm:text-lg">
            Home
          </Link>
          <Link
            href="#services"
            className="text-xl text-white sm:mr-7 sm:block sm:text-lg">
            Services
          </Link>
          <Link
            href="#pricing"
            className="text-xl text-white sm:mr-7 sm:block sm:text-lg">
            Pricing
          </Link>
          <Link
            href="#collections"
            className="text-xl text-white sm:mr-7 sm:block sm:text-lg">
            Samples
          </Link>
          <Link
            href="#about"
            className="text-xl text-white sm:mr-7 sm:block sm:text-lg">
            About
          </Link>
          <Link
            href="#projects"
            className="text-xl text-white sm:mr-7 sm:block sm:text-lg">
            Projects
          </Link>
        </nav>

        <nav className="hidden gap-4 text-white sm:flex">
          <Link href="#home">Home</Link>
          <Link href="#services">Service</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#collections">Samples</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
