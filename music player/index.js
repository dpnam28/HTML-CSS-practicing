const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-play")) {
    ctrlIcon.classList.remove("fa-play");
    song.play();
    ctrlIcon.classList.add("fa-pause");
} else {
    ctrlIcon.classList.remove("fa-pause");
    song.pause();
    ctrlIcon.classList.add("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  });
}

progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
};

ctrlIcon.onclick = () => {
  playPause();
};
