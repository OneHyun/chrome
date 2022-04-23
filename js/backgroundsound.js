const sounds = ["MoonlightBlade_lobby.mp3"];
const audio = new Audio(`./resource/sounds/${sounds[0]}`);
const isPlayed = false;

function soundPlay() {
  audio.loop = true;
  audio.volume = 0.7;
  audio.play();
  console.log("playStarted");

  document.body.removeEventListener("click", soundPlay);
}
document.body.addEventListener("click", soundPlay);
