import { NewsStory } from '../types/index.js'

/**
 * *************** PUBLIC ***************
 */

export const getInitialStories = async () => {
	const INITIAL_STORIES = 20

	const intialIds = await getHackerNewsIds(0, INITIAL_STORIES)

	const stories = await getHackerNewsStories(intialIds)

	return stories
}

export const getMoreStories = async (start: number) => {
	const MORE_STORIES = 10

	const moreIds = await getHackerNewsIds(start, start + MORE_STORIES)

	const stories = await getHackerNewsStories(moreIds)

	return stories
}
/**
 * *************** PRIVATE ***************
 */
const baseUrl = 'https://hacker-news.firebaseio.com/v0'

// Takes a list of Hacker News story IDs and returns the stories
async function getHackerNewsStories(ids: string[]) {
	const YCstories = (await Promise.all(ids.map(getHackerNewsStory))).map(
		(story: NewsStory) => {
			const new_story: NewsStory = {
				id: story.id,
				title: story.title,
				url: story.url,
				score: story.score,
				time: story.time,
				source: 'YC',
			}
			return new_story
		}
	)

	return YCstories
}
async function getHackerNewsStory(id: string) {
	const url = `${baseUrl}/item/${id}.json?print=pretty`
	const response = await fetch(url)
	const jsonData = await response.json()
	return jsonData
}

async function getHackerNewsIds(start: number, end: number) {
	const url = `${baseUrl}/topstories.json?print=pretty`
	const response = await fetch(url)
	const ids = await response.json()
	return ids.slice(start, end)
}
