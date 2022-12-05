import { appendFile, access, constants } from 'fs';
import path from 'path';
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const pathFile = path.join(path.dirname(__filename), 'files', 'fresh.txt');

const create = async () => {
  access(pathFile,
    constants.F_OK,
    err => {
      if (err) {
        appendFile(
          pathFile,
          'I am fresh and young',
          'utf8',
          (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
          }
        )
      } else throw Error('File system operation failed');
    }
  )
};

await create();