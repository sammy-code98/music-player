const containerMusic = document.querySelector(".container");

const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");

const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector(".title");
const coverImg = document.querySelector(".img-animate");

// titles of songs

const songs = ["Empty", "Glorious", "Many Battles", "Access Bank"];

// track songs

let songIndex = 3;
// load song into DOM

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `songs/${song}.mp3`;
  coverImg.src = `images/${song}.jpeg`
}
