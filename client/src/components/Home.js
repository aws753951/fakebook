import React from "react";
import CenterBar from "./CenterBar";
import RightBar from "./RightBar";
import LeftBar from "./LeftBar";

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 min-h-screen bg-gray-100">
      <LeftBar className="" />
      <CenterBar className="" />
      <RightBar className="" />
    </div>
  );
};

export default Home;
