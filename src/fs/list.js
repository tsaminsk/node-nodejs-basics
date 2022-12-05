import { readdir } from "node:fs";

const list = async () => {
  readdir("./src/fs/files", (err, files) => {
    if (err) throw new Error("File system operation failed");
    console.log(files);
  });
};

await list();