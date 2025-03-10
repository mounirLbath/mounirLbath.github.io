import Link from "next/link";
import React from "react";

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

  return (
    <div className="sticky top-0 flex items-center justify-between  bg-background/60 backdrop-blur-lg z-10 py-4 px-50">
      <Link className="font-mono font-black text-2xl" href="/">
        Mounir Lbath
      </Link>
      <div className="space-x-10">
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
  );
};

export default NavBar;
