import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { stdout } = process;

const read = async () => {
  try {
    await pipeline(
      createReadStream(join(__dirname, 'files', 'fileToRead.txt')),
      stdout
    );
  } catch (e) {
    console.error(e);
  }
};

await read();