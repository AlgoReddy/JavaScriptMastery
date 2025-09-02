// .checked  = property that determines the checked state of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const payPalBtn = document.getElementById("payPalBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `you are subscribed`;
  } else {
    subResult.textContent = `you are not subscribed`;
  }
  if (visaBtn.checked) {
    paymentResult.textContent = `you are paying with the visa card`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `you are paying with the paypal `;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `you are paying with the masterCard `;
  } else {
    paymentResult.textContent = `you have select atleast one method to purchase`;
  }
};
