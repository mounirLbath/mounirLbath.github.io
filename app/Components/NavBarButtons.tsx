import React from "react";
import Link from "next/link";

interface Props {
  currentPath?: string;
}

const NavBarButtons = ({ currentPath = "/" }: Props) => {
  const navLinks = [
    { display: "Home", path: "/" },
    { display: "Projects", path: "/projects" },
    { display: "Useful Links", path: "/a" },
    { display: "Other", path: "/a" },
  ];
  return (
    <>
      {navLinks.map((link, index) => (
        <div key={index}>
          <Link
            href={link.path}
            className={
              "text-lg hover:text-blue-500 duration-300 ease-in-out " +
              (currentPath === link.path && "text-blue-500")
            }
          >
            {link.display}
          </Link>
        </div>
      ))}
    </>
  );
};

export default NavBarButtons;
