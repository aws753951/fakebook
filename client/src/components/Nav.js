import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profile from "../assets/pandas.png";

const Nav = () => {
  return (
    <div className="navbarContainer shadow-sm grid grid-cols-2 items-center sticky z-10 bg-white top-0 border-b-2 h-16 w-full">
      <div className="navbarLeft flex items-center col-span-1">
        <div className="navbarIconItem0 m-2 ">
          <FacebookOutlinedIcon className="facebookIcon text-5xl text-sky-700 cursor-pointer " />
        </div>
        <div className="searchBar flex items-center w-2/5 h-10 rounded-full bg-slate-200 overflow-hidden">
          <SearchIcon className="searchIcon pl-1 text-3xl" />
          <input
            placeholder="搜尋..."
            className="searchInput border-none outline-none w-3/4  bg-slate-200 text-base "
          />
        </div>
        <div class="px-4 cursor-pointer sm:hidden" id="burger">
          <svg
            class="w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div className="navbarRight col-span-1 ">
        <div className="navbarIcons2 flex items-center justify-end ">
          <div className="navbarIconItem2  rightTopIcon">
            <ChatIcon className="navbarImg" />
            <span className="alertBadge">2</span>
          </div>
          <div className="navbarIconItem2  rightTopIcon">
            <NotificationsIcon className="navbarImg" />
            <span className="alertBadge">1</span>
          </div>
          <div className="navbarIconItem2  rightTopIcon overflow-hidden mr-5">
            <img
              src={profile}
              alt=""
              className="navbarImg  w-12 h-12 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
