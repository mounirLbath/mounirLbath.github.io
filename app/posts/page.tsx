import React, { Suspense } from "react";
import type { Metadata } from "next";
import PostButtons from "../Components/PostComponents/PostButtons";
import Title from "../Components/Title";

export const metadata: Metadata = {
  title: "Posts",
};

const page = async () => {
  return (
    <div>
      <Title level={1}>Posts</Title>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        Notes and write-ups on mathematics, geometry and machine learning.
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <PostButtons />
      </Suspense>
    </div>
  );
};

export default page;
