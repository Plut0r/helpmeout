import React from "react";
import Header from "../components/video_repository/header";
import Details from "../components/video_repository/details";

function VideoDetails() {
  return (
    <div className="py-8">
      <div className="w-full h-[0.125rem] bg-gray-200"></div>
      <Header />
      <Details />
    </div>
  );
}

export default VideoDetails;
