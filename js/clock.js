const clock = document.querySelector("h2.clock");

function watchClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

watchClock();
setInterval(watchClock, 1000);
