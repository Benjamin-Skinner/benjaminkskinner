import { NewsStory } from "../../types/index.js";

const baseUrl = "https://hacker-news.firebaseio.com/v0"

// Takes a list of Hacker News story IDs and returns the stories
export async function getHackerNewsStories(ids: string[]) {

    const YCstories = (await Promise.all(ids.map(getHackerNewsStory))).map((story: NewsStory) => {
        const new_story: NewsStory = {
            id: story.id,
            title: story.title,
            url: story.url,
            score: story.score,
            time: story.time,
            source: "YC"
        }
        return new_story
    })

    return YCstories

}

export async function getHackerNewsStory(id: string) {
    const url = `${baseUrl}/item/${id}.json?print=pretty`
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}

// Loads all of the IDS that we need
export async function getHackerNewsIds() {

    const url = `${baseUrl}/topstories.json?print=pretty`
    const response = await fetch(url);
    const ids = await response.json();
    return ids;
}