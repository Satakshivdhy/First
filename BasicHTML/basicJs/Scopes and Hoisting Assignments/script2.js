// 1.Write a program using var where you log the variable before declaration and observe the output.

console.log(a); // undefined
var a = 20;

// 2.Write a program using var where you log thevariable before and after initialization.
console.log(b); // undefined
var b = 70;
console.log(b); // 70

// 3.Write a program using let and try to access the variable before declaration.

console.log(ab);  // error

let ab = "hello";

// 4.Write a program using const and try to access the variable before declaration.
console.log(abc);  //error
const abc = "hello";

// 5.Create a program using a function declaration and call the function before defining it.

fun(); // function call
function fun() {
  console.log("Hello, this is Henry");
}
// outpu:- Hello, this is Henry

// 6.Create a program using a function expression and call it before assignment.

fun2(); //script2.js:31 Uncaught ReferenceError: Cannot access 'fun2' before initialization at script2.js:31:1
const fun2 = function () {
  console.log("Hello, this is Peter");
};

// 7.Write a program to show that function expressions behave like variables in hoisting.
// fun3(); //script2.js:38 Uncaught ReferenceError: Cannot access 'fun3' before initialization
const fun3 = function () {
  console.log("i.m prooving that I behave like a variable in hoisting");
};

// 8.Create a block and try to access a let variable before declaration to observe TDZ.
{
  console.log(a); // error :- Cannot access 'a' before initialization
  let a = 80;
}

// 9.Write a program to compare var and let hoisting behavior

console.log(num1); // undefined
var num1 = 40;

console.log(num2); //error :-Cannot access 'num2' before initialization
let num2 = 50;

// 10.Create a program demonstrating var, let/const, and function declaration hoistingbehavior.

// variable hoisting:
console.log(variable);
console.log(constantVariable); //error:-  Cannot access 'constantVariable' before initialization
console.log(letVariable); //error:- Uncaught ReferenceError: Cannot access 'letVariable' before initialization
greet(); // o/p:- Hello, Welcome to Javascript hoisting

var variable = "hello";
const constantVariable = "7999";
let letVariable = "Welcome to RICR";
function greet() {
  console.log("Hello, Welcome to Javascript hoisting");
}
