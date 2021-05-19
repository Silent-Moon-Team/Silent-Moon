var posSlider = document.getElementById("timeline");
var audio = document.getElementById("player");
let playButton = document.getElementById('play_button')
let pauseButton = document.getElementById('pause_button')
let iconHeart = document.getElementById('icon_hearth')
let iconDown = document.getElementById('icon_download')

audio.addEventListener("loadedmetadata", setSliderMax);

function setSliderMax() {
    posSlider.setAttribute('max', audio.duration);
}

audio.addEventListener("timeupdate", setSliderVal);

function setSliderVal() {
    posSlider.value = audio.currentTime;
}

playButton.addEventListener('click', () => {
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
})

pauseButton.addEventListener('click', () => {
    pauseButton.style.display = 'none';
    playButton.style.display = 'inline-block';
})

iconHeart.addEventListener('click', () => {
    iconHeart.style.color = 'rgba(226,143,131, 1)';
})

iconDown.addEventListener('click', () => {
    iconDown.style.color = 'rgba(226,143,131, 1)';
})