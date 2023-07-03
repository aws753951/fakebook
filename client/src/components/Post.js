import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import picture from "../assets/example.jpg";
import like from "../assets/like.png";
import love from "../assets/heart.png";
import profile from "../assets/pandas.png";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";

const Post = () => {
  return (
    <div className="post mt-2 flex justify-center ">
      <div className="overflow-hidden sharepost w-11/12 bg-white rounded-xl ">
        <div className="postWrapper p-3">
          <div className="postTop flex justify-between items-center">
            <div className="postTopLeft flex items-center">
              <img
                className="w-10 h-10 object-cover rounded-full cursor-pointer"
                src={profile}
                alt=""
              />
              <div className="profileInfo ">
                <span className="postUsername font-bold cursor-pointer">
                  朱鴻埕
                </span>
                <span className="postDate flex items-center">
                  <p className="opacity-40 text-xs">5 分鐘前．</p>
                  <PublicOutlinedIcon className="postDateIcon w-3 h-3 opacity-40" />
                </span>
              </div>
            </div>
            <div className="postTopRight">
              <ClearIcon className="cursor-pointer w-7 h-7 hover:bg-gray-200 rounded-full p-1" />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              aliquam similique, ullam, illo laudantium repellendus reiciendis
              corrupti, ducimus voluptatem incidunt consectetur quis.
              Consequatur molestiae ducimus ipsam consectetur. Libero dolores
              quo sint dolorem quae doloribus veritatis dicta corporis amet
              animi? Accusantium at maxime non neque vel magnam. Nesciunt,
              consequuntur similique. Enim!
            </span>
            <img className="cursor-pointer" src={picture} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomInfos flex justify-between items-center">
              <div className="postBottomInfosLeft flex items-center">
                <img
                  src={like}
                  className="likeIcon cursor-pointer w-4 h-4"
                  alt=""
                />
                <img
                  src={love}
                  className="likeIcon cursor-pointer w-4 h-4"
                  alt=""
                />
                <span className="likeCount cursor-pointer">320</span>
              </div>
              <div className="postBottomInfosRight">
                <span className="messageCount text-xs cursor-pointer mr-1">
                  26則留言
                </span>
                <span className="shareCount text-xs cursor-pointer">
                  17則分享
                </span>
              </div>
            </div>
            <hr className="postBottomHr" />
            <div className="postBottomComments flex justify-around items-center mt-2">
              <div className="postBottomComment px-[8%] cursor-pointer rounded-md hover:bg-gray-200 transition ease-out duration-300">
                <ThumbUpOffAltIcon className="postBottomCommentIcon" />
                <span className="postBottomCommentAct">讚</span>
              </div>
              <div className="postBottomComment px-[8%] cursor-pointer rounded-md hover:bg-gray-200 transition ease-out duration-300">
                <ChatBubbleOutlineIcon className="postBottomCommentIcon" />
                <span className="postBottomCommentAct">留言</span>
              </div>
              <div className="postBottomComment px-[8%]  cursor-pointer rounded-md hover:bg-gray-200 transition ease-out duration-300">
                <ReplyIcon className="postBottomCommentIcon" />
                <span className="postBottomCommentAct">分享</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
