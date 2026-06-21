import React from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
const VideoPlayer = ({ url, playing = false, onEnded }) => {
    useEffect(() => {
  console.log("Received URL:", url);
  console.log("Type:", typeof url);
}, [url]);
  return (
    <ReactPlayer
      src={url}
      width="100%"
      height="100%"
      playing={playing}
      controls
      muted
      onEnded={onEnded}
  
    />
  );
};

export default VideoPlayer;