import React from "react";
import type { Metadata } from "next";
import Title from "../Components/Title";
import ProjectsDisplay from "../Components/ProjectsDisplay";

export const metadata: Metadata = {
  title: "Projects",
};

const page = () => {
  return (
    <div>
      <Title level={1}>Projects</Title>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        Hackathon projects, games and apps I have built along the way.
      </p>
      <ProjectsDisplay />
    </div>
  );
};

export default page;
