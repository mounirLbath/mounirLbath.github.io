import React from "react";
import ImageTile from "../Components/ImageTile";
import Title from "../Components/Title";

const page = () => {
  const images = [
    {
      id: "1BWXQXbBgGb7wYwjyHV5N2Fii2nvLsidM",
      description: "Alps at sunset",
      location: "Lac d'Anterne, French Alps",
      date: "August 2024",
      properties: ["Nikon D3400", "55mm", "ISO-100", "f/5.6"],
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
      location: "Col d'Anterne, French Alps",
      properties: ["Nikon D3400", "38mm", "ISO-100", "f/9"],

      date: "August 2024",
    },
    {
      id: "1AGDzreqxPjnPwi-gIh_BuvRCMvnJ_Wv0",
      description: "Road in Nikko, Japan",
      location: "Nikko, Japan",
      properties: ["Nikon D3400", "55mm", "ISO-200", "f/5.6"],

      date: "July 2023 (during IPhO 2023)",
    },
  ];

  return (
    <>
      <Title>Photography</Title>
      <p>
        I&apos;ve loved photography ever since middle school, especially
        capturing the Milky Way. Enjoy a selection of my best photos, some of
        which were taken together with my brother! Click on the pictures for
        more information!
      </p>
      <div className="grid mt-10 lg:grid-cols-2 gap-6 gap-y-5">
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
