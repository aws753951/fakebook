import React from "react";

const NewPost = () => {
  return (
    <div className="newpost">
      <div className="newpostWrapper">
        <div className="newpostTop">
          <img alt="" className="newpostProfileImg" />
          <input placeholder="誰誰誰，你在想甚麼?" className="newpostInput" />
        </div>
        <hr className="newpostHr" />
        <div className="newpostBottom"></div>
      </div>
    </div>
  );
};

export default NewPost;
