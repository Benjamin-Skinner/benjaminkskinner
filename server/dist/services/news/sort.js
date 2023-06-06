import fs from 'fs';
const path = "/Users/Benskinner/Code/benjaminkskinner/server/services/news/keywords";
let keywords = [];
fs.readFile(`${path}/keywords.txt`, 'utf8', (err, data) => {
    keywords = data.split('\n');
});
let super_keywords = [];
fs.readFile(`${path}/super-keywords.txt`, 'utf8', (err, data) => {
    super_keywords = data.split('\n');
});
let bad_keywords = [];
fs.readFile(`${path}/bad-keywords.txt`, 'utf8', (err, data) => {
    bad_keywords = data.split('\n');
});
export function sortStories(a, b) {
    const aVal = getValue(a);
    const bVal = getValue(b);
    if (aVal > bVal) {
        return -1;
    }
    if (aVal < bVal) {
        return 1;
    }
    return 0;
}
function getValue(story) {
    let val = story.score / 10;
    keywords.forEach(keyword => {
        if (story.title.includes(keyword)) {
            val += 1000;
        }
    });
    super_keywords.forEach(super_keyword => {
        if (story.title.includes(super_keyword)) {
            val += 5000;
        }
    });
    bad_keywords.forEach(bad_keyword => {
        if (story.title.includes(bad_keyword)) {
            val -= 1000;
        }
    });
    return val;
}
