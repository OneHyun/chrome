const imgContainer = document.querySelector("#bgimg-container");
const images = ["0.png", "1.png", "2.png", "3.png"];

const firstImage = new Image();
const secondImage = new Image();
const IMAGEHIDECLASS = "img-hide";
const IMAGEBGCLASS = "bg_img";

let lastImg;
function getRandomImage() {
  let randImg = images[Math.floor(Math.random() * images.length)];
  while (randImg === lastImg) {
    randImg = images[Math.floor(Math.random() * images.length)];
  }
  lastImg = randImg;
  return randImg;
}

function toggleClass(a, b, randImg) {
  a.src = randImg;
  a.classList.remove(IMAGEHIDECLASS);
  b.classList.add(IMAGEHIDECLASS);
}

function paintImage() {
  const randImg = `./resource/img/bg/${getRandomImage()}`;
  if (firstImage.classList.contains(IMAGEHIDECLASS))
    toggleClass(firstImage, secondImage, randImg);
  else toggleClass(secondImage, firstImage, randImg);
}

function setBGImages() {
  firstImage.classList.add(IMAGEBGCLASS);
  secondImage.classList.add(IMAGEBGCLASS);
  firstImage.setAttribute("draggable", false);
  secondImage.setAttribute("draggable", false);
  imgContainer.appendChild(firstImage);
  imgContainer.appendChild(secondImage);
}

setBGImages();
paintImage();
setInterval(paintImage, 60000);
