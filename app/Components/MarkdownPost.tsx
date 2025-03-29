import React from "react";
import { promises as fs } from "fs";
import { unified } from "unified";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "katex/dist/katex.min.css"; // Import KaTeX styles

interface Props {
  postName: string;
}

const Page = async ({ postName }: Props) => {
  try {
    const file = await fs.readFile(
      process.cwd() + "/public/posts/" + postName + ".md",
      "utf8"
    );
    return (
      <div className="markdown">
        <ReactMarkdown
          children={file}
          remarkPlugins={[[remarkMath], remarkGfm]}
          rehypePlugins={[rehypeKatex, rehypeSlug, rehypeAutolinkHeadings]}
        />
      </div>
    );
  } catch {
    return <h1>Couldn't load file.</h1>;
  }
};

export default Page;
