import { useState, useEffect } from "react";
import axios from "axios";

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

  return <div>
    <ul>
        {posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  </div>;
};
export default PostsPage;
