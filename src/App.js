import React, { useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import AlbumList from "./components/AlbumList";
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";

export default function App() {
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  return (
    <div>
      <div>
      <h1>🎵 Музыкальный плеер</h1>

      {/* Список альбомов */}
      <AlbumList onSelectAlbum={setSelectedAlbum} />

      {/* Аудиоплеер */}
      <AudioPlayer selectedAlbum={selectedAlbum} />
    </div>
      <div>
      <h1>🎵 Музыкальный и Видеоплеер</h1>

      {/* Список видео */}
      <VideoList onSelectVideo={setVideoUrl} />

      {/* Видеоплеер */}
      <VideoPlayer videoUrl={videoUrl} />
    </div>
    </div>
  );
}
