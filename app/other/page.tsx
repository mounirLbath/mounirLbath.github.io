import React from "react";
import Image from "next/image";

const page = () => {
  const images = [
    {
      id: "1BWXQXbBgGb7wYwjyHV5N2Fii2nvLsidM",
      description: "Mountains during sunset",
    },
    {
      id: "1-qZ63doe9Lppr2QgW8oBWjlH2jcsYKwH",
      description: "Milky Way and a tent",
    },
    {
      id: "11bDEUQ6-_9j4ne2ckhD2Iu3nyI9TKt1m",
      description: "Mont blanc",
    },
  ];

  return (
    <>
      <div className="lg:grid grid-cols-2 gap-5">
        {images.map((im, index) => {
          return (
            <Image
              key={index}
              src={"https://drive.google.com/thumbnail?sz=w1000&id=" + im.id}
              alt={im.description}
              quality={100}
              width={1000}
              height={100}
              className="w-full h-auto"
              priority={index < 4}
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
