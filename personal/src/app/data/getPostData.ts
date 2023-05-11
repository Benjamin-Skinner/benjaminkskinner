import fs from 'fs'
import * as matter from 'gray-matter';
import { PostData, Post } from '../../types'



export async function getPostData() {

    const postsData: PostData[] = []

    const postsNames = fs.readdirSync('src/content/posts/')

    postsNames.forEach((post) => {
        const file = fs.readFileSync(`src/content/posts/${post}`, 'utf-8')
        const postData: Post = matter(file)
        postsData.push(postData.data)
    })

    return postsData.sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getPost(slug: string): Promise<Post> {
    const file = fs.readFileSync(`src/content/posts/${slug}.md`, 'utf-8')
    const postData: Post = matter(file)

    return postData
}