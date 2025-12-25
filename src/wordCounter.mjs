import {findMatches} from "./Util/wordPatternMatcher.mjs";

export async  function countWords(content, wordBank = new Set()) {
    const matches = findMatches(content);

    return matches.reduce((acc, word) => {
        const key = word.toLowerCase();

        if (!wordBank.has(key)) return acc;

        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
}
