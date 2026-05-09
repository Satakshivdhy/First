// 1.Create a function expression and store it in avariable, then call it.
const funExpression = function () {};

// 2.Write a function expression and execute it using the variable name.
const abc = function () {
  let a = 10;
  let b = 20;
  //   console.log(a + b);
  return a + b;
};
console.log(abc());

// 3.Create a function expression that takes onevalue and displays it.
const fnx = function (x) {
  console.log(x);
};
fnx(20);

// 4.Write a function expression that stores and prints a message.
const message = function () {
  let a = "Hello, Welcome to Javascript";
  console.log(a);
};
message();

// 5.Create a function expression with two parameters and display both values.
const fnnx = function (x, y) {
  console.log(x);
  console.log(y);
};
fnnx(36, 56);

// 6.Write two function expressions with different variable names and call both.
let var1 = function () {
  console.log("function Expression variable 1");
};
let var2 = function () {
  console.log("function Expression variable 2");
};
var1();
var2();

// 7.Create a function expression and assign it toanother variable, then call both.
const fun = function () {
  console.log("Hello,How are you?");
};
let a = fun;
console.log(a);

// 8.Write a function expression and print its returned value using console.log().
const xyz = function(a,b){
    return a+b;
}
console.log(xyz(20,40));

// 9.Call a function expression multiple times with different values.

console.log(xyz(12,67));
console.log(xyz(19,56));

// 10. Try calling a function expression beforedeclaring it and observe what happens.that returns the average of three numbers.

console.log(average());
// average()

const average = function(){
    let a =20;
    let b =30;
    let c =40;
    let avg= (a+b+c)/3;
    return avg;
}
// output
// Uncaught ReferenceError: Cannot access 'average' before initialization
// //  at script2.js:63:13