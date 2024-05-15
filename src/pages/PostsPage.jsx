import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts?_limit=10"
            );
            console.log(response.data); // response.data
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.title.slice(0, 25)} ...
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default PostsPage;
