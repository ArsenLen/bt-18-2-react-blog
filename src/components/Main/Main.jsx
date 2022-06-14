import React, { useState } from "react";
import Post from "../Post/Post";

const Main = (props) => {
    let title1 = "The title of the first post"
    let title2 = "The tittle of the second post"
    let title3 = "The title of the third post"
    return (
    <main>
      <Post title={title1} descr="my descr" />
      <Post title={title2} />
      <Post title={title3} />
    </main>
  );
};

export default Main;
