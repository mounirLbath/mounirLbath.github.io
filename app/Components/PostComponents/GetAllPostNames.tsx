import { readdir } from "fs/promises";

const GetAllPostNames = async () => {
  try {
    const fileNames = await readdir(
      process.cwd() + "/public/postEntries/",
      "utf8"
    );
    const files = fileNames.map((file) => {
      return file.replace(/\.md$/, "");
    });
    return files;
  } catch {
    return []; // Return an empty array if there's an error
  }
};

export default GetAllPostNames;
