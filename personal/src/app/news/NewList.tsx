'use client'

import { NewsStory } from '@/types'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Story from './story'

interface Props {
	initialItems: NewsStory[]
}

const NewsList: React.FC<Props> = ({ initialItems }) => {
	const [items, setItems] = useState<NewsStory[]>(initialItems)

	const fetchMore = async () => {
		console.log('fetching more')
		const res: Response = await fetch(
			`/api/hn-stories?index=${items.length + 2}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		const data = await res.json()

		setItems([...items, ...data])
	}

	return (
		<InfiniteScroll
			dataLength={items.length}
			next={fetchMore}
			hasMore={items.length < 500}
			loader={<LoadingSpinner />}
		>
			{items.length === 0 && <p>No stories at the moment</p>}
			{items.map((story, index) => (
				<Story story={story} index={index} key={story.id} />
			))}
		</InfiniteScroll>
	)
}

export default NewsList

const LoadingSpinner: React.FC = () => {
	return (
		<div className="flex justify-center items-center mt-12">
			<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
		</div>
	)
}
