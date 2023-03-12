import React from 'react';
import posts from "../posts/posts"
import { Link } from "react-router-dom"

const SomeThoughts = () => {
    return ( 
        <>
        <h4 className="page-title">Some Thoughts</h4>

        <ul className="post-list">
        {posts.map((post) => (
            <li className="post-list-item"><Link to={`/posts/${post.number}`}>{post.title}</Link></li>
        ))}
        </ul>
        </>

        
     );
}
 
export default SomeThoughts;