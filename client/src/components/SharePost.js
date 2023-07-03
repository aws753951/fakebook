import React from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SendIcon from "@mui/icons-material/Send";
import profile from "../assets/pandas.png";

const SharePost = () => {
  return (
    <div className="mt-2 flex justify-center ">
      <div className="shadow-md  overflow-hidden sharepost w-11/12 bg-white rounded-xl">
        <div className="sharepostWrapper p-3">
          <div className="sharepostTop flex items-center">
            <img
              className="w-10 h-10 object-cover rounded-full cursor-pointer"
              src={profile}
              alt=""
            />
            <input
              placeholder="誰誰誰，你在想甚麼?"
              className="sharepostInput ml-2 outline-none w-5/6 resize-none"
            />
          </div>
          <hr className="sharepostHr" />
          <div className="sharepostBottom mt-2 flex">
            <div className="sharepostOption w-1/2 flex justify-center cursor-pointer hover:bg-gray-200 p-1 rounded-lg transition ease-out duration-300">
              <AddPhotoAlternateOutlinedIcon className="sharepostIcon photoColor text-green-600" />
              <span className="sharepostOptionText">相片/影片</span>
            </div>
            <div className="w-1/2 flex justify-center cursor-pointer  hover:bg-gray-200 p-1 rounded-lg transition ease-out duration-300">
              <SendIcon className="text-blue-500" />
              <button className="sharepostButton ">發布貼文</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePost;
