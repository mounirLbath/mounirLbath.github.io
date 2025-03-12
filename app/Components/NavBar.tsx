"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavBarButtons from "./NavBarButtons";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className=" fixed w-full top-0 flex-col items-center justify-between  bg-background/40 backdrop-blur-lg z-10 py-4">
      <div className="top-0  flex items-center justify-between mx-10">
        <div className="font-mono font-black text-blue-950 text-2xl">
          <Link href={"/"}>ML</Link>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-15">
            <NavBarButtons toggleMenu={toggleMenu} />
          </div>
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex cursor-pointer items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 duration-300 ease-in-out "
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {/* Mobile menu icon */}
            <svg
              className={(isMenuOpen ? "hidden" : "block") + " h-6 w-6"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Mobile close icon */}
            <svg
              className={(isMenuOpen ? "block" : "hidden") + " h-6 w-6"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${
          isMenuOpen ? "" : "h-0 -translate-x-full"
        } transition-transform  duration-300 ease-in-out  sm:hidden flex-col mx-10`}
        id="mobile-menu"
      >
        <NavBarButtons toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default NavBar;
