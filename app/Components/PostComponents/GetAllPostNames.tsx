import { readdir } from "fs/promises";
import path from "path";

const GetAllPostNames = async () => {
  const directoryPath = path.join(
    __dirname,
    "../../../../../public/postEntries/"
  );

  try {
    const fileNames = await readdir(directoryPath);
    return fileNames;
  } catch {
    return []; // Return an empty array if there's an error
  }
};

export default GetAllPostNames;
