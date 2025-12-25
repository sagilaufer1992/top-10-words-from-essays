import { extract } from '@extractus/article-extractor'
import { load } from "cheerio";

function extractParagraphs(html) {
    const $ = load(html);

    return $("p")
        .map((_, el) => $(el).text().trim())
        .get()
        .filter(text => text.length > 0)
        .join(" ");
}
export async function readArticle(url) {
    console.log("url", url)
    const content = (await (extract(url))).content;
    return extractParagraphs(content);
}
