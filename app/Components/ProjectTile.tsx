import React from "react";
import Image from "next/image";
import GithubLogo from "./Logos/GithubLogo";
import YoutubeLogo from "./Logos/YoutubeLogo";
import WebLogo from "./Logos/WebLogo";
import LinkLogo from "./Logos/LinkLogo";

interface Props {
  title?: string;
  description?: React.ReactNode;
  imageSrc?: string;
  // a looping muted video, with imageSrc as its poster
  videoSrc?: string;
  tags?: string[];
  ghLink?: string;
  link?: string;
  websiteLink?: string;
  youtubeLink?: string;
  year?: string;
  // written by hand, before AI coding agents
  preAgentic?: boolean;
}

// Compact row, same layout as ResearchCard
const ProjectTile = ({
  title = "",
  description = "",
  imageSrc = "",
  videoSrc = "",
  tags = [],
  ghLink = "",
  link = "",
  websiteLink = "",
  youtubeLink = "",
  preAgentic = false,
  year = "",
}: Props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
      <div className="relative w-full sm:w-44 h-40 sm:h-28 shrink-0 overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        {videoSrc != "" ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            poster={imageSrc || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={title + " demo"}
          />
        ) : imageSrc != "" ? (
          <Image
            src={imageSrc}
            alt={title + " illustration."}
            fill={true}
            quality={80}
            sizes="(min-width: 640px) 176px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="h-full flex items-center justify-center font-mono text-xs text-gray-500 px-3 text-center">
            {tags[0]}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold leading-snug">
          {title}
          {year && (
            <span className="ml-2 font-normal text-gray-500 dark:text-gray-400">
              {year}
            </span>
          )}
          {preAgentic && (
            <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
              (written by hand before agentic coding)
            </span>
          )}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {tags.join(" · ")}
        </p>
        <div className="mt-2 text-[0.95rem]">{description}</div>
        <div className="mt-2 flex gap-4 text-gray-600 dark:text-gray-400">
          {ghLink != "" ? <GithubLogo link={ghLink} /> : null}
          {link != "" ? <LinkLogo link={link} /> : null}
          {websiteLink != "" ? <WebLogo link={websiteLink} /> : null}
          {youtubeLink != "" ? <YoutubeLogo link={youtubeLink} /> : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
