"use client";
import React from "react";

interface Props {
  children?: React.ReactNode;
  sectionId?: string;
  className?: string;
}

const ButtonScrollToSection = ({
  children = "",
  sectionId = "",
  className = "",
}: Props) => {
  // Function to scroll to the next section
  const scrollToSection = () => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    //window.scrollBy(0, 0); // Adjust the value as needed
  };
  return (
    <button
      onClick={scrollToSection}
      className={className + " cursor-pointer hover:text-blue-500"}
    >
      {children}
    </button>
  );
};

export default ButtonScrollToSection;
