import { readdir } from "fs/promises";
import path from "path";
import React from "react";
import PostButton from "./PostButton";

const PostButtons = async () => {
  const directoryPath = path.join(__dirname, "../../../../public/postEntries/");

  try {
    const files = await readdir(directoryPath);

    return (
      <div>
        {files.map(function (file, index) {
          return <PostButton file={file} key={index} />;
        })}
      </div>
    );
  } catch (err) {
    return <h1>Couldn&apos;t load file.</h1>;
  }
};

export default PostButtons;
