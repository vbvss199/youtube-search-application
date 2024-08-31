import React from "react";

import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import SideBar from "./SideBar";

const Body = () => {
  
  return (
    <div className="flex">
      <SideBar />
      <div className="">
        <ButtonList />
        <VideoContainer/>
      </div>
    </div>
  );
};

export default Body;
