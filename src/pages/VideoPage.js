import React, { useEffect } from "react";
import video from "./covid.mp4";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const VideoPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".video_text",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2 }
    );
  }, []);

  return (
    <div className="video_container">
      <Link to={"/home"}>
        <h2 className="video_text">Go to dashboard</h2>
      </Link>
      <video className="video" autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPage;
