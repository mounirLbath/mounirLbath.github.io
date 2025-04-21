import LinkButton from "@/app/Components/LinkButton";
import MarkdownPost from "@/app/Components/MarkdownPost";
import React from "react";

interface Props {
  params: Promise<{ postName: string }>;
}

const page = async ({ params }: Props) => {
  const postName = (await params).postName;
  return (
    <div>
      <LinkButton href="/posts">&#10554; Back to Posts</LinkButton>
      <MarkdownPost postName={postName} />
      <LinkButton href="#">Back to top </LinkButton>
    </div>
  );
};

export default page;
