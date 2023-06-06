
import { NewsStory } from '../../types'
import NewsList from './NewList';
import Story from './story';

{/* @ts-expect-error Async Server Component */}
const News: React.FC<Promise<Element>> = async () => {

    const res: Response = await fetch('http://localhost:8000/news/initial')
    const initialData = await res.json()


    return (
		<div>
			<h1>My News Feed</h1>
			<div className="flex flex-col mt-6">
                <NewsList 
                    initialItems={initialData} 
                />
			</div>
		</div>
	)
}

export default News