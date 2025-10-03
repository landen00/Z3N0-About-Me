// Loop music between 0 and 30 seconds
const audio = document.getElementById('bg-audio');

audio.addEventListener('timeupdate', () => {
  if (audio.currentTime > 30) {
    audio.currentTime = 0;
    audio.play();
  }
});
