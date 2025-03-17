import React from "react";
import Tool from "./Tool";

interface Props {
  tools: { logoSrc?: string; name?: string; link?: string }[];
}

const ToolsDisplay = ({ tools }: Props) => {
  return (
    <div className="flex flex-wrap space-x-3 space-y-3 my-10">
      {tools.map((v, index) => (
        <Tool key={index} logoSrc={v.logoSrc} name={v.name} link={v.link} />
      ))}
    </div>
  );
};

export default ToolsDisplay;
