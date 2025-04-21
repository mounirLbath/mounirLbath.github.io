"use client";
import React from "react";
import HoverDiv from "./HoverDiv";
import Title from "./Title";
import Link from "next/link";

interface Props {
  file: string;
}

const PostButton = ({ file }: Props) => {
  return (
    <Link href={`/posts/${file.substring(0, file.indexOf("."))}`}>
      <HoverDiv
        className={
          "rounded-4xl border-1 px-5 pb-2 border-gray-300 break-inside-avoid mb-5 hover:cursor-pointer"
        }
      >
        <Title>
          {file.charAt(0).toUpperCase() +
            file
              .substring(0, file.indexOf("."))
              .replace(/([A-Z])/g, " $1")
              .slice(1)}
        </Title>
      </HoverDiv>
    </Link>
  );
};

export default PostButton;
