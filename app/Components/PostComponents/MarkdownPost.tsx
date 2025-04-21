import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "katex/dist/katex.min.css"; // Import KaTeX styles
import ReadMdPost from "./ReadMdPost";

interface Props {
  postName: string;
}

const Page = async ({ postName }: Props) => {
  try {
    const { data, content } = await ReadMdPost(postName);
    return (
      <div className="markdown">
        <ReactMarkdown
          remarkPlugins={[[remarkMath], remarkGfm]}
          rehypePlugins={[rehypeKatex, rehypeSlug, rehypeAutolinkHeadings]}
        >
          {`# ${data.title != undefined ? data.title : ""} \n ${
            data.author != undefined ? "*" + data.author + "*, " : ""
          } ${
            data.date != undefined ? "*" + data.date + "*" : ""
          } \n ${content}`}
        </ReactMarkdown>
      </div>
    );
  } catch {
    return <h1>Couldn&apos;t load file.</h1>;
  }
};

export default Page;

// import React from "react";

// import { promises as fs } from "fs";
// import ReactMarkdown from "react-markdown";
// import remarkMath from "remark-math";
// import remarkGfm from "remark-gfm";
// import rehypeKatex from "rehype-katex";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import "katex/dist/katex.min.css"; // Import KaTeX styles
// import { InferGetStaticPropsType } from "next";

// interface Props {
//   postName: string;
// }

// export const getStaticProps = async ({ postName }: Props) => {
//   try {
//     const file = await fs.readFile(
//       process.cwd() + "/public/posts/" + postName,
//       "utf8"
//     );

//     return {
//       props: {
//         post: file,
//       },
//     };
//   } catch (err) {
//     console.error(err);
//     return {
//       props: {
//         post: "Couldn&apos;t load file.",
//       },
//     };
//   }
// };

// const Page = async ({
//   post,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   return (
//     <div className="markdown">
//       <ReactMarkdown
//         remarkPlugins={[[remarkMath], remarkGfm]}
//         rehypePlugins={[rehypeKatex, rehypeSlug, rehypeAutolinkHeadings]}
//       >
//         {post}
//       </ReactMarkdown>
//     </div>
//   );
// };

// export default Page;
