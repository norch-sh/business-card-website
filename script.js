const video = document.getElementById('bgVideo')
const music = document.getElementById('bgMusic')
const start = document.getElementById('startScreen')

start.addEventListener('click', function() {
music.volume = 0.2
music.play()
video.play()
start.style.opacity = '0';
setTimeout(function() {
    start.style.display = 'none'; 
  }, 1000);
});