import { readdir } from "fs/promises";
import ReadMdPost from "./ReadMdPost";

// Posts with `draft: true` in their frontmatter are only shown in development
const GetAllPostNames = async () => {
  try {
    const fileNames = await readdir(
      process.cwd() + "/public/postEntries/",
      "utf8"
    );
    const postNames = fileNames
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));

    if (process.env.NODE_ENV !== "production") return postNames;

    const published = await Promise.all(
      postNames.map(async (postName) => {
        const { data } = await ReadMdPost(postName);
        return data.draft ? null : postName;
      })
    );
    return published.filter((postName): postName is string => postName !== null);
  } catch {
    return []; // Return an empty array if there's an error
  }
};

export default GetAllPostNames;
