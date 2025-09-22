// method chaining -- is a concept of contacting methods to reduce the size & using different variables to make code more readable & maintainable .

let userInput = window.prompt("Enter Your Name");
let firstCapital = userInput.toUpperCase();
firstWord=firstCapital.charAt(0);
secondWord = userInput.slice(1);
secondWord=userInput.toLowerCase();
let finalWord = firstWord+secondWord;
console.log(finalWord);

// instead of writing above code we can use the method chaining to get make it more readable

//------------------------method-chaining-----------
let secondUserInput= userInput.trim().charAt(0).toUpperCase()+userInput.slice(1).toLowerCase();
console.log(secondUserInput)
