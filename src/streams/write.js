import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { stdin } = process;

const write = async () => {
  try {
    await pipeline(
      stdin,
      createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'))
    );
  } catch (e) {
    console.error(e);
  }
};

await write();