import { NewsStory } from '../../types/index.js'
import { getHackerNewsStories, getHackerNewsIds, getHackerNewsStory } from './hn.js'
import { sortStories } from './sort.js'

type NewsData = {
    stories: NewsStory[],
    hackerNewsIds: string[],
    lastFetched: number
}

const news_data: NewsData  = {
    stories: [],
    lastFetched: new Date().getTime(),
    hackerNewsIds: []
}


const THREE_HOURS = 3 * 60 * 60 * 1000


export async function getInitialStories() {

    console.log("num IDS: " + news_data.hackerNewsIds.length)

    // Have we loaded IDS yet?
    if (news_data.hackerNewsIds.length === 0) {
        console.log("No IDS loaded")
        await loadIds()
        await fetchInitialStories()
        return news_data.stories

    } else {
        // Check if we need to update stories
        if (storiesExpired()) {
            await loadIds()
            await fetchInitialStories()
            return news_data.stories
        } else {
            return news_data.stories
        }
    }


}

// Checks if we need to update stories
function storiesExpired(): boolean {
    // Check if stories were fetched more than 3 hours ago
    if (news_data.lastFetched < new Date().getTime() - THREE_HOURS) {
        console.log("Stories expired")
        return true
    }
    console.log("Stories not expired")
    return false
}

// Loads all of the IDS that we need
async function loadIds() {
    console.log("Loading IDs")
    const ids = await getHackerNewsIds()
    ids.forEach((id: string) => {
        news_data.hackerNewsIds.push(id)
    })
}

const INITIAL_NUM_TO_LOAD = 25
// Fetches the first 5 stories
async function fetchInitialStories() {
    console.log("Fetching initial stories")

    const initial_ids = news_data.hackerNewsIds.slice(0, INITIAL_NUM_TO_LOAD)
    const loaded_stories = await getHackerNewsStories(initial_ids) 
    const sorted_stories = loaded_stories.sort(sortStories)

    sorted_stories.forEach((story: NewsStory) => {
        addStory(story)
    })
}

// Adds a single story to the news_data.stories array
function addStory(story: NewsStory) {
    news_data.stories.push(story)
}

const NUM_TO_LOAD = 10
export async function loadMoreStories(index: number) {
    console.log("Loading more stories")
    const ids = news_data.hackerNewsIds.slice(index, index + NUM_TO_LOAD)
    console.log(ids)
    const loaded_stories = await getHackerNewsStories(ids)

    const sorted_stories = loaded_stories.sort(sortStories)

    sorted_stories.forEach((story: NewsStory) => {
        addStory(story)
    })

    return sorted_stories
}