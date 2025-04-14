"use client";
import React from "react";
import HoverDiv from "./HoverDiv";
import Title from "./Title";

interface Props {
  file: string;
}

const PostButton = ({ file }: Props) => {
  return (
    <HoverDiv
      className={
        "rounded-4xl border-1 px-5 pb-5 border-gray-300 break-inside-avoid mb-5 hover:cursor-pointer"
      }
      onClick={() => {
        console.log("hey");
      }}
    >
      <Title>
        {file.charAt(0).toUpperCase() +
          file
            .substring(0, file.indexOf("."))
            .replace(/([A-Z])/g, " $1")
            .slice(1)}
      </Title>
    </HoverDiv>
  );
};

export default PostButton;
