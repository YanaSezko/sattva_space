import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { albumsData } from "../data/musicData";
import "./AudioPlayer.css";

export default function CustomAudioPlayer({ selectedAlbum }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const tracks = albumsData[selectedAlbum] || [];

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    );
  };

  const handleSelectTrack = (index) => {
    setCurrentTrackIndex(index);
  };

  return (
    <div className="player-container">
      <h2>{selectedAlbum ? `Альбом: ${selectedAlbum}` : "Выберите альбом"}</h2>

      {tracks.length > 0 ? (
        <>
          <h3>Сейчас играет: {tracks[currentTrackIndex].title}</h3>

          <AudioPlayer
            src={tracks[currentTrackIndex].src}
            onEnded={handleNext}
            showSkipControls={true}
            onClickNext={handleNext}
            onClickPrevious={handlePrevious}
            autoPlay
          />

          <ul className="track-list">
            {tracks.map((track, index) => (
              <li
                key={index}
                className={index === currentTrackIndex ? "active" : ""}
                onClick={() => handleSelectTrack(index)}
              >
                {track.title}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Нет песен для воспроизведения.</p>
      )}
    </div>
  );
}
