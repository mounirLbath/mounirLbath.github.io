"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ArtTileProps {
  src: string;
  width: number;
  height: number;
  title: string;
  date?: string;
  // screenshot of the scene in Blender, shown in the info overlay
  scene?: string;
}

// A render; clicking it blurs it and shows the title, date and the
// Blender screenshot on top.
const ArtTile: React.FC<ArtTileProps> = ({
  src,
  width,
  height,
  title,
  date = "",
  scene,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative overflow-hidden group cursor-pointer"
      style={{ aspectRatio: `${width} / ${height}` }}
      onClick={() => setOpen(!open)}
    >
      <Image
        src={src}
        alt={title}
        fill
        quality={85}
        sizes="(min-width: 1024px) 768px, 90vw"
        className="object-cover transform transition-transform duration-300 ease-in-out lg:group-hover:scale-110"
      />
      <div
        className={
          "absolute inset-0 p-5 bg-background/40 backdrop-blur-lg transition-opacity duration-500 ease-in-out " +
          (open ? "opacity-100" : "opacity-0")
        }
      >
        <div className="flex h-full flex-col justify-between gap-4">
          <p className="font-mono text-xl sm:text-2xl">{title}</p>
          {scene && (
            <figure className="mx-auto w-full max-w-lg">
              <Image
                src={scene}
                alt={title + " scene in Blender"}
                width={1600}
                height={886}
                sizes="(min-width: 1024px) 512px, 80vw"
                className="w-full h-auto shadow-lg"
              />
              <figcaption className="mt-1 text-xs">In Blender</figcaption>
            </figure>
          )}
          {date && <p>{date}</p>}
        </div>
      </div>
    </div>
  );
};

export default ArtTile;
