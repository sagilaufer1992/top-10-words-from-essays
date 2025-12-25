import { readFile } from "fs/promises";

export async function readLines(path) {
    const data = await readFile(path, "utf8");
    return data.split(/\r?\n/);
}


