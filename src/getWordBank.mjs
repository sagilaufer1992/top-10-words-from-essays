import {readFileContent} from "./Util/fileReader.mjs";
import {findMatches} from "./Util/wordPatternMatcher.mjs";

export async function getWordBank(path) {
    const wordBank = await readFileContent(path);
    return new Set(findMatches(wordBank).map(word=>word.toLowerCase()));
}