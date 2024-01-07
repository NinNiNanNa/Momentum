const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

document.body.style.background = `url("img/${chosenImage}") no-repeat 50% fixed`;
document.body.style.backgroundSize = "cover";
document.body.style.width = `${winWidth}px`;
document.body.style.height = `${winHeight}px`;