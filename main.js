const container = document.querySelector(".container");
const card = document.querySelector(".card");
const logo = document.querySelector(".logo");
const pika = document.querySelector(".pika");

//card will rotate on mouse move
container.addEventListener("mousemove", (rotate) => {
let x = (innerWidth / 2 - rotate.pageX) / 15;
let y = (innerHeight / 2 - rotate.pageY) / 15;
card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});

//card will transform on mouse over the card
container.addEventListener("mouseover", () => {
logo.style.transform = "translate3d(0, 0, 220px)";
pika.style.transform = "translate3d(0, 0, 120px)";
card.style.transition = "all 0.1s ease";
});

//card will return back to normal when mouse out
container.addEventListener("mouseout", () => {
card.style.transform = "rotateY(0deg) rotateX(0deg)";
card.style.transition = "all 0.5s ease";
logo.style.transform = "translate3d(0, 0, 0)";
pika.style.transform = "translate3d(0, 0, 0)";
});