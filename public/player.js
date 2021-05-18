var posSlider = document.getElementById("timeline");
var audio = document.getElementById("player");
let playButton = document.getElementById('play_button')
let pauseButton = document.getElementById('pause_button')

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