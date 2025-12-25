import { parentPort } from "worker_threads";
import {readArticle} from "./readArticle.mjs";
import {countWords} from "./wordCounter.mjs";

// Listen for messages
parentPort.on("message", async ({url, lowerCaseWordBank}, resolve) => {
    const content = await readArticle(url)
    const occs = await countWords(content, lowerCaseWordBank);
    console.log(url, occs);
    parentPort.postMessage(occs); // send back the map
});