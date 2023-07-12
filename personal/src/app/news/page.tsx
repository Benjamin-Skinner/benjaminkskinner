import { NewsStory } from '../../types'
import NewsList from './NewList'
import Story from './story'
import { getInitialStories } from '@/services/hn'

// @ts-expect-error Async Server Component */

const News: React.FC<Promise<Element>> = async () => {
	const stories = await getInitialStories()

	return (
		<div>
			<h1>My News Feed</h1>
			<div className="flex flex-col mt-6">
				<NewsList initialItems={stories} />
			</div>
		</div>
	)
}

export default News
