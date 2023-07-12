import Link from 'next/link'
import { PostData } from '../../types'
import { getPostData } from '../posts/[slug]/getPostData'

// @ts-expect-error Async Server Component
const SomeThoughts: React.FC<Props> = async ({}) => {
	const posts: PostData[] = await getPostData()

	return (
		<div>
			<h1>Some Thoughts</h1>
			<div className="flex flex-col mt-6">
				{posts.map((post) => (
					<Link
						href={`/posts/${post.slug}`}
						className="link text-lg my-2 ml-8 xl:ml-0"
						key={post.slug}
					>
						{post.title}
					</Link>
				))}
			</div>
		</div>
	)
}

export default SomeThoughts
