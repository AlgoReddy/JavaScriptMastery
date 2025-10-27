// EventListeners  = Listen for specific events to create the interactive webpages
// events : clicks ,     mouseover , mouse-out
//          .addEventListener(event , callback, anonymous function , arrow function );
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "ouch";
//   console.log(event)
// }
myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "ouch 🤕";
  console.log(event);
});

myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do it 👿 ";
});
myButton.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "click me 😁";
});
