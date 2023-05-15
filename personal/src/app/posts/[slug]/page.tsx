import React from 'react'
import { Post, PostData } from '../../../types'
import { getPostData, getPost } from '../../data/getPostData';
import ReactMarkdown from 'react-markdown';

interface Props {
    params: PostData
}

export async function generateStaticParams() {
    const posts = await getPostData()
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }

{/* @ts-expect-error Async Server Component */}
const PostPage: React.FC<Props> = async ({
    params
}) => {

    const post: Post = await getPost(params.slug)

    return (
        
        <div>
            <h1>{post.data.title}</h1>
            <div className="px-10">
            <ReactMarkdown
                components={{
                     p: (props) => <p className='blog-text' {...props} />,
                     ol: (props) => <ol className='blog-ol' {...props} />,
                     ul: (props) => <ul className='blog-ul' {...props} />,
                     hr: (props) => <div className='blog-hr' {...props} /> 
                }}
            >
                {post.content}
            </ReactMarkdown>
                </div>
        </div>
    )
}

export default PostPage