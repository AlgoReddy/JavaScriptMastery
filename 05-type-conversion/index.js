// type conversion = change the datatype of a value to another
//                   (strings, numbers , booleans)

// example 1

/* let age = window.prompt("how old are you ");
age+=1;
before doing anything first convert it from the string to number using the numberfunction
age = Number(age);
age += 1;

console.log(age , typeof age); */

let x = "pizza";
let y = "pizza";
let z = "pizza";




x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // --> nan number
console.log(y, typeof y); // -->pizza string
console.log(z, typeof z); // --> true boolean

let a ="";
let b="";
let c="1";

console.log(a ,typeof a);// string
console.log(b ,typeof b);//string
console.log(c ,typeof c);// string

a=Number(a);
b =String(b);
c =boolean(c);

console.log(a ,typeof a);// number
console.log(b ,typeof b);//string
console.log(c ,typeof c);// error boolean is undefined
