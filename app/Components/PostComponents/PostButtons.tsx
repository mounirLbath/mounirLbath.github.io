import React from "react";
import PostButton from "./PostButton";
import ReadMdPost from "./ReadMdPost";
import GetAllPostNames from "./GetAllPostNames";

const PostButtons = async () => {
  try {
    const fileNames = await GetAllPostNames();

    const files = await Promise.all(
      fileNames.map(async (postName) => {
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
  } catch {
    return <h1>Couldn&apos;t load file.</h1>;
  }
};

export default PostButtons;
