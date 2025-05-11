// script.js
const songCover = document.getElementById('song-cover');
const songAudio = document.getElementById('song-audio');
const songInfo = document.getElementById('song-info');

songCover.addEventListener('click', () => {
  if (songAudio.paused) {
    songAudio.play();
  } else {
    songAudio.pause();
  }
});