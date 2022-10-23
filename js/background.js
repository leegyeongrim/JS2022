const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

//bgImage.style.display = `flex-direction`;
bgImage.style.position = `fixed`;
bgImage.style.zIndex = `-1`;

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

/* const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const backgroundGradient = document.body.style;
const button = document.querySelector("button");

function changeColor() {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  backgroundGradient.background = `linear-gradient(to left, ${firstColor},${secondColor})`;
}

console.dir(backgroundGradient);
button.addEventListener("click", changeColor);

*/
