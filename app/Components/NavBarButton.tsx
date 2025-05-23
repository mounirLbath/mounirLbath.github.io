import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  toggleMenu: () => void;
}

const NavBarButton = ({ toggleMenu }: Props) => {
  const pathname = usePathname();
  const navLinks = [
    { display: "Home", path: "" },
    { display: "Projects", path: "projects" },
    { display: "Posts", path: "posts" },
    { display: "Other", path: "other" },
  ];
  return (
    <>
      {navLinks.map((link, index) => (
        <div key={index}>
          <Link
            href={"/" + link.path}
            className={
              "text-lg hover:text-blue-500 duration-300 ease-in-out " +
              (pathname.split("/").length >= 2 &&
              pathname.split("/")[1] === link.path
                ? "text-blue-500"
                : "")
            }
            onClick={toggleMenu}
          >
            {link.display}
          </Link>
        </div>
      ))}
    </>
  );
};

export default NavBarButton;
