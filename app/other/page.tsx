import React from "react";
import Image from "next/image";

const page = () => {
  const id = "1BWXQXbBgGb7wYwjyHV5N2Fii2nvLsidM";

  return (
    <div>
      <Image
        src={"https://drive.google.com/thumbnail?sz=w3000&id=" + id}
        alt="Mountains"
        width="600"
        height="200"
        unoptimized
      />
    </div>
  );
};

export default page;
