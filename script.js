// Background audio control (loop from 0s to 30s is default loop here)

const audio = document.getElementById('bg-audio');

audio.addEventListener('timeupdate', () => {
  if (audio.currentTime > 30) {
    audio.currentTime = 0;
    audio.play();
  }
});
