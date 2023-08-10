"use client";
import React, { useEffect, useRef, useState } from "react";
import "../app/styles/video-text.module.css";

const VideoText = ({ onLoaded }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleCanPlayThrough = () => {
      onLoaded();
    };

    if (videoRef.current) {
      const video = videoRef.current;
      video.addEventListener("canplaythrough", handleCanPlayThrough, false);

      // Cleanup function
      return () => {
        video.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough,
          false
        );
      };
    }
  }, [onLoaded]);

  return (
    <>
      <div className="video-container">
        <svg className="video-svg">
          <defs>
            <clipPath id="text-overlay">
              <text
                id="title"
                x="50%"
                y="50%"
                dy=".3em"
                className="svg-text text-9xl font-extrabold"
                textAnchor="middle"
              >
                Howie.AI
              </text>
            </clipPath>
          </defs>
          <text
            x="50%"
            y="50%"
            dy=".3em"
            className="svg-text text-9xl font-extrabold"
            textAnchor="middle"
          >
            Howie.AI
          </text>
        </svg>
        <video className="clipped-video" muted loop autoPlay>
          <source src="/teal-blue2.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default VideoText;
