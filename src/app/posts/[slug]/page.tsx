import React from 'react'
import { Post, PostData } from '../../../types'
import { getPostData, getPost } from './getPostData'
import { marked } from 'marked'
import { redirect } from 'next/navigation'

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	const posts = await getPostData()

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

const PostPage: React.FC<Props> = async ({ params }) => {
	const { slug } = await params
	const post: Post = await getPost(slug)

	if (post.data.redirect) {
		return redirect(post.data.redirect)
	}

	const html = marked(post.content)

	return (
		<div>
			<ArticleHeading post={post} />
			<div
				className="px-10 prose dark:prose-invert max-w-none"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
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
