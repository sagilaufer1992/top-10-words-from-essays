import { readFile } from "fs/promises";

export async function readFileContent(path) {
    return await readFile(path, "utf8");
}

export async function readLines(path) {
    const content = await readFileContent(path);
    return content.split(/\r?\n/);
}


