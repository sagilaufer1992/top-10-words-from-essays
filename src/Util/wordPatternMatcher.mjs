export function findMatches(content) {
    return content.match(/\b[a-zA-Z]{4,}\b/g) || [];
}