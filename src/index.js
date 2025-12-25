import {readLines} from './fileReader.mjs'
import {readArticle} from './readArticle.mjs'

const lines = await readLines('data/endg-urls');
const content = await readArticle(lines[0])
console.log(content);