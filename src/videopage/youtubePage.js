import React from "react";
import ReactPlayer from "react-player";
import BlackNavigationBar from "./BlackNavigationBar";
import VideoPageTabs from "./videoTabs";
import classes from "./youtubePage.module.css";

import sidebar from "./sidebar.png";
import blackRectangle from "./blackRectangle.png"

function youtubePage() {
  return (
    <div>
      <BlackNavigationBar />
      <img
        src={blackRectangle}
        alt="black rectangle"
        className={classes.blackbox}
      />
      <div className={classes.videobox}>
        <ReactPlayer
          className={classes.video}
          url="https://youtu.be/Dorf8i6lCuk"
          controls={true}
        />
      </div>
      <div className={classes.tabsBox}>
        <VideoPageTabs />
      </div>
      <img
        src={sidebar}
        alt="placeholder sidebar"
        className={classes.sidebar}
      />
    </div>
  );
}

export default youtubePage;
