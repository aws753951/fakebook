import React from "react";
import CakeIcon from "@mui/icons-material/Cake";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profile from "../assets/pandas.png";

const RightBar = () => {
  return (
    <div className="hidden col-span-1 sm:block">
      <div className="rightbarWrapper m-2 ">
        <div className="rightbarFriends">
          <div className="rightbarContact flex justify-between items-center">
            <span className="rightbarContactPerson font-bold opacity-60">
              聯絡人
            </span>
            <div className="rightbarContactIcon cursor-pointer rounded-full p-1 hover:bg-gray-300">
              <SearchIcon className="rightbarSmallIcon " />
            </div>
          </div>
          <ul className="rigthbarFriendsList">
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>{" "}
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>{" "}
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>{" "}
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>{" "}
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>{" "}
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>{" "}
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>{" "}
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>{" "}
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>{" "}
            <li className="rigthbarFriendsListItem flex items-center cursor-pointer hover:bg-gray-200 rounded-xl p-2 mt-1">
              <div className="rightbarFriendsContainer relative ">
                <img
                  src={profile}
                  alt=""
                  className="ProfileImg w-10 h-10 rounded-full"
                />
                <span className="onlineLight w-2 h-2  rounded-full absolute bottom-0.5 left-8 bg-red-500"></span>
              </div>
              <span className="rightbarFriendName ml-2">朱鴻埕</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
