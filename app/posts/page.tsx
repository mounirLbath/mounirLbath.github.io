import React, { Suspense } from "react";
import MarkdownPost from "../Components/MarkdownPost";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MarkdownPost postName="frobeniusTheorem" />

        <a href="#">Back to top </a>
      </Suspense>
    </div>
  );
};

export default page;
