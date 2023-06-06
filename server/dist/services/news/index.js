var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getHackerNewsStories, getHackerNewsIds } from './hn.js';
import { sortStories } from './sort.js';
const news_data = {
    stories: [],
    lastFetched: new Date().getTime(),
    hackerNewsIds: []
};
const THREE_HOURS = 3 * 60 * 60 * 1000;
export function getInitialStories() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("num IDS: " + news_data.hackerNewsIds.length);
        // Have we loaded IDS yet?
        if (news_data.hackerNewsIds.length === 0) {
            console.log("No IDS loaded");
            yield loadIds();
            yield fetchInitialStories();
            return news_data.stories;
        }
        else {
            // Check if we need to update stories
            if (storiesExpired()) {
                yield loadIds();
                yield fetchInitialStories();
                return news_data.stories;
            }
            else {
                return news_data.stories;
            }
        }
    });
}
// Checks if we need to update stories
function storiesExpired() {
    // Check if stories were fetched more than 3 hours ago
    if (news_data.lastFetched < new Date().getTime() - THREE_HOURS) {
        console.log("Stories expired");
        return true;
    }
    console.log("Stories not expired");
    return false;
}
// Loads all of the IDS that we need
function loadIds() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Loading IDs");
        const ids = yield getHackerNewsIds();
        ids.forEach((id) => {
            news_data.hackerNewsIds.push(id);
        });
    });
}
const INITIAL_NUM_TO_LOAD = 25;
// Fetches the first 5 stories
function fetchInitialStories() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Fetching initial stories");
        const initial_ids = news_data.hackerNewsIds.slice(0, INITIAL_NUM_TO_LOAD);
        const loaded_stories = yield getHackerNewsStories(initial_ids);
        const sorted_stories = loaded_stories.sort(sortStories);
        sorted_stories.forEach((story) => {
            addStory(story);
        });
    });
}
// Adds a single story to the news_data.stories array
function addStory(story) {
    news_data.stories.push(story);
}
const NUM_TO_LOAD = 10;
export function loadMoreStories(index) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Loading more stories");
        const ids = news_data.hackerNewsIds.slice(index, index + NUM_TO_LOAD);
        console.log(ids);
        const loaded_stories = yield getHackerNewsStories(ids);
        const sorted_stories = loaded_stories.sort(sortStories);
        sorted_stories.forEach((story) => {
            addStory(story);
        });
        return sorted_stories;
    });
}
