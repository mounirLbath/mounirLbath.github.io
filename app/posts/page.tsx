import React, { Suspense } from "react";
import PostButtons from "../Components/PostButtons";

const page = async () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostButtons />
      </Suspense>
    </div>
  );
};

export default page;
