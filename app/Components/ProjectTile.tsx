import React from "react";
import HoverDiv from "./HoverDiv";
import Title from "./Title";
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
    <HoverDiv
      className={
        "rounded-4xl border-1 px-5 pb-5 border-gray-300 break-inside-avoid mb-5" +
        (imageSrc != "" ? "" : "")
      }
    >
      <div className="flex justify-between">
        <Title>{title}</Title>
        <div className="flex flex-wrap justify-end py-10">
          {tags.map((v, index) => (
            <p key={index} className="pl-2">
              {v}
            </p>
          ))}
        </div>
      </div>
      {imageSrc != "" ? (
        <div className="relative h-50 mb-5">
          <Image
            src={imageSrc}
            alt={title + " illustration."}
            fill={true}
            quality={100}
            objectFit="cover"
          />
        </div>
      ) : null}
      <p className="px-10">{description}</p>

      <div className="mt-5 flex space-x-5 align-bottom">
        {ghLink != "" ? <GithubLogo link={ghLink} /> : null}
        {link != "" ? <LinkLogo link={link} /> : null}
        {websiteLink != "" ? <WebLogo link={websiteLink} /> : null}
        {youtubeLink != "" ? <YoutubeLogo link={youtubeLink} /> : null}
      </div>
    </HoverDiv>
  );
};

export default ProjectTile;
