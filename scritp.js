const containerMusic = document.querySelector(".container");

const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");

const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const titleSong = document.querySelector(".title");
const coverImg = document.querySelector(".img-animate");

// titles of songs

const songs = ["Access Bank", "Empty", "Many Battles", "Glorious"];

// track songs

let songIndex = 1;
// load song into DOM

loadSong(songs[songIndex]);

function loadSong(song) {
  titleSong.innerText = song;
  audio.src = `songs/${song}.mp3`;
  coverImg.src = ` images/${song}.jpeg`;
}

// playsong
function playSong() {
  containerMusic.classList.add("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  // audio

  audio.play();
}
function pauseSong() {
  containerMusic.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.pause();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function updated(e) {
  // console.log(e.srcElement.currentTime);
  // console.log(e.srcElement.duration);

  // DESTRUCTURE
  const { duration, currentTime } = e.srcElement;
  const progPercent = (currentTime/duration) * 100
  progress.style.width = `${progPercent}%`
}
function setProgress(e){
  const width  = this.clientWidth
  // console.log(width);
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration
}
// events
playBtn.addEventListener("click", () => {
  const isPlaying = containerMusic.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

audio.addEventListener("timeupdate", updated);
// prev btn
prevBtn.addEventListener("click", prevSong);
//  next btn
nextBtn.addEventListener("click", nextSong);

// progress control
progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)