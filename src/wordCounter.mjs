export function countWords(content) {
    const matches = content.match(/\b[a-zA-Z]{4,}\b/g) || [];

    return matches.reduce((acc, word) => {
        const key = word.toLowerCase();
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
}
