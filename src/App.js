import React, { useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import AlbumList from "./components/AlbumList";
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";
import './App.css';


export default function App() {
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  return (
    <div>
      <div>
      <h1 className="eagle-lake-regular">Music player</h1>

      {/* Список альбомов */}
      <AlbumList onSelectAlbum={setSelectedAlbum} />

      {/* Аудиоплеер */}
      <AudioPlayer selectedAlbum={selectedAlbum} />
    </div>
      <div>
      <h1 className="eagle-lake-regular">Video player </h1>

      {/* Список видео */}
      <VideoList onSelectVideo={setVideoUrl} />

      {/* Видеоплеер */}
      <VideoPlayer videoUrl={videoUrl} />
    </div>
    </div>
  );
}
