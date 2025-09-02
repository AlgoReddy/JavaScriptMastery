// switch : when we have the multiple if else conditions it's a better way to implement them instead of them

let day = 4;

switch (day) {
  case 1:
    console.log(" it is monday ");

    break;
  case 2:
    console.log(" it is Tuesday");

    break;
  case 3:
    console.log(" it is Wednesday");

    break;
  case 4:
    console.log(" it is Thursday");

    break;
  case 5:
    console.log(" it is Friday");

    break;
  case 6:
    console.log(" it is Saturday");

    break;
  case 7:
    console.log(" it is Sunday");

    break;

  default:
    break;
}


/// advanced switch case 
let marks = 12;
let grade;
switch (true) {
  case marks >= 90:
    console.log(" you got the A grade  ");
    break;
  case marks >= 80:
    console.log(" you got the B grade  ");
    break;
  case marks >= 70:
    console.log(" you got the c grade  ");
    break;
  case marks >= 60:
    console.log(" you got the D grade  ");
    break;
  case marks >= 40:
    console.log(" you got the E grade  ");
    break;
  case marks < 40:
    console.log(" you got the F grade  ");
    break;
  default:
    console.log(" not a valid input");
    break;
}
