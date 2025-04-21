import React, { Suspense } from "react";
import PostButtons from "../Components/PostComponents/PostButtons";

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
