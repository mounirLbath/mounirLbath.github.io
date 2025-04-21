import LinkButton from "@/app/Components/LinkButton";
import GetAllPostNames from "@/app/Components/PostComponents/GetAllPostNames";
import MarkdownPost from "@/app/Components/PostComponents/MarkdownPost";
import React from "react";

interface Props {
  params: Promise<{ postName: string }>;
}

// Generate static params for the dynamic route
export async function generateStaticParams() {
  const posts = await GetAllPostNames();
  return posts.map((post) => ({
    postName: post,
  }));
}

export const dynamic = "force-static";
export const revalidate = 3600;

const page = async ({ params }: Props) => {
  const postName = (await params).postName;
  return (
    <div>
      <LinkButton href="/posts">&#10554; Back to Posts</LinkButton>
      <MarkdownPost postName={postName} />
      <a className="text-blue-500 hover:text-blue-900 " href="#">
        Back to top{" "}
      </a>
    </div>
  );
};

export default page;
