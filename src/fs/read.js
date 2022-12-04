import * as fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fsPromises = fs.promises;

const targetPath = `${__dirname}/files/fileToRead.txt`;
const errorMsg = 'File system operation failed';

const read = async () => {
  fsPromises.readFile(targetPath, 'utf-8', { flag: 'wx' })
    .then(data => console.log(data))
    .catch(() => {
      throw new Error(errorMsg);
    })
};

await read();