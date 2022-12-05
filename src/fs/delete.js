import { rm } from "node:fs/promises";
import { doesFileExist, getDirName } from './utils/index.js';

const remove = async () => {
    const fpath = 'files/fileToRemove.txt';
    const path = getDirName(import.meta.url);

    const tPath = `${path}/${fpath}`;
    const isDelete = await doesFileExist(tPath);

    if (isDelete) {
        rm(targetPath);
    } else {
        throw new Error("File system operation failed");
    }
};

await remove();