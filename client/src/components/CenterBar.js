import React from "react";
import SharePost from "./SharePost";
import Post from "./Post";

const CenterBar = () => {
  return (
    <div className="col-span-2 ">
      <SharePost />
      <Post />
    </div>
  );
};

export default CenterBar;
