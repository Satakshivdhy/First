// 1.Create two variables and perform addition, subtraction, multiplication, and division.

let a = 10;
let b = 20;
console.log("Addition:", a + b);
console.log("Subtaction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// 2. Find the remainder when two numbers are divided using the modulus operator.
console.log("Modulo Division:", a % b);

//3.Use the exponent operator to calculate power of a number.

let num = 5;
console.log(num ** 2);
console.log(num ** 4);

// 4.Assign a value to a variable and then update it using += and -= operators.

let ab = 20;
console.log((ab += 30)); // ab=50
console.log((ab -= 30)); // ab=20

// 5.Use *= and /= operators to modify a variable’s
// value.
console.log((ab *= 2)); // ab=40
console.log((ab /= 5)); // ab=5

//6.Compare two values using == and === and observe the result.
let abc = 67;
let bcd = "67";
console.log(abc == bcd); // true
console.log(abc === bcd); // false

//7.Use comparison operators (>, <, >=, <=) to check different conditions.
let q = 66;
console.log(q > 40);
console.log(q < 40);
console.log(q >= 66);
console.log(q <= 65);
console.log(q == 66);

//8.Create two variables and check if both conditions are true using &&.
let var1 = 67;
let var2 = 90;
if (var1 > 40 && var2 < 100) {
  console.log("Bothe the conditions are true");
} else {
  console.log("conditions are false ");
}

// 9.Use ! operator to reverse a boolean value
console.log(var1);

console.log(var1 == 67);
console.log(var1 != 67);

// 10. Demonstrate pre-increment and post-increment and observe the difference.
var1 = 80;
console.log(var1);
// postincrement
console.log(var1++); // o/p 80
// preincrement
console.log(++var1); // o/p 82

// 11. Demonstrate pre-decrement and post-decrement and observe the difference.

var1 = 50;
console.log(var1);
// postincrement
console.log(var1--); // o/p 50
// preincrement
console.log(--var1); // o/p 48

// 12. Use the ternary operator to check if a number is pass or fail (marks ≥ 40).

let marks = 50;
marks >= 40 ? console.log("pass") : console.log("Fail");

// 13. Combine multiple conditions using logical operators (like marks > 80 AND attendance > 75).

marks = 85;
let attendance = 80;
(marks >80 && attendance>75 )? console.log("Pass with 'A' grade") : console.log("just passed");
;

// 14. Use typeof operator to check the data type of different values.
let m =null;

console.log(typeof marks);
console.log(typeof name);
console.log(typeof age);
console.log(typeof var1);
console.log(typeof m);
