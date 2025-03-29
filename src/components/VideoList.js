import React from "react";

const videoData = [
  { title: "Природа 🌿", url: "https://www.youtube.com/watch?v=4xDzrJKXOOY" },
  { title: "Космос 🚀", url: "https://www.youtube.com/watch?v=QH2-TGUlwu4" },
  { title: "Море 🌊", url: "https://www.youtube.com/watch?v=lM02vNMRRB0" }
];

export default function VideoList({ onSelectVideo }) {
  return (
    <div className="video-list">
      <h3>📜 Список видео</h3>
      <ul>
        {videoData.map((video, index) => (
          <li key={index} onClick={() => onSelectVideo(video.url)}>
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
