// creating a Number Guessing Game
const minNumber = 1;
const maxNumber = 100;
const number =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let running = true;
let attempts = 0;
let guess;
while (running) {
  guess = window.prompt(
    `Guess a number between the ${minNumber} - ${maxNumber}`
  );
  guess = Number(guess);
  if (isNaN(guess)) {
  window.alert("Please enter a valid numver")
  } else if (guess < minNumber || guess > maxNumber) {
    window.prompt("Please enter the number within the specified range");
  }else{
    attempts++;
    if (guess<number) {
        window.alert("TOO LOW! TRY AGAIN ");
    }else if (guess>number) {
        window.alert("TOO HIGH TRY AGAIN");
    }else{
        window.alert(`CORRECT! The answer was ${number} . It took you ${attempts} attempts`)
        running=false;
    }
  }
}
