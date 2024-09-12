import { NewsStory } from '../../types'
import NewsList from './NewList'
import Story from './story'
import { getInitialStories } from '@/services/hn'

export const revalidate = 180
// @ts-expect-error Async Server Component */

const News: React.FC<Props> = async () => {
	const stories = await getInitialStories()

	return (
		<div>
			<div className="flex flex-col mt-6">
				<NewsList initialItems={stories} />
			</div>
		</div>
	)
}

export default News
