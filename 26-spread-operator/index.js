let userName = "BroIsADude";
let letters = [...userName].join("-");
console.log(letters);

let fruits = ["apple" , "banana","Orange"];
let vegetables = ["carrots","celery" ,"potatoes"];
let newFruits= [...fruits];
let foods=[...fruits,...vegetables , "eggs" ,"milk"];
console.log(foods);
console.log(newFruits);
