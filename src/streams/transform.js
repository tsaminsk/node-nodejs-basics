import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { stdin, stdout } = process;

const transform = async () => {
  try {
    const reverseStream = new Transform({
      transform(chunk, _, callback) {
        const reversedText = chunk.toString().trim().split('').reverse().join('');
        const newline = '\n';
        callback(null, `${reversedText + newline}`);
      },
    });

    await pipeline(stdin, reverseStream, stdout);
  } catch (e) {
    console.error(e);
  }
};

await transform();