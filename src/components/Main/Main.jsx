import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import axios from 'axios'

const fetchPosts = () => {
  return axios.get("http://localhost:3004/posts")
}
 
const Main = (props) => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetchPosts().then(res => setPosts(res.data))
  }, [])    
 
    return (
    <main>
      { 
        posts.map(post => <Post key={post.id} title={post.title} descr={post.descr} id={post.id} />)
      }
    </main>
  );
};

export default Main;
