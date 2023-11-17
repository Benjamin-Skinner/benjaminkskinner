import React from 'react'
import { Post, PostData } from '../../../types'
import { getPostData, getPost } from './getPostData'
import ReactMarkdown from 'react-markdown'
import { redirect } from 'next/navigation'

interface Props {
	params: PostData
}

export async function generateStaticParams() {
	const posts = await getPostData()

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

// @ts-expect-error Async Server Component
const PostPage: React.FC<Props> = async ({ params }) => {
	const post: Post = await getPost(params.slug)

	if (post.data.redirect) {
		return redirect(post.data.redirect)
	}

	return (
		<div>
			<ArticleHeading post={post} />
			<div className="px-10">
				<ReactMarkdown
					components={{
						p: (props) => <p className="blog-text" {...props} />,
						ol: (props) => <ol className="blog-ol" {...props} />,
						ul: (props) => <ul className="blog-ul" {...props} />,
						hr: (props) => <div className="blog-hr" {...props} />,
					}}
				>
					{post.content}
				</ReactMarkdown>
			</div>
		</div>
	)
}

export default PostPage

interface ArticleHeadingProps {
	post: Post
}

const ArticleHeading: React.FC<ArticleHeadingProps> = ({ post }) => {
	const formattedDate = new Date(
		parseInt(post.data.date.split('-')[0]),
		parseInt(post.data.date.split('-')[1]) - 1
	).toLocaleString('en-US', { year: 'numeric', month: 'long' })

	return (
		<div className="p-10 border-b-2 border-slate-200 mb-12 mx-8">
			<h2 className="pb-4">{post.data.title}</h2>
			<p className="text-gray-400 dark:text-gray-400 text-sm italic">
				{formattedDate}
			</p>
		</div>
	)
}
