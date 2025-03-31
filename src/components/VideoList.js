import React from "react";

const videoData = [
  { title: "Вера в себя", url: "https://www.youtube.com/shorts/2Fld8ltNPj0?feature=share" },
  { title: "Волна", url: "https://www.youtube.com/shorts/DapKYyopePc?feature=share" },
  { title: "Отражение", url: "https://www.youtube.com/shorts/Xb1mewJjaU4?feature=share" },
  { title: "Маяк", url: "https://www.youtube.com/shorts/FovcS4UF0FQ?feature=share" },
  { title: "Чит-код", url: "https://www.youtube.com/shorts/-StEvdxKzII?feature=share" },
  { title: "Свет", url: "https://www.youtube.com/shorts/8-cTHnqV97o?feature=share" },
  { title: "Мозг-Радио", url: "https://www.youtube.com/shorts/bW_HTAubatg?feature=share" },
  { title: "Отпускание обид", url: "https://www.youtube.com/shorts/0dbeEtPZnjw?feature=share" },
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
