"use client"

import { NewsStory } from "@/types"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import Story from "./story"

interface Props {
	initialItems: NewsStory[]
}

const NewsList: React.FC<Props> = ({ initialItems }) => {
	const [items, setItems] = useState<NewsStory[]>(initialItems)
    console.log(initialItems.length)

	const fetchMore = async () => {
        const res: Response = await fetch(`http://localhost:8000/news/load/${items.length}}`)
        const data = await res.json()
        setItems([...items, ...data])
    }

	return (
		<InfiniteScroll
			dataLength={initialItems.length}
			next={fetchMore}
			hasMore={true}
			loader={<h4>Loading...</h4>}
		>
			{items.length === 0 && <p>No stories at the moment</p>}
			{items.map((story, index) => (
				<Story story={story} index={index} key={story.id} />
			))}
		</InfiniteScroll>
	) 
}

export default NewsList


