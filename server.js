const express = require("express");
const path = require("path");

const app = express();

// Раздаем статические файлы из папки "public"
app.use(express.static(path.join(__dirname, "public")));

// Настраиваем раздачу файлов из папки "music" с правильным MIME-типом
app.use("/music", express.static(path.join(__dirname, "music"), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".mp3")) {
      res.setHeader("Content-Type", "audio/mpeg");
    } else if (filePath.endsWith(".ogg")) {
      res.setHeader("Content-Type", "audio/ogg");
    }
  }
}));

// Запускаем сервер на порту 3001
const PORT = 3001;
app.listen(PORT, () => console.log(`🎵 Сервер запущен на порту ${PORT}`));
