"use client";
import React, { useState } from "react";
import ImageTile from "./ImageTile";

export interface Photo {
  src: string;
  orientation: "landscape" | "portrait";
  description?: string;
  location?: string;
}

export interface PhotoGroup {
  title: string;
  srcs: string[];
}

interface Props {
  photos: Photo[];
  artisticOrder: string[]; // photo srcs, visually curated
  themeGroups: PhotoGroup[];
  locationGroups: PhotoGroup[];
}

const orders = [
  { key: "artistic", label: "Artistic" },
  { key: "theme", label: "By theme" },
  { key: "location", label: "By location" },
] as const;

type OrderKey = (typeof orders)[number]["key"];

// Every order is arranged so portraits (two rows tall) leave no gaps
// in the two-column grid.
const PhotoGallery = ({
  photos,
  artisticOrder,
  themeGroups,
  locationGroups,
}: Props) => {
  const [order, setOrder] = useState<OrderKey>("artistic");

  const bySrc = new Map(photos.map((p) => [p.src, p]));
  const groups: PhotoGroup[] =
    order === "artistic"
      ? [{ title: "", srcs: artisticOrder }]
      : order === "theme"
        ? themeGroups
        : locationGroups;

  // photos per group, plus each group's offset so only the first few
  // photos on the page load eagerly
  const sections = groups.map((g) => ({
    title: g.title,
    photos: g.srcs.map((src) => bySrc.get(src)).filter((p): p is Photo => !!p),
  }));
  const offsets = sections.map((_, i) =>
    sections.slice(0, i).reduce((n, s) => n + s.photos.length, 0),
  );

  return (
    <>
      <div className="mt-8 flex gap-4 text-sm" role="group" aria-label="Order">
        {orders.map((o) => (
          <button
            key={o.key}
            type="button"
            aria-pressed={order === o.key}
            onClick={() => setOrder(o.key)}
            className={
              "duration-200 hover:text-link " +
              (order === o.key
                ? "text-link font-medium"
                : "text-gray-600 dark:text-gray-400")
            }
          >
            {o.label}
          </button>
        ))}
      </div>

      {sections.map((section, s) => (
        <section key={section.title || "all"}>
          {section.title && (
            <h2 className="mt-10 text-lg font-semibold tracking-tight">
              {section.title}
            </h2>
          )}
          <div className="grid mt-4 lg:grid-cols-2 gap-6 gap-y-5">
            {section.photos.map((im, i) => (
              <div
                key={im.src}
                className={
                  im.orientation == "landscape"
                    ? "row-span-1"
                    : "row-span-2 overflow-hidden"
                }
              >
                <ImageTile
                  index={offsets[s] + i}
                  src={im.src}
                  description={im.description}
                  location={im.location}
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default PhotoGallery;
