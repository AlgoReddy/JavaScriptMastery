// 1. easy way = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let userName;
// userName = window.prompt("what's your user userName");
// console.log(userName);

let userName;
document.getElementById("mySubmit").onclick = function () {
  userName = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${userName}`;
};
