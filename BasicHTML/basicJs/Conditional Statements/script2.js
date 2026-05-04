// 1.What are jump statements in JavaScript?
//Answer:- in javascript jump statements are "break" and "continue" we use jump statements to end up the looping or to skip that particular iteration
// break :- if the contition is satisfied stop the whole looping
// continue :- if the condition is satisfied skip the current iteration and continues to the next

// 2.Write a program using a loop that stops when the value becomes 5 using break.
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

//.3.Write a program to print numbers from 1 to 10 but stop the loop when the number is 6.
for (let i = 1; i <= 10; i++) {
  if (i == 6) {
    continue;
  }
  console.log(i);
}

// 4.Write a program using continue to skip printing the number 3 in a loop from 1 to 5.
//Code 1
let i = 1;
while (i <= 5) {
  if (i == 3) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

//Code2
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 5.Write a loop that skips one specific value and prints the rest using continue.
let x = 7;
for (let i = 0; i <= 10; i++) {
  if (i == x) {
    continue;
  }
  console.log(i);
}

// 6.Write a program to show how break immediately exits a loop.
for (let i = 0; i <= 10; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}

// 7.Write a program to show how continue skips only the current iteration and continues the loop.
x = 2;
for (let i = 1; i <= 10; i++) {
  if (i == 2) {
    continue;
  }
  x * i;
  console.log(x * i);
}

// 8.Create a function that returns the sum of two numbers using return.
function sum(x, y) {
  return x + y;
}
// sum(10,20);
console.log(sum(10, 20));

// 9.Write a function that calculates total price (price + tax) and returns the result.
let price = 300;
let tax = 50;
function total() {
  let totalPrice;
  totalPrice = price + tax;
  return totalPrice;
}
// let totalPrice;
console.log(total());

// 10. Write a function and show that any code after return does not execute.

function fn() {
  let a = 5;
  return a ** 2;
}
console.log(fn());

// 11. Create a loop and explain the difference in behavior when using break vs continue.
console.log("loop using break");

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
console.log("Loop using continue");

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 12. Write a program that uses break inside a loop and explain where the control goes after the loop ends.

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
console.log("Loop ended");