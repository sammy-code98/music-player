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

  audio.play()
}
function pauseSong() {
  containerMusic.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.pause()
}

function prevSong(){
  songIndex--
  if(songIndex < 0){
    songIndex =  songs.length - 1
  }
}
function nextSong(){

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
// prev btn
prevBtn.addEventListener('click', prevSong)
//  next btn
nextBtn.addEventListener('click', nextSong)



