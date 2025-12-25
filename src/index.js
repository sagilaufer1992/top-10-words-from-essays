import {readLines} from './fileReader.mjs'
import {readArticle} from './readArticle.mjs'
import {countWords} from './wordCounter.mjs'

const lines = await readLines('data/endg-urls');
const content = await readArticle(lines[0])
const occs = countWords(content);
console.log(occs);