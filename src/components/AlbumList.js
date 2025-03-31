import React from "react";
import { albumsData } from "../data/musicData";

export default function AlbumList({ onSelectAlbum }) {
  return (
    <div className="album-list">
      <h3>Выберите альбом:</h3>
      <ul>
        {Object.keys(albumsData).map((album, index) => (
          <li key={index} onClick={() => onSelectAlbum(album)}>
            {album}
          </li>
        ))}
      </ul>
    </div>
  );
}
