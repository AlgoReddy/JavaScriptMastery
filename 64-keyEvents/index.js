// key Events - Listen for specific  events to create interactive events :keydown , keyup
// keypress -- doesn't supported by all of the browsers -- > better keydown
document.addEventListener("keydown", (event) => console.log(event));
const myBox = document.getElementById("myBox");
const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  myBox.textContent = "😠";
  myBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", (event) => {
  myBox.textContent = "😁";
  myBox.style.backgroundColor = "lightgreen";
});
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
      default:
        break;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
