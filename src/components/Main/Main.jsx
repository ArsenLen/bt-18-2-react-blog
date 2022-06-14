import React, { useState } from "react";
import Post from "../Post/Post";

const Main = (props) => {
    // const posts = [
    //   {
    //     id : 1,
    //     title : "The first title",
    //     descr : "The first descr"
    //   },
    //   {
    //     id : 2,
    //     title : "The second title",
    //     descr : "The second descr"
    //   },
    //   {
    //     id : 3,
    //     title : "The third title",
    //     descr : "The third descr"
    //   }
    // ]
    let post1 = {
      id : 1,
      title : "The first title",
      descr : "The first descr"
    }
    let post2 = {
      id : 2,
      title : "The second title",
      descr : "The second descr",
    }
    let post3 = {
      id : 3,
      title : "The third title",
      descr : "The third descr",
    }
    return (
    <main>
      <Post title={post1.title} descr={post1.descr} />
      <Post title={post2.title} descr={post2.descr} />
      <Post title={post3.title} descr={post3.descr} />

      {/* 
        posts.map(post => {
          return <Post title={post.title} descr={post.descr} />
        })
      */}
    </main>
  );
};

export default Main;
