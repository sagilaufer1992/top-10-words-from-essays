import {readLines} from './fileReader.mjs'
import { extract } from '@extractus/article-extractor'

const lines = await readLines('data/endg-urls');
const content = await extract(lines[0])
console.log(content.content);