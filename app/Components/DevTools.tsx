import React from "react";
import ToolsDisplay from "./ToolsDisplay";

const DevTools = () => {
  const tools = [
    { logoSrc: "/logos/cpp.svg", name: "C++", link: "https://cplusplus.com/" },
    {
      logoSrc: "/logos/python.svg",
      name: "Python",
      link: "https://www.python.org/",
    },
    {
      logoSrc: "/logos/js.png",
      name: "JavaScript",
      link: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
    {
      logoSrc: "/logos/c_sharp.svg",
      name: "C#",
      link: "https://dotnet.microsoft.com/en-us/languages/csharp",
    },
    { logoSrc: "/logos/ocaml2.svg", name: "OCaml", link: "https://ocaml.org/" },

    { logoSrc: "/logos/react.svg", name: "React", link: "https://react.dev/" },

    {
      logoSrc: "/logos/html.png",
      name: "HTML",
      link: "https://developer.mozilla.org/docs/Web/HTML",
    },
    {
      logoSrc: "/logos/css.svg",
      name: "CSS",
      link: "https://developer.mozilla.org/docs/Web/CSS",
    },
    { logoSrc: "/logos/sql.png", name: "SQL", link: "https://www.mysql.com/" },
    {
      logoSrc: "/logos/nextjs.svg",
      name: "Next JS",
      link: "https://nextjs.org/",
    },
    {
      logoSrc: "/logos/nodejs.svg",
      name: "Node JS",
      link: "https://nodejs.org/",
    },
    { logoSrc: "/logos/php.png", name: "PHP", link: "https://www.php.net/" },

    {
      logoSrc: "/logos/latex.svg",
      link: "https://www.latex-project.org/",
    },
  ];
  return <ToolsDisplay tools={tools} />;
};

export default DevTools;
