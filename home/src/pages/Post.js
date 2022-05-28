import React from 'react';
import { useParams } from 'react-router';
import posts from "../posts/posts"

const Post = () => {

    let { id } = useParams()

    let content = posts[id - 1].content
    let title = posts[id - 1].title

    return ( 
        <>
            <h4 className="page-title">{title}</h4>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </>
     );
}
 
export default Post;