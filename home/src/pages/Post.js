import React from 'react';
import { useParams } from 'react-router';
import posts from "../posts/posts"

const Post = () => {

    let { id } = useParams()

    let post = posts.find((post) => post.number == id)


    return ( 
        <>
            <h4 className="page-title">{post.title}</h4>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        </>
     );
}
 
export default Post;
