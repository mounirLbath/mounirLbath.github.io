import React from "react";
import ImageTile from "../Components/ImageTile";

const page = () => {
  const images = [
    {
      id: "1BWXQXbBgGb7wYwjyHV5N2Fii2nvLsidM",
      description: "Alps at sunset",
      location: "Lac d'Anterne, French Alps",
      date: "August 2024",
      properties: ["Nikon D3400", "", "f/3.5"],
    },
    {
      id: "1-qZ63doe9Lppr2QgW8oBWjlH2jcsYKwH",
      description: "Milky Way and a tent",
      location: "Lac d'Anterne, French Alps",
      date: "August 2024",
      properties: ["Nikon D3400", "18mm", "f/3.5"],
    },

    {
      id: "11bDEUQ6-_9j4ne2ckhD2Iu3nyI9TKt1m",
      description: "Mont blanc",
    },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-6 gap-y-5">
        {images.map((im, index) => {
          return (
            <ImageTile
              key={index}
              index={index}
              id={im.id}
              description={im.description}
              date={im.date}
              properties={im.properties}
              location={im.location}
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
