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
  tags?: string[];
  ghLink?: string;
  link?: string;
  websiteLink?: string;
  youtubeLink?: string;
}

// Compact row, same layout as ResearchCard
const ProjectTile = ({
  title = "",
  description = "",
  imageSrc = "",
  tags = [],
  ghLink = "",
  link = "",
  websiteLink = "",
  youtubeLink = "",
}: Props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
      <div className="relative w-full sm:w-44 h-40 sm:h-28 shrink-0 overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        {imageSrc != "" ? (
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
        <h3 className="font-semibold leading-snug">{title}</h3>
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
