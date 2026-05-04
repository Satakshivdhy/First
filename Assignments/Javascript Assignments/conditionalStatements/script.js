// 1.What is the purpose of if statement in JavaScript?

/// Answer:- when we are given conditions where we need to select either this or that , in that case we use if-else `

//2.Write a program to check if a number is greater than 10. If true print "Greater", else print "Smaller".

let a = 40;
if (a > 10) {
  console.log("Greater");
} else {
  console.log("Smaller");
}

// 3.Write a program to check if a number is even or odd.

a = 15;
if (a % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd Number");
}

// 4.What is the role of else in JavaScript?
// Answer :- if all the the conditions are fail then else runs

// 5.Write a program to check voting eligibility (age ≥ 18 → eligible, else not eligible)
let age = 21;
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}
// 6.Write a program to simulate a traffic signal (if
// green → go, else → stop).

let signal = "green";
if (signal === "green") {
  console.log("Go");
} else {
  console.log("Stop");
}

// 7.Write a program to check if a number is
// positive or not.

a = -12;
if (a >= 0) {
  console.log("Number is positive");
} else {
  console.log("Number is Negative");
}

// 8.Write a program to check if a number is
// divisible by 2 using condition.

a = 20;
if (a % 2 == 0) {
  console.log("Number is divisible by 2");
} else {
  console.log("Number is not divisible by 2");
}

// 9.What happens when the condition
// in if statement is false and there is
// an else block?
//  If if statement is false and there is an else block then else block will execute

// 10. Write a program and explain which block will execute when condition is true and when it is false.
// 11. Create a program and trace its execution step-by-step (condition → execution).
a = 20;
if (a % 2 == 0) {
  console.log("Number is divisible by 2");
} else {
  console.log("Number is not divisible by 2");
}
// Explaination:- a=20 , then we check if the condition is satisfied or not , if a%2 == 0 means the no. is divisible by 2 then if condition execute and the loop ends bt if , the condition is not satisfied then else works and then loop ends

// 12. Write a program to check a condition using
// comparison operators and print the result.

let abc = 26;
let bac = 12;
if (abc >= 30 || bac <= 20) {
  console.log("Condition1 satisfied");
} 
else {
  console.log("condition not satisfied");
}
//
if (abc >= 30 && bac <= 20) {
  console.log("Condition1 satisfied");
} 
else {
  console.log("condition not satisfied");
}
//
if(abc!=26){
    console.log("you are doing wrong");  
}
else{
    console.log("you are right");
    
}
