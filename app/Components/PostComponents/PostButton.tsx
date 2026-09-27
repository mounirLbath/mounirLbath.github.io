import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  file: {
    data: { [key: string]: string };
    content: string;
    postName: string;
  };
}

// Optional frontmatter: `description` and `image` (a path under public/, e.g. /posts/fmaps.png)
// The whole block is one link
const PostButton = ({ file }: Props) => {
  return (
    <Link
      href={`/posts/${file.postName}`}
      className="group flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4 p-4 rounded-md border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-200/60 dark:hover:bg-gray-800/80 duration-300"
    >
      {file.data.image ? (
        <div className="relative w-full sm:w-44 h-40 sm:h-28 shrink-0 overflow-hidden rounded-sm border border-gray-200 dark:border-gray-800 bg-white">
          <Image
            src={file.data.image}
            alt={file.data.title + " illustration."}
            fill={true}
            quality={80}
            sizes="(min-width: 640px) 176px, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="flex-1 min-w-0">
        <p className="font-semibold leading-snug">
          {file.data.title}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {file.data.date}
          {file.data.draft ? <span className="italic"> · draft</span> : null}
        </p>
        {file.data.description ? (
          <p className="text-[0.95rem] mt-2">{file.data.description}</p>
        ) : null}
      </div>
    </Link>
  );
};

export default PostButton;
