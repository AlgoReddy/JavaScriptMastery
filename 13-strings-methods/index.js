// string methods = allow you to manipulate and work with text (strings)

let userName = "        yash aka algoreddy    ";
console.log(userName.charAt(8));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.repeat());
console.log("does the user name starts wit the name");
console.log(userName.startsWith(" "));
console.log("your name doesn't end with the empty space");
console.log(userName.endsWith(" "));

let phoneNumber = "798-234-3424-342";
console.log(
  "here we are eliminating the hypens in the phone number using replaceAll method in the phoneNumber"
);
phoneNumber = phoneNumber.replaceAll("-", "");
// phoneNumber=phoneNumber.replaceAll("()", "");
console.log(phoneNumber);
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(100, "oh-oh");
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(200, "ah-ah");
console.log(phoneNumber);
