/*
Rest parameters = (... rest ) allow a function work with variable number of arguments by handling them into an aray
  spread =expands an array into an separate elements
  rest=bundles separate elements into an array


*/
function openFridge(...foods) {
  console.log(foods);
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
openFridge(food1, food2, food3, food4, food5);
