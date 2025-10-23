// destructuring = it's a process of extracting the value or properties from the objects & arrays then assign them to a variables in a convenient way
//[] = for the arrays
//{} = for the objects

// Example 1
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);
// Example 2

const colors = ["red", "blue", "green", "Yellow", "orange", "mossiteBlack"];
[colors[0], colors[4], colors[3]] = [colors[2], colors[3], colors[5]];
console.log(colors);

// Example 3
const rangulu = ["erupu", "nalupu", "pasupu", "narinja", "mosambi"];
const [firstColor, secondColor, ThirdColor, ...remains] = rangulu;
console.log(firstColor);
console.log(secondColor);
console.log(ThirdColor);
console.log(remains);

// Destructuring the Objects
const person1 = {
  firstName: "spongeBob",
  lastName: "squarePants",
  age: 90,
  job: "waitress",
};
const person2 = {
  firstName: "lakshmi",
  lastName: "devi",
  age: 90,
};

const { firstName, lastName, age } = person1;
console.log(firstName, lastName, age);
const { chevariPeru, modatiPeru, vayasu, vodhyogam } = person2;
console.log(chevariPeru,modatiPeru,vayasu,vodhyogam);

// Destructuring the Objects using the functions

function displayPerson({firstName , lastName, age, job="ramboInBar"}){
    console.log(`name ${firstName}${lastName} of age ${age} doing  ${job} job`);
}
displayPerson(person1);
displayPerson(person2);
