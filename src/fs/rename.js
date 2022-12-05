import { rename as renameFile, existsSync } from "node:fs";
import { join } from "node:path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const base_path = join(__dirname, "files");
  const old_path = join(base_path, "wrongFilename.txt");
  const new_path = join(base_path, "properFilename.md");

  if (existsSync(new_path)) throw new Error("File system operation failed");

  renameFile(old_path, new_path, (err) => {
    if (err) throw new Error("File system operation failed");
  });
};

await rename();