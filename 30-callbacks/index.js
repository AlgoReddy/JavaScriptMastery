//callback = a function is passed as a argument so that it will ensure the completion of the program after the one we intended
sum(displayPage, 3, 5);
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayConsole(result) {
  console.log(result);
}
function displayPage(result) {
  document.getElementById("myId").innerText = result;
}
