"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageTileProps {
  index: number;
  id: string;
  description?: string;
  date?: string;
  properties?: string[];
  location?: string;
}

const ImageTile: React.FC<ImageTileProps> = ({
  index,
  id,
  description = "",
  date = "",
  properties = [],
  location = "",
}) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  return (
    <div>
      <div className="relative overflow-hidden group">
        <Image
          src={"https://drive.google.com/thumbnail?sz=w1000&id=" + id}
          alt={description + " (" + location + ")"}
          quality={100}
          width={1000}
          height={100}
          className="w-full h-auto cursor-pointer transform transition-transform duration-300 ease-in-out lg:group-hover:scale-110"
          priority={index < 4}
          onClick={() => {
            setDescriptionOpen(!descriptionOpen);
          }}
        />
        {
          <div
            className={
              "absolute inset-0 p-5  cursor-pointer bg-background/40 backdrop-blur-lg w-full transition-opacity duration-500 ease-in-out " +
              (descriptionOpen ? "opacity-100" : "opacity-0")
            }
            onClick={() => {
              setDescriptionOpen(!descriptionOpen);
            }}
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="font-mono text-xl sm:text-2xl">{description}</p>
                {location != null && location != "" ? (
                  <p className="font-mono text-lg sm:text-xl">
                    {"(" + location + ")"}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                {properties != null && properties.length > 0 ? (
                  <div className="flex gap-5">
                    {properties.map((v, index) => (
                      <p key={index} className="text-xs sm:text-base">
                        {v}
                      </p>
                    ))}
                  </div>
                ) : (
                  ""
                )}

                {date != null && date != "" ? <p>{date}</p> : ""}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ImageTile;
