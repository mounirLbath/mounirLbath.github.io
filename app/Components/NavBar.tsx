"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { display: "Home", path: "" },
  { display: "Posts", path: "posts" },
  { display: "Projects", path: "projects" },
  { display: "Other", path: "other" },
];

const NavBar = () => {
  const pathname = usePathname();
  const section = pathname.split("/")[1];

  return (
    <nav className="fixed w-full top-0 z-10 bg-background/85 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-3xl px-5 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono font-black text-blue-950 dark:text-blue-200 text-2xl"
        >
          ML
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={"/" + link.path}
              className={
                "hover:text-link duration-200 " +
                (section === link.path
                  ? "text-link"
                  : "text-gray-600 dark:text-gray-400")
              }
            >
              {link.display}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
