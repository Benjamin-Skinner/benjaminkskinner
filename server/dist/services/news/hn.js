var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = "https://hacker-news.firebaseio.com/v0";
// Takes a list of Hacker News story IDs and returns the stories
export function getHackerNewsStories(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const YCstories = (yield Promise.all(ids.map(getHackerNewsStory))).map((story) => {
            const new_story = {
                id: story.id,
                title: story.title,
                url: story.url,
                score: story.score,
                time: story.time,
                source: "YC"
            };
            return new_story;
        });
        return YCstories;
    });
}
export function getHackerNewsStory(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${baseUrl}/item/${id}.json?print=pretty`;
        const response = yield fetch(url);
        const jsonData = yield response.json();
        return jsonData;
    });
}
// Loads all of the IDS that we need
export function getHackerNewsIds() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${baseUrl}/topstories.json?print=pretty`;
        const response = yield fetch(url);
        const ids = yield response.json();
        return ids;
    });
}
