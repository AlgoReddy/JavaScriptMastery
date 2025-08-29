//counter program

const descBtn = document.getElementById("descBtn");
const resetBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("incBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;
incBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};
descBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
