"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  currentPath?: string;
}

const NavBar = ({ currentPath = "/" }: Props) => {
  const navLinks = [
    { display: "Home", path: "/" },
    { display: "Projects", path: "/projects" },
    { display: "Useful Links", path: "/a" },
    { display: "Other", path: "/a" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // <nav className="sticky top-0 flex items-center justify-between  bg-background/60 backdrop-blur-lg z-10 py-4 px-50">
    //   <Link className="font-mono font-black text-2xl" href="/">
    //     Mounir Lbath
    //   </Link>
    //   <div className="sm:items-stretch sm:justify-start">
    //     <div className="hidden sm:block sm:ml-6">
    //       <div className="flex space-x-4">
    //         {navLinks.map((link, index) => (
    //           <Link
    //             key={index}
    //             href={link.path}
    //             className={
    //               "text-lg hover:text-blue-500 duration-300 ease-in-out " +
    //               (currentPath === link.path && "text-blue-500")
    //             }
    //           >
    //             {link.display}
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <nav className="sticky top-0 flex-col items-center justify-between  bg-background/40 backdrop-blur-lg z-10 py-4">
      <div className="top-0  flex items-center justify-between mx-10">
        <div className="font-mono font-black text-2xl">Mounir Lbath</div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-15">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={
                  "text-lg hover:text-blue-500 duration-300 ease-in-out " +
                  (currentPath === link.path && "text-blue-500")
                }
              >
                {link.display}
              </Link>
            ))}
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
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Mobile close icon */}
            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
        } relative transition-transform  duration-300 ease-in-out  sm:hidden flex-col mx-10`}
        id="mobile-menu"
      >
        {navLinks.map((link, index) => (
          <div>
            <Link
              key={index}
              href={link.path}
              className={
                "text-lg hover:text-blue-500 duration-300 ease-in-out " +
                (currentPath === link.path && "text-blue-500")
              }
            >
              {link.display}
            </Link>{" "}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
