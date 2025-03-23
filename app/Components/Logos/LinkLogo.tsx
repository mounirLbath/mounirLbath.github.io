import React from "react";

interface Props {
  link?: string;
}

const LinkLogo = ({ link = "" }: Props) => {
  return (
    <a href={link} target="blank">
      <svg
        className="stroke-2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>
  );
};

export default LinkLogo;
