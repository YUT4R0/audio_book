const previous_button = document.getElementById("previous");
const next_button = document.getElementById("next");
const play_pause_button = document.getElementById("play-pause");
const chapter_audio = document.getElementById("audio-chapter");
const chapter = document.getElementById("chapter");

const chapters = 10;
let isPlaying = false;
let current_chapter = 1;

const playTrack = () => {
  chapter_audio.play();
  play_pause_button.classList.remove("bi-play-circle-fill");
  play_pause_button.classList.add("bi-pause-circle-fill");
};
const pauseTrack = () => {
  chapter_audio.pause()
  play_pause_button.classList.remove("bi-pause-circle-fill");
  play_pause_button.classList.add("bi-play-circle-fill");
};

function playOrPause() {
  if (isPlaying) {
    playTrack();
    isPlaying = !isPlaying;
  } else {
    pauseTrack();
    isPlaying = !isPlaying;
  }
};

const changeTrackName = () => chapter.innerText = `Chapter ${current_chapter}`

const nextChapter = () => {
  current_chapter === chapters ? current_chapter = 1 : current_chapter++;
  chapter_audio.src = `./books/dom-casmurro/${current_chapter}.mp3`;
  changeTrackName();
  playTrack();
  isPlaying = !isPlaying;
};
const previousChapter = () => {
  current_chapter === 1 ? current_chapter = chapters : current_chapter--;
  chapter_audio.src = `./books/dom-casmurro/${current_chapter}.mp3`;
  changeTrackName();
  playTrack();
  isPlaying = !isPlaying;
};

previous_button.addEventListener("click", previousChapter);
play_pause_button.addEventListener("click", playOrPause);
next_button.addEventListener("click", nextChapter);