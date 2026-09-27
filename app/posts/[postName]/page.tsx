import LinkButton from "@/app/Components/LinkButton";
import GetAllPostNames from "@/app/Components/PostComponents/GetAllPostNames";
import MarkdownPost from "@/app/Components/PostComponents/MarkdownPost";
import React from "react";
import type { Metadata } from "next";
import ReadMdPost from "@/app/Components/PostComponents/ReadMdPost";

interface Props {
  params: Promise<{ postName: string }>;
}

// Generate static params for the dynamic route
export async function generateStaticParams() {
  const posts = await GetAllPostNames();
  return posts.map((postName) => ({
    postName: postName,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await ReadMdPost((await params).postName);
  return { title: data.title, description: data.description };
}

export const dynamic = "force-static";
export const revalidate = 3600;

const page = async ({ params }: Props) => {
  const postName = (await params).postName;
  return (
    <div>
      <LinkButton href="/posts" className="text-sm">← All posts</LinkButton>
      <MarkdownPost postName={postName} />
      <a className="text-sm text-link hover:text-link-hover" href="#">
        ↑ Back to top
      </a>
    </div>
  );
};

export default page;
