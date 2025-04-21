import { readdir } from "fs/promises";
import path from "path";
import React from "react";
import PostButton from "./PostButton";
import ReadMdPost from "./ReadMdPost";

const PostButtons = async () => {
  const directoryPath = path.join(
    __dirname,
    "../../../../../public/postEntries/"
  );

  try {
    const fileNames = await readdir(directoryPath);
    const files = await Promise.all(
      fileNames.map(async (file) => {
        const postName = file.replace(/\.md$/, "");
        const { data, content } = await ReadMdPost(postName);
        return { postName, data, content };
      })
    );

    const orderedFiles = files.sort((a, b) => {
      return a.data.numericalDate > b.data.numericalDate ? -1 : 1; // Sort in descending order
    });

    return (
      <div>
        {orderedFiles.map((file, index) => {
          return <PostButton file={file} key={index} />;
        })}
      </div>
    );
  } catch (err) {
    return <h1>Couldn&apos;t load file.</h1>;
  }
};

export default PostButtons;
