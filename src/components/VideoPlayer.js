import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

export default function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-container">
      <h2>🎬 Видеоплеер</h2>
      {videoUrl ? (
        <ReactPlayer 
          url={videoUrl} 
          controls={true} 
          width="100%" 
          height="100%" 
        />
      ) : (
        <p>Выберите видео для просмотра</p>
      )}
    </div>
  );
}
