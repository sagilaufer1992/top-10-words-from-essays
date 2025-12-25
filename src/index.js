import {readLines} from './Util/fileReader.mjs'
import {readArticle} from './readArticle.mjs'
import {countWords} from './wordCounter.mjs'
import {getWordBank} from "./getWordBank.mjs";
import {WorkerPool} from "./workerPool.mjs";

function mergeWordMaps(maps) {
    return maps.reduce((acc, map) => {
        for (const [word, count] of Object.entries(map)) {
            acc[word] = (acc[word] || 0) + count;
        }
        return acc;
    }, {});
}

const pool = new WorkerPool(3);
const urls = (await readLines('data/endg-urls-short'))

const lowerCaseWordBank = await getWordBank('data/wordBank.txt')

const results = await Promise.all(urls.map(url => pool.run({url, lowerCaseWordBank})));
results.forEach(result => {
    console.log(result);
})

console.log("all done!")
const merged = mergeWordMaps(results);

const top = Object.entries(merged)
    .sort((a, b) => b[1] - a[1]) // sort descending by count
    .slice(0, 10)                // take top 10
    .map(([word, count]) => ({ word, count }));

console.log(top);