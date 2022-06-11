import React, { useState } from "react";
import Post from "../Post/Post";

const Main = (props) => {
    return (
    <main>
      <Post title="The title of the first post" />
      <Post title="The title of the second post" />
      <Post title="The title of the third post" />
      <Post />
    </main>
  );
};

export default Main;
