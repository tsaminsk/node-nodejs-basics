import { readdir, mkdir, copyFile, constants, access } from 'fs';
import path from 'path';
import * as url from 'url';

const copy = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const pathFolder = path.join(path.dirname(__filename));

  const copy = async () => {

    const createFolder = (nameFolder) => {
      mkdir(
        path.join(pathFolder, nameFolder),
        {
          recursive: true
        },
        (err) => {
          if (err) throw err;
        });
    }
    const copyFiles = () => {
      readdir(path.join(pathFolder, 'files'), (err, data) => {
        if (err) throw err;
        else {
          data.forEach(elm => {
            const pathFile = path.join(pathFolder, 'files', elm);
            const pathFileCopy = path.join(pathFolder, 'files_copy', elm);
            copyFile(
              pathFile,
              pathFileCopy,
              constants.COPYFILE_EXCL,
              (err) => {
                if (err) throw err;

              })
          })
          console.log('Files were copied');
        }
      });

    }
    access(
      path.join(pathFolder, 'files'),
      constants.F_OK,
      err => {
        if (err) {
          throw Error('File system operation failed')
        } else {
          access(
            path.join(pathFolder, 'files_copy'),
            constants.F_OK,
            err => {
              if (err) {
                createFolder('files_copy');
                copyFiles();
              } else throw Error('File system operation failed')
            }
          )
        }
      }
    )
  };

  await copy();
};

copy();