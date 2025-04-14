import React, { Suspense } from "react";
import PostButtons from "../Components/PostButtons";
import MarkdownPost from "../Components/MarkdownPost";

const page = async () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostButtons />
      </Suspense>
      <MarkdownPost postName={"test.md"} />;<a href="#">Back to top </a>
    </div>
  );
};

export default page;
