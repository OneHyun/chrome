const imgContainer = document.querySelector("#img-container");
const images = ["0.png","1.png" , "2.png", "3.png", 
                "4.png","5.png" , "6.png", "7.png",
                "8.png","9.png" , "10.png", "11.png",
                "12.png"];

const firstImage = new Image();
const secondImage = new Image();
const IMAGEHIDECLASS = "img-hide";

function getRandomImage(){
    const randImg = images[Math.floor(Math.random() * images.length)];
    return randImg;
}

function toggleClass(a, b, randImg){
    a.src = randImg;
    a.classList.remove(IMAGEHIDECLASS);
    b.classList.add(IMAGEHIDECLASS);
}

function paintImage(){
    const randImg = `./img/bg/${getRandomImage()}`;
    if(firstImage.classList.contains(IMAGEHIDECLASS))
        toggleClass(firstImage, secondImage, randImg);
    else
        toggleClass(secondImage, firstImage, randImg);
}

function setBGImages(){
    firstImage.setAttribute("draggable", false);
    secondImage.setAttribute("draggable", false);
    imgContainer.appendChild(firstImage);
    imgContainer.appendChild(secondImage);
}

setBGImages();
paintImage();
setInterval(paintImage, 60000);