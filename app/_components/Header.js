"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the dropdown menu
  const buttonRef = useRef(null); // Ref for the hamburger button
  const pathname = usePathname(); // To get the current path

  function handleSidebar() {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle menu open/close
  }

  // Close the menu if clicking outside of the dropdown menu or the hamburger button
  useEffect(() => {
    function handleClickOutside(event) {
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

  // Function to check if the current route matches the link
  const isActiveLink = (href) => {
    // Check if the pathname starts with the href
    return pathname === href || pathname.startsWith(href);
  };

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
          className="block sm:hidden"
        >
          <RxHamburgerMenu color="white" size={40} />
        </button>

        <nav
          ref={menuRef} // Add ref to the menu
          id="navigation"
          className={`absolute bottom-0 left-[180px] right-0 top-[75px] flex h-[100vh] transform flex-col gap-4 bg-black/60 px-3 py-3 backdrop-blur-md transition-transform duration-300 ${
            isOpen ? "scale-in-hor-right z-[100]" : "scale-out-hor-right"
          }`}
          aria-hidden={!isOpen}
        >
          <Link
            href="/"
            className={`text-xl text-white sm:mr-7 sm:block sm:text-lg ${ isActiveLink("/") ? "text-yellow-500" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-xl text-white sm:mr-7 sm:block sm:text-lg ${ isActiveLink("/about") ? "text-yellow-500" : ""}`}
          >
            About
          </Link>
          <Link
            href="/client"
            className={`text-xl text-white sm:mr-7 sm:block sm:text-lg ${ isActiveLink("/client") ? "text-yellow-500" : ""}`}
          >
            Clients
          </Link>
          <Link
            href="/service"
            className={`text-xl text-white sm:mr-7 sm:block sm:text-lg ${ isActiveLink("/service") ? "text-yellow-500" : ""}`}
          >
            Services
          </Link>
          <Link
            href="/team"
            className={`text-xl text-white sm:mr-7 sm:block sm:text-lg ${ isActiveLink("/team") ? "text-yellow-500" : ""}`}
          >
            Team
          </Link>
          <Link
            href="/contact"
            className={`text-xl text-white sm:mr-7 sm:block sm:text-lg ${ isActiveLink("/contact") ? "text-yellow-500" : ""}`}
          >
            Contact
          </Link>
        </nav>

        <nav className="hidden gap-4 text-white sm:flex">
          <Link
            href="/"
            className={`${isActiveLink("/") ? "text-yellow-500" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${isActiveLink("/about") ? "text-yellow-500" : ""}`}
          >
            About
          </Link>
          <Link
            href="/client"
            className={`${isActiveLink("/client") ? "text-yellow-500" : ""}`}
          >
            Clients
          </Link>
          <Link
            href="/service"
            className={`${isActiveLink("/service") ? "text-yellow-500" : ""}`}
          >
            Services
          </Link>
          <Link
            href="/team"
            className={`${isActiveLink("/team") ? "text-yellow-500" : ""}`}
          >
            Team
          </Link>
          <Link
            href="/contact"
            className={`${isActiveLink("/contact") ? "text-yellow-500" : ""}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
