import {readLines} from './Util/fileReader.mjs'
import {readArticle} from './readArticle.mjs'
import {countWords} from './wordCounter.mjs'
import {getWordBank} from "./getWordBank.mjs";

const lines = await readLines('data/endg-urls');
const content = await readArticle(lines[0])

const lowerCaseWordBank = await getWordBank('data/wordBank.txt')

const occs = await countWords(content, lowerCaseWordBank);
console.log(occs);