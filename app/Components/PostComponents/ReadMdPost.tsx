import fs from "fs";
import matter from "gray-matter";

const ReadMdPost = async (postName: string) => {
  try {
    const file = await fs.promises.readFile(
      process.cwd() + "/public/postEntries/" + postName + ".md",
      "utf8"
    );

    return { data: matter(file).data, content: matter(file).content };
  } catch {
    return { data: {}, content: "Couldn&apos;t load file." };
  }
};

export default ReadMdPost;
