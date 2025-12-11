document.addEventListener('DOMContentLoaded', () => {
  const audio = document.createElement('audio');
  audio.id = 'background-music';
  audio.autoplay = true;
  audio.loop = true;
  audio.muted = false;
  audio.volume = 0.3;
  
  const source = document.createElement('source');
  source.src = 'background.mp3';
  source.type = 'audio/mpeg';
  
  audio.appendChild(source);
  document.body.appendChild(audio);

  document.addEventListener('click', () => {
    audio.muted = false;
    audio.play();
  }, { once: true });

  document.addEventListener('keydown', () => {
    audio.muted = false;
    audio.play();
  }, { once: true });

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
});
