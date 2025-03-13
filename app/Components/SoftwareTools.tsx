import React from "react";
import ToolsDisplay from "./ToolsDisplay";

const SoftwareTools = () => {
  const tools = [
    {
      logoSrc: "/logos/vscode.svg",
      name: "VS Code",
      link: "https://code.visualstudio.com/",
    },
    {
      logoSrc: "/logos/unity.png",
      name: "Unity",
      link: "https://unity.com/",
    },
    {
      logoSrc: "/logos/blender.svg",
      name: "Blender",
      link: "https://www.blender.org",
    },
    {
      logoSrc: "/logos/photoshop.svg",
      name: "Photoshop",
      link: "https://www.adobe.com/products/photoshop.html",
    },
    {
      logoSrc: "/logos/premiere.svg",
      name: "Premiere Pro",
      link: "https://www.adobe.com/products/premiere.html",
    },
    {
      logoSrc: "/logos/aftereffects.png",
      name: "After Effects",
      link: "https://www.adobe.com/products/aftereffects.html",
    },
    {
      logoSrc: "/logos/studioone.svg",
      name: "Studio One",
      link: "https://intl.presonus.com/pages/studio-one-pro",
    },
    {
      logoSrc: "/logos/musescore.svg",
      name: "MuseScore",
      link: "https://musescore.org/",
    },
  ];
  return <ToolsDisplay tools={tools} />;
};

export default SoftwareTools;
