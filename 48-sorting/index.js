// sort method = sorts lexigographically
// alphabets , numbers , symbols

const people = [
  { name: "spongeBob", age: 34, gpa: 4.0 },
  { name: "patrick", age: 98, gpa: 4.2 },
  { name: "sandy", age: 72, gpa: 2.9 },
  { name: "jacky", age: 23, gpa: 1.8 },
  { name: "scoty", age: 24, gpa: 3.0 },
];

people.sort((a,b)=> a.name  -b.name);
people.sort((a,b)=> a.age   -b.age);
people.sort((a,b)=> a.gpa   -b.gpa);
people.sort((a,b)=> a.name.localeCompare(b.name));
console.log(people)
