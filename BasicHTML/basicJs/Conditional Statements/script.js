// check no. is positive
let a = 15;
if (a > 0) {
  console.log("number is positive");
} else {
  console.log("number is negative");
}

//  even odd
if (a % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// Check Fail or pass
let marks = 91;
if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}
// Grade
console.log("obtained marks :", marks);

if (marks > 90) {
  console.log("A grade");
} else if (marks > 75) {
  console.log("B grade");
} else if (marks > 50) {
  console.log("c grade");
} else {
  console.log("Fail");
}

// Login

let username = true;
let password = false;
if (username === true && password === true) {
  console.log("Login Success");
} else {
  console.log("Login Fail");
}
// Ternary operator (Short hand)

username === true && password === true
  ? console.log("Login Success")
  : console.log("Login Fail");

// Applying short hand in place of if else for the same code
let data;
let name = "";
// if(name){
//     data=name;
// }
// else{
//     data="N/A"
// }
console.log(data);

// ShortHand
data = name || "N/A";
console.log(data);

//Contnue and Break

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

// Switch case

let choice = 2;
switch (choice) {
  case 1: {
    console.log("Tea");
    break;
  }
  case 2: {
    console.log("Coffee");
    break;
  }
  case 3: {
    console.log("Lassi");
    break;
  }
  default: {
    console.log("Pani");
  }
}
