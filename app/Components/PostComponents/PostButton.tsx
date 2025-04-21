"use client";
import React from "react";
import HoverDiv from "../HoverDiv";
import Title from "../Title";
import Link from "next/link";

interface Props {
  file: {
    data: { [key: string]: any };
    content: string;
    postName: string;
  };
}

const PostButton = ({ file }: Props) => {
  return (
    <Link href={`/posts/${file.postName}`}>
      <HoverDiv
        className={
          "rounded-4xl border-1 px-5 pb-2 border-gray-300 break-inside-avoid mb-5 hover:cursor-pointer"
        }
      >
        <Title paddingBottom={false} className="pb-5">
          {file.data.title}
        </Title>
        <p className="text-gray-800 text-sm italic pb-5">{file.data.date}</p>
      </HoverDiv>
    </Link>
  );
};

export default PostButton;
