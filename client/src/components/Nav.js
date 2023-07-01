import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import RedeemIcon from "@mui/icons-material/Redeem";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AddIcon from "@mui/icons-material/Add";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profile from "../assets/pandas.png";

const Nav = () => {
  return (
    <div className="navbarContainer shadow-sm grid grid-cols-2 lg:grid-cols-3 items-center sticky top-0 border-b-2 h-16 w-full">
      <div className="navbarLeft flex items-center col-span-1">
        <div className="navbarIconItem0 m-2 ">
          <FacebookIcon className="facebookIcon text-5xl text-sky-700 cursor-pointer " />
        </div>
        <div className="searchBar flex items-center w-2/5 h-10 rounded-full bg-slate-200 overflow-hidden">
          <SearchIcon className="searchIcon pl-1 text-3xl" />
          <input
            placeholder="搜尋..."
            className="searchInput border-none outline-none w-3/4  bg-slate-200 text-base "
          />
        </div>
        <div class="px-4 cursor-pointer lg:hidden" id="burger">
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
      <div className="navbarCenter hidden lg:flex   lg:col-span-1 ">
        <div className="navbarIcons  justify-around items-center lg:flex  ">
          <div className="navbarIconItem topIcon ">
            <HomeIcon className="navbarImg  " />
          </div>
          <div className="navbarIconItem topIcon">
            <OndemandVideoIcon className="navbarImg " />
          </div>
          <div className="navbarIconItem topIcon ">
            <RedeemIcon className="navbarImg " />
          </div>
          <div className="navbarIconItem topIcon">
            <GroupsIcon className="" />
          </div>
          <div className="navbarIconItem topIcon">
            <SportsEsportsIcon className="" />
          </div>
        </div>
      </div>
      <div className="navbarRight col-span-1 ">
        <div className="navbarIcons2 flex items-center justify-end ">
          <div className="navbarIconItem2  rightTopIcon">
            <AddIcon className="navbarImg text-xl" />
          </div>
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
