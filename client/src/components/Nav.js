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

const Nav = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <div>
          <FacebookIcon className="facebookIcon text-6xl" />
        </div>
        <div>
          <SearchIcon />
          <input placeholder="Search Fakebook" className="searchInput" />
        </div>
      </div>
      <div className="col-span-1">
        <div>
          <div>
            <HomeIcon />
          </div>
          <div>
            <OndemandVideoIcon />
          </div>
          <div>
            <RedeemIcon />
          </div>
          <div>
            <GroupsIcon />
          </div>
          <div>
            <SportsEsportsIcon />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div>
          <div>
            <AddIcon />
          </div>
          <div>
            <ChatIcon />
            <span>2</span>
          </div>
          <div>
            <NotificationsIcon />
            <span>2</span>
          </div>
          <div>
            <img></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
