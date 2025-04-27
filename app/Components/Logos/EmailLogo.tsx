import React from "react";

interface Props {
  mail?: string;
}

const EmailLogo = ({ mail = "" }: Props) => {
  return (
    <a href={"mailto:" + mail} target="blank">
      <svg
        viewBox="0 0 24 24"
        className="stroke-2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" />
        <path d="M22 6L12 13L2 6" />
      </svg>
    </a>
  );
};

export default EmailLogo;
