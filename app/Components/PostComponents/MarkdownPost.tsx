import React from "react";
import { MarkdownAsync } from "react-markdown";
import type { PluggableList } from "unified";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCitation from "rehype-citation";
import "katex/dist/katex.min.css"; // Import KaTeX styles
import ReadMdPost from "./ReadMdPost";

interface Props {
  postName: string;
}

const Page = async ({ postName }: Props) => {
  try {
    const { data, content } = await ReadMdPost(postName);

    // Posts cite with [@key]; `bibliography: name.bib` in the frontmatter
    // points to public/postEntries/bib/. References go where `[^ref]` is.
    const citationPlugin: PluggableList = data.bibliography
      ? [
          [
            rehypeCitation,
            {
              bibliography: data.bibliography,
              path: process.cwd() + "/public/postEntries/bib",
              csl: data.csl ?? "apa",
              linkCitations: true,
            },
          ],
        ]
      : [];

    return (
      <div className="markdown">
        <MarkdownAsync
          remarkPlugins={[[remarkMath], remarkGfm]}
          rehypePlugins={[
            rehypeKatex,
            ...citationPlugin,
            rehypeSlug,
            rehypeAutolinkHeadings,
          ]}
        >
          {`# ${data.title != undefined ? data.title : ""} \n ${
            data.author != undefined ? "*" + data.author + "*, " : ""
          } ${
            data.date != undefined ? "*" + data.date + "*" : ""
          } \n ${content}`}
        </MarkdownAsync>
      </div>
    );
  } catch {
    return <h1>Couldn&apos;t load file.</h1>;
  }
};

export default Page;
